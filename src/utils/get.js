import store from 'store'

const OPTION_PINNED_INCLUDE = store.get('optionPinnedInclude')

export const get = () => {
  return new Promise((resolve) => {
    chrome.sessions.getDevices(devices => {
      const data = []
      devices.map(device => {
        const deviceName = device.deviceName
        const tabs = []
        device.sessions[0].window.tabs.filter(tab => tab.pinned === false || OPTION_PINNED_INCLUDE === true).map(tab => {
          const info = {
            windowId: tab.windowId,
            pinned: tab.pinned,
            url: tab.url,
            title: tab.title,
            favIconUrl: tab.favIconUrl,
            sessionId: tab.sessionId
          }
          tabs.push(info)
        })
        data.push({ deviceName: deviceName, tabs: tabs })
      })
      resolve(data)
    })
  })
}
