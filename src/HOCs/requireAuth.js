import { createHOC } from "vue-hoc"

import { mapGetters } from "vuex"
import { router } from "../main"

function requireAuth(component) {
  const options = {
    name: "requireAuth",
    computed: mapGetters(["isLoggedIn"]),
    created() {
      if (!this.isLoggedIn) {
        router.push("/")
      }
    },
  }

  return createHOC(component, options)
}

export default requireAuth
