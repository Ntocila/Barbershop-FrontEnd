<template>
  <div class="forgotPassword" title="ResetPassword">
    <h4>RESET PASSWORD</h4>
    <br />
    <form class="form" @submit.prevent="forgetPassword">
      <div class="input-field col s6 warning">
        <i class="material-icons prefix">account_circle</i>
        <input
          id="email"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />
      </div>
      <button
        class="btn waves-effect waves-yellow accent-4"
        type="submit"
        value="Login"
        id="Login"
      >
        submit
      </button>
      <p>
        <router-link to="/login">Go Back To Login page</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      user: {
        email: '',
      },
    }
  },
  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert('Check your registered email to reset the password!')
          this.user = {
            email: '',
          }
        })
        .catch(() => {
          alert(
            'Κάτι πήγε στραβά! Ελέγξτε τα στοιχεία σας και προσπαθήστε ξανά. ',
          )
        })
    },
  },
}
</script>

<style scoped>
@media only screen and (max-width: 800px) and(min: width 450px) {
  .form {
    box-sizing: border-box;
    padding-top: 15px;
    padding-bottom: 10%;
    margin: 5%;
    display: block;
    text-align: center;
  }

  .forgotPassword {
    border: solid 2px #ffff99;
    align-items: center;
    width: 400px;
    height: 350px;
    display: inline-block;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    overflow: hidden;
    border-radius: 15px;
    background: #3b413c;
    color: #94d1be;
    box-shadow: 5px 10px 30px #ffffff;
  }

  h1 {
    text-align: center;
    color: #94d1be;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  input {
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 3px;
    color: #94d1be;
    background-color: #94d1be;
  }
  button {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    display: block;
    border: solid 1px #94d1be;
    color: #ffffff;
    border-radius: 3px;
    background: #94d1be;
    text-align: center;
  }
  p {
    text-align: center;
    padding-top: 20px;
  }
}
</style>
