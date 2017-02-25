import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import moment from 'moment';
import { Card, CardContent, Content, Subtitle } from 're-bulma';
import './style.css';

const OPTION_OPEN_FOREGROUND = store.get('optionOpenForeground') || false;
const OPTION_PINNED_INCLUDE = store.get('optionPinnedInclude') || false;
const OPTION_LASTMODIFIED_DISPLAY = store.get('optionLastmodifiedDisplay') || false;

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

const Time = ({ time }) => (
  <div styleName="modified">
    <span>{moment.unix(time).format('MMMM Do YYYY, H:mm:ss')}</span>
  </div>
);

const None = ({ display }) => (
  <div styleName="none">
    <span>{display}</span>
  </div>
);

const Tab = ({ tab, active }) => (
  <li styleName="link" onClick={() => chrome.tabs.create({url: tab.url, active: active})}>
    <span>{tab.title}</span>
  </li>
);

const Device = ({ device, active }) => (
  <Card>
    <CardContent>
      <div styleName="heading">
        <Subtitle size="is3">{device.deviceName}</Subtitle>
      </div>
      {OPTION_LASTMODIFIED_DISPLAY &&
        <Time time={device.lastModified} />
      }
      <Content>
        {device.tabs.length === 0 ?
          <None display="There are no tabs to display." />
        : <ul>
            {device.tabs.map((tab, index) => (
              <Tab tab={tab} active={active} key={index} />
            ))}
          </ul>
        }
      </Content>
    </CardContent>
  </Card>
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
          <None display="There are no devices to display." />
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
