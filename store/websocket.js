import CryptoJS from 'crypto-js'

const createState = () => ({
  
})

const getters = {

}

const mutations = {
  
}

const actions = {
  getConnect(context, _this) {
    let stringify = JSON.stringify({ token: _this.getCookies("token") })
    let encryption = CryptoJS.enc.Utf8.parse(stringify)
    let result = CryptoJS.enc.Base64.stringify(encryption)
    _this.$cable.connection.connect(
      `${process.env.WEBSOCKET_HOST}?token=${result}`
    )
  },
  getSubscribe(context, data) {
    data._this.$cable.subscribe({
      channel: data.channel
    });
  },
  getMessage(context, data) {
    data._this.$cable.perform({
      channel: data.channel,
      data: data.data
    });
  }
}

const websocketModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default websocketModule