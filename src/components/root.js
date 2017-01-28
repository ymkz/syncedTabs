import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, CardContent, Content, Subtitle } from 're-bulma'
import styles from '../stylesheets/root.css'

const Tab = ({ tab }) => (
  <li>
    <a href={tab.url} target="_blank">{tab.title}</a>
  </li>
)

const Device = ({ device }) => (
  <Card>
    <CardContent>
      <Subtitle size="is3">{device.deviceName}</Subtitle>
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

const get = () => {
  return new Promise((resolve) => {
    chrome.sessions.getDevices(devices => {
      const data = []
      devices.map(device => {
        const deviceName = device.deviceName
        const tabs = []
        device.sessions[0].window.tabs.map(tab => {
          const info = {
            favIconUrl: tab.favIconUrl,
            title: tab.title,
            url: tab.url
          }
          tabs.push(info)
        })
        data.push({ deviceName: deviceName, tabs: tabs })
      })
      resolve(data)
    })
  })
}

export default class Root extends Component {

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
    return (
      <div className={styles.container}>
        {this.state.data.map((device, index) => (
          <Device device={device} key={index} />
        ))}
      </div>
    )
  }
}
