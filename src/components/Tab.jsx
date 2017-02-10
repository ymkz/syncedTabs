import React from 'react'

const Tab = ({ tab }) => (
  <li>
    <a href={tab.url} target="_blank">{tab.title}</a>
  </li>
)

export default Tab
