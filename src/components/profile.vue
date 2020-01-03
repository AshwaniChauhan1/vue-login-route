<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Hello {{uname}}</h1>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "profile",
  data: () => {
    return {
      uname: ""
    };
  },
  mounted() {
    this.uname = localStorage.username;
  }
};
</script>