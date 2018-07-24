/**
 * Main config for App:
 *  - api url
 *  - development mode
 *  - ...
 *
 * @type {}
 */
const mainConfig = {
  baseApiUrl: 'https://shiroad.com',
  // baseApiUrl: 'http://shiroad.local',
  baseUrl: '',
  isDevelopmentMode: true,
  useFakeData: false,
  key: 'UFjSwjHQii',
  eBooks: [{id: 1, name: 'Learning python'},{id: 2, name: 'Learning PHP'},{id: 3, name: 'Learning AWS'}]
}

export default function (Vue) {
  window.mcf = Vue.mcf = mainConfig

  Object.defineProperties(Vue.prototype, {
    $mcf: {
      get: function () {
        return mainConfig
      }
    },
  })
}
