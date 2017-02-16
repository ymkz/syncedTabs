# syncedTabs
> [syncedTabs](https://chrome.google.com/webstore/detail/syncedtabs/pidbmkbopopclkdjflnlcgnefcifdmno) is Chrome Extension with ES6 + Yarn + React + Bulma + (CSS Modules)


## TL;DR
> __Faster access to pages opened in your other devices.__  
Do a search something outside with a smartphone.  
After going home, you access them from a computer.

the same functions is provided `chrome://history/syncedTabs`  
##### Precondition
* Signing in your devices with your __same__ google account
* Using __Google Chrome__ in your devices


## Build
* `yarn build` : build files to `dist/javascripts/*.bundle.js`
* `yarn build:watch` : build files to `dist/javascripts/*.bundle.js` observing code change


## ToDo
* titleがurlのもの[https://|http://|chrome-extension://]はparseしてうまくやる
* deviceがゼロ件のときの処理
* オプションページのi18n対応
* Whitelistでignoreするページの設定する(?)
* 複数デバイスで重複するページを除去


## Changelog
* v1.0.5 (2017/02/17) implement to display if device has no tab
* v1.0.4 (2017/02/12) implement to open link background
* v1.0.3 (2017/02/06) implement to expect pinned tab and setting
* v1.0.2 (2017/01/30) modify overflow styling
* v1.0.1 (2017/01/27) update for chrome web store
* v1.0.0 (2017/01/26) release now available!

-------------

### Thanks
[Material Icons](https://www.google.com/design/icons/)
