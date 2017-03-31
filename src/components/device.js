import React from 'react'
import store from 'store'
import moment from 'moment'
import None from './none'
import Tab from './tab'
import '../styles/device.css'

export default ({ device, active }) => (
  <div styleName='box'>
    <div styleName='header'>
      <span styleName='name'>{device.deviceName}</span>
      {store.get('optionLastmodifiedDisplay') &&
        <span styleName='time'>{moment.unix(device.lastModified).format('MMMM Do YYYY, H:mm:ss')}</span>
      }
    </div>
    <div styleName='content'>
      {device.tabs.length === 0
      ? <None text='There are no tabs to display.' />
      : <div>{device.tabs.map((tab, index) => <Tab tab={tab} active={active} key={index} />)}</div>
      }
    </div>
  </div>
)
