import React from 'react'
import { Card, CardContent, Content, Subtitle } from 're-bulma'
import Tab from '../components/Tab'
import '../stylesheets/device.css'

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

export default Device
