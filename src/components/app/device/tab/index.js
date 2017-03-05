import React from 'react';
import store from 'store';
import './style.css';

export default ({ tab, active }) => {
  const favicon = store.get('optionUseDefaultListstyle')
    ? require('../../../../images/default.png')
    : `http://www.google.com/s2/favicons?domain=${tab.url}`;
  return (
    <div styleName="tab" onClick={() => chrome.tabs.create({url: tab.url, active: active})}>
      <img styleName="favicon" src={favicon} />
      <span styleName="text">{tab.title}</span>
    </div>
  );
};
