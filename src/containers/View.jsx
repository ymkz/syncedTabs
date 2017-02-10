import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Device from '../components/Device'
import { get } from '../utils/get'
import '../stylesheets/view.css'

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
          <Device device={device} key={index} />
        ))}
      </div>
    )
  }
}
