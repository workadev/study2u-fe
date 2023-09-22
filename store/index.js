import Vuex from 'vuex'
import snackbarModule from "~/store/snackbar";
import loginModule from "~/store/login";
import studyModule from "~/store/study";
import configModule from "~/store/config";
import interestsModule from "~/store/interests";
import institutionsModule from "~/store/institutions";

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      snackbar: snackbarModule(),
      login: loginModule(),
      study: studyModule(),
      config: configModule(),
      interests: interestsModule(),
      institutions: institutionsModule(),
    }
  })
}

export default createStore