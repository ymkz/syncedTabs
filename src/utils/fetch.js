import store from 'store'

export function getTabsFromSessions () {
  return new Promise(resolve => {
    chrome.sessions.getDevices(devices => {
      const data = []
      devices.map(device => {
        const tabs = []
        const deviceName = device.deviceName
        const lastModified = device.sessions[0].lastModified
        device.sessions[0].window.tabs.filter(tab => tab.pinned === false || store.get('optionPinnedInclude') === true).map(tab => {
          const info = {
            index: tab.index,
            windowId: tab.windowId,
            pinned: tab.pinned,
            url: tab.url,
            title: tab.title,
            favIconUrl: tab.favIconUrl,
            sessionId: tab.sessionId
          }
          tabs.push(info)
        })
        data.push({ deviceName: deviceName, lastModified: lastModified, tabs: tabs })
      })
      resolve(data)
    })
  })
}
