import React, { Component } from 'react'
import store from 'store'
import Device from './device'
import None from './none'
import { getTabsFromSessions } from '../utils/fetch'
import '../stylesheets/app.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    getTabsFromSessions().then(response => this.setState({ data: response }))
  }

  render () {
    console.info('state: ', this.state.data, ' length: ', this.state.data.length)
    if (this.state.data.length === 0) {
      return (
        <div styleName='container none'>
          <None text='There are no devices to display.' />
        </div>
      )
    } else {
      return (
        <div styleName='container'>
          {this.state.data.map((device, index) => (
            <Device device={device} active={store.get('optionOpenForeground')} key={index} />
          ))}
        </div>
      )
    }
  }
}
