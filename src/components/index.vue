<template>
  <div>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">Vue</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link class="is-light navbar-item" v-if="!isLoggedIn" to="/login">
            <button class="button is-white">Login</button>
          </router-link>
          <router-link v-if="isLoggedIn" class="is-light navbar-item" to="/jn">
            <button class="button is-white" @click="logoutFunction">Logout</button>
          </router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "index",
  computed: {
    isLoggedIn() {
      return this.$store.state.loginData.isLoggedIn;
    }
  },
  methods:{
      ...mapActions({
         logoutFunction: "loginData/loggedOut"
      })
  }
};
</script>