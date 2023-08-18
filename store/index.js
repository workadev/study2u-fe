import Vuex from 'vuex'
import snackbarModule from "~/store/snackbar";

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      snackbar: snackbarModule()
    }
  })
}

export default createStore