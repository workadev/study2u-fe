import Cookies from "js-cookie";
import dayjs from "dayjs";

export default {
  filters: {
    capitalized: function(data) {
      if (data) {
        var capitalized = []
        data.split(' ').forEach(word => {
          capitalized.push(
            word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()
          )
        })
        return capitalized.join(' ')
      }
    },
    formatCurrency: function(data) {
      if (data) {
        return data.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
      } else {
        return 0
      }
    }
  },
  methods: {
    formatDate(value, format = "YYYY-MM-DD") {
      return dayjs(value).format(format)
    },
  },
}