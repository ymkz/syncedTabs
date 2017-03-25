import React from 'react'
import store from 'store'
import './style.css'

// `https://icons.better-idea.org/icon?url=${tab.url}&size=100`
// `http://www.google.com/s2/favicons?domain=${tab.url.match(/https?:\/\/[a-zA-Z0-9\-_\.:@!~*'\(¥);\+$,]+/img)[0]}`

export default ({ tab, active }) => {
  const favicon = store.get('optionUseDefaultListstyle')
    ? require('../../../../images/default.png')
    : tab.url.match(/^chrome:\/\/+?|^chrome-extension:\/\/+?/img) !== null
      ? require('../../../../images/chrome.png')
      : `http://www.google.com/s2/favicons?domain=${tab.url}`
  return (
    <div styleName='tab' onClick={() => chrome.tabs.create({url: tab.url, active: active})}>
      <img styleName='favicon' src={favicon} />
      <span styleName='text'>{tab.title}</span>
    </div>
  )
}
