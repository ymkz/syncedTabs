import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from 'store'
import { Title } from 're-bulma'
import '../stylesheets/setting.css'

export default class Setting extends Component {

  state = {
    optionPinnedInclude: store.get('optionPinnedInclude') || false
  }

  onChangePinnedInclude = () => {
    this.setState({ optionPinnedInclude: !this.state.optionPinnedInclude }, () => {
      store.set('optionPinnedInclude', this.state.optionPinnedInclude)
    })
  }

  render() {
    return (
      <div styleName="container">
        <header styleName="header">
          <Title size="is1">syncedTabs</Title>
        </header>
        <div styleName="options">
          <div styleName="context">オプション</div>
          <div styleName="option">
            <input id="optionPinnedInclude" type="checkbox" checked={this.state.optionPinnedInclude} onChange={::this.onChangePinnedInclude} />
            <label htmlFor="optionPinnedInclude">ピン留めされたタブを表示する</label>
          </div>
        </div>
      </div>
    )
  }
}
