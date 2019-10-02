<template>
  <div id="LoginContainer" class="pageContainer">
    <div class="pageContentAbsolut">
      <section>
        <b-field label="Username" type="is-success" message="This username is available">
          <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" value="iwantmytreasure" password-reveal></b-input>
        </b-field>

        <b-button @click="clickMe">Click Me</b-button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      password: '',
      error: false
    }
  },
  components: {},
  methods: {
    login () {
      this.$http
        .post('/auth', { user: this.user, password: this.password })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },

    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return;
      }

      localStorage.token = req.data.token
      this.error = false

      this.$router.replace(this.$route.query.redirect || '/authors')
    },

    loginFailed () {
      this.error = 'Login failed!';
      delete localStorage.token
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'login-layout')
  }
}
</script>
<style scoped>
@import "Login.min.css";
</style>
