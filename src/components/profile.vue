<template>
  <div>
    <div v-if="showSuccess" class="notification is-primary centered">
      <button class="delete" @click="closeFunction"></button>
      API Running Successfully
    </div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Hello "{{username}}"</h1>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "profile",
  data: () => {
    return {
      username: "Eve Holt "
    };
  },
  computed: {
    ...mapState("loginData", ["showSuccess"])
  },
  methods: {
    ...mapActions({
      closeFunction: "loginData/close"
    })
  }
};
</script>