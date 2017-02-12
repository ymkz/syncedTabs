import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from 'store'
import { Card, CardContent, Content, Subtitle } from 're-bulma'
import '../stylesheets/view.css'

const OPTION_OPEN_FOREGROUND = store.get('optionOpenForeground')
const OPTION_PINNED_INCLUDE = store.get('optionPinnedInclude')

export const get = () => {
  return new Promise((resolve) => {
    chrome.sessions.getDevices(devices => {
      const data = []
      devices.map(device => {
        const deviceName = device.deviceName
        const tabs = []
        device.sessions[0].window.tabs.filter(tab => tab.pinned === false || OPTION_PINNED_INCLUDE === true).map(tab => {
          const info = {
            windowId: tab.windowId,
            pinned: tab.pinned,
            url: tab.url,
            title: tab.title,
            favIconUrl: tab.favIconUrl,
            sessionId: tab.sessionId
          }
          tabs.push(info)
        })
        data.push({ deviceName: deviceName, tabs: tabs })
      })
      resolve(data)
    })
  })
}

const Tab = ({ tab, active }) => (
  <li>
    <span styleName="link" onClick={() => chrome.tabs.create({url: tab.url, active: active})}>{tab.title}</span>
  </li>
)

const Device = ({ device, active }) => (
  <Card>
    <CardContent>
      <div styleName="heading">
        <Subtitle size="is3">{device.deviceName}</Subtitle>
      </div>
      <Content>
        <ul>
          {device.tabs.map((tab, index) => (
            <Tab tab={tab} active={active} key={index} />
          ))}
        </ul>
      </Content>
    </CardContent>
  </Card>
)

export default class View extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    get().then(res => {
      this.setState({ data: res })
    })
  }

  render() {
    return (
      <div styleName="container">
        {this.state.data.map((device, index) => (
          <Device device={device} active={OPTION_OPEN_FOREGROUND} key={index} />
        ))}
      </div>
    )
  }
}
