const createState = () => ({
  listPresence: []
})

const getters = {

}

const mutations = {
  SET_LIST_PRESENCE(state, data) {
    state.listPresence = data
  }
}

const actions = {
  getListPresence(context, _this) {
    this.$axios.get(`${_this.userType}/v1/presences`, _this.token)
    .then((res) => {
      if (res.status == 200) {
        context.commit("SET_LIST_PRESENCE", res.data.data.staffs)
      }
    })
    .catch(err => {})
  },
}

const conversationModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default conversationModule