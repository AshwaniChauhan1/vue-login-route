<template>
  <div>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">Vue</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item" >
            <button @click="openLogin" class="button is-white">Login</button>
          </div>
          <div class="navbar-item" v-if="loggedIn === 'true'">
            <button class="button is-white" @click="logoutFunction">Logout</button>
          </div>
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
  data: () => {
    return {
      loggedIn: ""
    };
  },
  mounted() {
    this.loggedIn = localStorage.isLoggedIn;
  },
  updated() {
    this.loggedIn = localStorage.isLoggedIn;
  },
  methods: {
    ...mapActions({
      logoutFunction: "loginData/loggedOut"
    }),
    openLogin() {
      this.$router.push("/login");
    }
  }
};
</script>