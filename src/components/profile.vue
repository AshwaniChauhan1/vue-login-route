<template>
    <div>
        <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-centered">Hello {{login.username}}</h1>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
export default {
    name:"profile",
    computed:{
        login(){
            return this.$store.state.loginData.login;
        }
    }
}
</script>