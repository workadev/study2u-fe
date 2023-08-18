const createState = () => ({
  dataSnackbar: {}
})

const getters = {

}

const mutations = {
  SET_SNACKBAR(state, data) {
    state.dataSnackbar = data
  },
}

const actions = {
  getSnackbar(context, data) {
    context.commit('SET_SNACKBAR', data)
  },
}

const userModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default userModule