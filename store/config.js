const createState = () => ({
  headers: {
    "mac-address": "36a160a8-1e69-41cc-8eb8-aa006289936d"
  }
})

const getters = {

}

const mutations = {
  SET_HEADERS(state, data) {
    state.headers = data
  },
}

const actions = {
  getHeaders(context, data) {
    context.commit('SET_HEADERS', data)
  },
}

const configModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default configModule