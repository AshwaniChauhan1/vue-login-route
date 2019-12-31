<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 mt-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                prepend-icon="person"
                v-model="username"
                type="username"
              />
              <v-text-field
                label="Password"
                prepend-icon="lock"
                v-model="password"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <p class="red--text ml-3">{{errors}}</p>
            <v-spacer />
            <v-btn color="primary" class="white--text">
              <router-link to="/profile">Login</router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>