# syncedTabs
> [syncedTabs](https://chrome.google.com/webstore/detail/syncedtabs/pidbmkbopopclkdjflnlcgnefcifdmno) is Chrome Extension with ES6 + Yarn + React + Bulma + (CSS Modules)


## TL;DR
> __Faster access to pages opened in your other device.__  
Do a search something outside with a smartphone.  
After going home, you access them from a computer.

the same functions is provided `chrome://history/syncedTabs`  
##### Precondition
* Signing in your devices with your __same__ google account
* Using __Google Chrome__ in your devices


## Development
* in development, edit files under `src` directory
* for debugging in chrome, add `dist` directory to chrome with `developer mode`


## Build
* `yarn build` : build files to `dist/bundle.js`
* `yarn build:watch` : build files to `dist/bundle.js` observing code changes


## Data Structure
```
[
  {
    deviceName: "deviceName",
    tabs: [
      {
        favIconUrl: "favIconUrl",
        title: "title",
        url: "url"
      },
      ...
    ]
  },
  ...
]
```


## ToDo
* pinされてるタブは弾く(?)
* titleがurlのもの[https://|http://|chrome-extension://]はparseしてうまくやる
* deviceがゼロ件のときの処理
* titleがurlでurl文字列が十分に長いときに折り返さずにoverflowしてしまう問題
* リスト表示じゃなくてfavicon表示にしたい
* 表示を弄るためのオプションの設定画面をつくる
* 全タブ一斉展開(多すぎる時には確認?)
* スクロールバーの見た目の差異吸収
* WebStore用イメージ用意
* Whitelistでignoreするページの設定する(?)


## Changelog
- 2017/1/27 version 1.0.1 update for chrome web store
- 2017/1/26 version 1.0.0 release now available!

-------------

## Thanks
[Material Icons](https://www.google.com/design/icons/)
