<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Login Form</h1>
        </div>
      </div>
    </section>
    <div class="columns is-centered section">
      <div class="column is-4">
        <div v-if="showError" class="notification is-danger">API Failed</div>
        <div v-if="errors !=''" class="notification is-danger">{{errors}}</div>
        <div class="field">
          <label class="label">UserName</label>
          <div class="control">
            <input class="input" type="text" placeholder="Username" v-model="login.username" />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" v-model="login.password" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button
              class="button is-info"
              :class="loading ? 'is-loading' : ''"
              @click="loginFunction"
            >Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "login",
  computed: {
    ...mapState("loginData", [
      "login",
      "errors",
      "loading",
      "showError",
      "showSuccess"
    ])
  },
  methods: {
    ...mapActions({
      loginFunction: "loginData/loggedIn"
    })
  }
};
</script>