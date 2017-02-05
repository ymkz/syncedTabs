import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from 'store'
import { Title } from 're-bulma'
import style from '../stylesheets/setting.css'

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
      <div className={style.container}>
        <header className={style.header}>
          <Title size="is1">syncedTabs</Title>
        </header>
        <div className={style.options}>
          <div className={style.context}>オプション</div>
          <div className={style.option}>
            <input id="optionPinnedInclude" type="checkbox" checked={this.state.optionPinnedInclude} onChange={::this.onChangePinnedInclude} />
            <label htmlFor="optionPinnedInclude">ピン留めされたタブを表示する</label>
          </div>
        </div>
      </div>
    )
  }
}
