import React from 'react'
import Switch from './switch'
import './style.css'

export default () => (
  <div styleName='container'>
    <header styleName='header'>
      <h1 styleName='title'>syncedTabs</h1>
      <div styleName='nav'>
        <a styleName='icon' href='https://github.com/ymkz/syncedTabs' target='_blank'>
          <i className='fa fa-fw fa-github' aria-hidden='true' />
        </a>
      </div>
    </header>
    <div styleName='options'>
      <div styleName='context'>オプション</div>
      <Switch identifier='optionPinnedInclude' description='ピン留めされたタブを表示する' />
      <Switch identifier='optionOpenForeground' description='リンクをフォアグラウンドで開く' />
      <Switch identifier='optionLastmodifiedDisplay' description='最終更新時間を表示する' />
      <Switch identifier='optionUseDefaultListstyle' description='デフォルトのリストスタイルで表示する' />
    </div>
  </div>
)
