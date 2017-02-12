import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from 'store'
import '../stylesheets/setting.css'

export default class Setting extends Component {

  state = {
    optionPinnedInclude: store.get('optionPinnedInclude') || false,
    optionOpenForeground: store.get('optionOpenForeground') || false
  }

  onChangeOptionPinnedInclude() {
    this.setState({ optionPinnedInclude: !this.state.optionPinnedInclude }, () => {
      store.set('optionPinnedInclude', this.state.optionPinnedInclude)
    })
  }

  onChangeOptionOpenForeground() {
    this.setState({ optionOpenForeground: !this.state.optionOpenForeground }, () => {
      store.set('optionOpenForeground', this.state.optionOpenForeground)
    })
  }

  render() {
    return (
      <div styleName="container">
        <header styleName="header">
          <h1>syncedTabs</h1>
          <div styleName="nav">
            <a styleName="icon" href="https://github.com/ymkz/syncedTabs" target="_blank"><i className="fa fa-fw fa-github" aria-hidden="true"></i></a>
          </div>
        </header>
        <div styleName="options">
          <div styleName="context">オプション</div>
          <div styleName="option">
            <input id="optionPinnedInclude" type="checkbox" checked={this.state.optionPinnedInclude} onChange={::this.onChangeOptionPinnedInclude} />
            <label htmlFor="optionPinnedInclude">ピン留めされたタブを表示する</label>
          </div>
          <div styleName="option">
            <input id="optionOpenForeground" type="checkbox" checked={this.state.optionOpenForeground} onChange={::this.onChangeOptionOpenForeground} />
            <label htmlFor="optionOpenForeground">リンクをフォアグラウンドで開く</label>
          </div>
        </div>
      </div>
    )
  }
}
