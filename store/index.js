import Vuex from 'vuex'
import snackbarModule from "~/store/snackbar";
import loginModule from "~/store/login";
import studyModule from "~/store/study";
import configModule from "~/store/config";
import interestsModule from "~/store/interests";

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      snackbar: snackbarModule(),
      login: loginModule(),
      study: studyModule(),
      config: configModule(),
      interests: interestsModule(),
    }
  })
}

export default createStore