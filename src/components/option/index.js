import React, { Component } from 'react'
import store from 'store'
import Switch from './switch'
import './style.css'

export default class Setting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      optionPinnedInclude: store.get('optionPinnedInclude') || false,
      optionOpenForeground: store.get('optionOpenForeground') || false,
      optionLastmodifiedDisplay: store.get('optionLastmodifiedDisplay') || false,
      optionUseDefaultListstyle: store.get('optionUseDefaultListstyle') || false
    }
  }

  onChangeOptionPinnedInclude = (e) => {
    this.setState({ optionPinnedInclude: e.target.checked }, () => {
      store.set('optionPinnedInclude', this.state.optionPinnedInclude)
    })
  }

  onChangeOptionOpenForeground = (e) => {
    this.setState({ optionOpenForeground: e.target.checked }, () => {
      store.set('optionOpenForeground', this.state.optionOpenForeground)
    })
  }

  onChangeOptionLastmodifiedDisplay = (e) => {
    this.setState({ optionLastmodifiedDisplay: e.target.checked }, () => {
      store.set('optionLastmodifiedDisplay', this.state.optionLastmodifiedDisplay)
    })
  }

  onChangeOptionUseDefaultListstyle = (e) => {
    this.setState({ optionUseDefaultListstyle: e.target.checked }, () => {
      store.set('optionUseDefaultListstyle', this.state.optionUseDefaultListstyle)
    })
  }

  render () {
    return (
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
          <Switch identifier='optionPinnedInclude' description='ピン留めされたタブを表示する' checked={this.state.optionPinnedInclude} switchToggle={this.onChangeOptionPinnedInclude} />
          <Switch identifier='optionOpenForeground' description='リンクをフォアグラウンドで開く' checked={this.state.optionOpenForeground} switchToggle={this.onChangeOptionOpenForeground} />
          <Switch identifier='optionLastmodifiedDisplay' description='最終更新時間を表示する' checked={this.state.optionLastmodifiedDisplay} switchToggle={this.onChangeOptionLastmodifiedDisplay} />
          <Switch identifier='optionUseDefaultListstyle' description='デフォルトのリストスタイルで表示する' checked={this.state.optionUseDefaultListstyle} switchToggle={this.onChangeOptionUseDefaultListstyle} />
        </div>
      </div>
    )
  }
}
