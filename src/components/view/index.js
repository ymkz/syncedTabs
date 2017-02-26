import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import moment from 'moment';
import './style.css';

const OPTION_PINNED_INCLUDE = store.get('optionPinnedInclude') || false;
const OPTION_OPEN_FOREGROUND = store.get('optionOpenForeground') || false;
const OPTION_LASTMODIFIED_DISPLAY = store.get('optionLastmodifiedDisplay') || false;
const OPTION_USE_DEFAULT_LISTSTYLE = store.get('optionUseDefaultListstyle') || false;

const get = () => {
  return new Promise((resolve) => {
    chrome.sessions.getDevices(devices => {
      const data = [];
      devices.map(device => {
        const deviceName = device.deviceName;
        const lastModified = device.sessions[0].lastModified;
        const tabs = [];
        device.sessions[0].window.tabs.filter(tab => tab.pinned === false || OPTION_PINNED_INCLUDE === true).map(tab => {
          const info = {
            index: tab.index,
            windowId: tab.windowId,
            pinned: tab.pinned,
            url: tab.url,
            title: tab.title,
            favIconUrl: tab.favIconUrl,
            sessionId: tab.sessionId
          };
          tabs.push(info);
        });
        data.push({ deviceName: deviceName, lastModified: lastModified, tabs: tabs });
      });
      resolve(data);
    });
  });
}

const Nothing = ({ text }) => (
  <div styleName="none">
    <span>{text}</span>
  </div>
);

const Tab = ({ tab, active }) => {
  const favicon = OPTION_USE_DEFAULT_LISTSTYLE
    ? require('../../images/default.png')
    : `http://www.google.com/s2/favicons?domain=${tab.url}`;
  return (
    <div styleName="tab" onClick={() => chrome.tabs.create({url: tab.url, active: active})}>
      <img styleName="favicon" src={favicon} />
      <span styleName="text">{tab.title}</span>
    </div>
  );
};

const Device = ({ device, active }) => (
  <div styleName="wrapper">
    <div styleName="heading">
      <span styleName="name">{device.deviceName}</span>
      {OPTION_LASTMODIFIED_DISPLAY &&
        <span styleName="time">{moment.unix(device.lastModified).format('MMMM Do YYYY, H:mm:ss')}</span>
      }
    </div>
    <div styleName="content">
      {device.tabs.length === 0 ?
        <Nothing text="There are no tabs to display." />
      : <div>
          {device.tabs.map((tab, index) => (
            <Tab tab={tab} active={active} key={index} />
          ))}
        </div>
      }
    </div>
  </div>
);

export default class View extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    get().then(response => this.setState({ data: response }));
  }

  render() {
    console.log("state: ", this.state.data, "length: ", this.state.data.length);

    if (this.state.data.length === 0) {
      return (
        <div styleName="container">
          <Nothing text="There are no devices to display." />
        </div>
      );
    }

    return (
      <div styleName="container">
        {this.state.data.map((device, index) => (
          <Device device={device} active={OPTION_OPEN_FOREGROUND} key={index} />
        ))}
      </div>
    );
  }
}
