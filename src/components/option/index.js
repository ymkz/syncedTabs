import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import './style.css';

export default class Setting extends Component {

  state = {
    optionPinnedInclude: store.get('optionPinnedInclude') || false,
    optionOpenForeground: store.get('optionOpenForeground') || false,
    optionLastmodifiedDisplay: store.get('optionLastmodifiedDisplay') || false,
    optionUseDefaultListstyle: store.get('optionUseDefaultListstyle') || false,
  }

  onChangeOptionPinnedInclude() {
    this.setState({ optionPinnedInclude: !this.state.optionPinnedInclude }, () => {
      store.set('optionPinnedInclude', this.state.optionPinnedInclude);
    });
  }

  onChangeOptionOpenForeground() {
    this.setState({ optionOpenForeground: !this.state.optionOpenForeground }, () => {
      store.set('optionOpenForeground', this.state.optionOpenForeground);
    });
  }

  onChangeOptionLastmodifiedDisplay() {
    this.setState({ optionLastmodifiedDisplay: !this.state.optionLastmodifiedDisplay }, () => {
      store.set('optionLastmodifiedDisplay', this.state.optionLastmodifiedDisplay);
    });
  }

  onChangeOptionUseDefaultListstyle() {
    this.setState({ optionUseDefaultListstyle: !this.state.optionUseDefaultListstyle }, () => {
      store.set('optionUseDefaultListstyle', this.state.optionUseDefaultListstyle);
    });
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
          <div styleName="option">
            <input id="optionLastmodifiedDisplay" type="checkbox" checked={this.state.optionLastmodifiedDisplay} onChange={::this.onChangeOptionLastmodifiedDisplay} />
            <label htmlFor="optionLastmodifiedDisplay">最終更新時間を表示する</label>
          </div>
          <div styleName="option">
            <input id="optionUseDefaultListstyle" type="checkbox" checked={this.state.optionUseDefaultListstyle} onChange={::this.onChangeOptionUseDefaultListstyle} />
            <label htmlFor="optionUseDefaultListstyle">デフォルトのリストスタイルで表示する</label>
          </div>
        </div>
      </div>
    );
  }
}
