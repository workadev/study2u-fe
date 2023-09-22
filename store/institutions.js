const createState = () => ({
  
})

const getters = {

}

const mutations = {
  
}

const actions = {
  getListInstitutions(context, data) {
    this.$axios.post(`v1/institutions/${data.id}/${data.shortlist}`, null, data.token)
    .then((res) => {})
    .catch(err => {})
  },
}

const institutionsModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default institutionsModule