import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from 'store'
import { Card, CardContent, Content, Subtitle } from 're-bulma'
import '../stylesheets/view.css'

const OPTION_PINNED_INCLUDE = store.get('optionPinnedInclude')

const get = () => {
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

const Tab = ({ tab }) => (
  <li>
    <a href={tab.url} target="_blank">{tab.title}</a>
  </li>
)

const Device = ({ device }) => (
  <Card>
    <CardContent>
      <div styleName="heading">
        <Subtitle size="is3">{device.deviceName}</Subtitle>
      </div>
      <Content>
        <ul>
          {device.tabs.map((tab, index) => (
            <Tab tab={tab} key={index} />
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

  componentWillMount() {
    get().then(res => {
      this.setState({ data: res })
    })
  }

  componentDidMount() {
    get().then(res => {
      this.setState({ data: res })
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div styleName="container">
        {this.state.data.map((device, index) => (
          <Device device={device} key={index} />
        ))}
      </div>
    )
  }
}
