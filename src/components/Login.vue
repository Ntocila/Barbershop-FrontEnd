<template>
  <div class="login" title="Login">
    <h4>LOGIN</h4>
    <form class="form" @submit.prevent="Login">
      <div class="input-field col s6">
        <i class="material-icons prefix">account_circle</i>
        <input
          id="email"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />
      </div>
      <div class="input-field col s6">
        <i class="material-icons prefix">lock</i>
        <input
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>
      <button
        class="btn waves-effect waves-yellow accent-4"
        type="submit"
        value="Login"
        id="Login"
      >
        Log In
      </button>
      <p class="resetPassword">
        <router-link to="/forgot-password">Forgot your password?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => alert('Συνδεθήκατε με επιτυχία'))
        .catch(() =>
          alert(
            'Κάτι πήγε στραβά! Ελέγξτε τα στοιχεία σας και προσπαθήστε ξανά. ',
          ),
        )
    }
    return {
      Login,
      email,
      password,
    }
  },
}
</script>

<style scoped>
.form {
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 10%;
  margin: 5%;
  display: block;
  text-align: center;
}

.login {
  border: solid 2px #ffff99;
  align-items: center;
  width: 400px;
  height: 370px;
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

h4 {
  text-align: center;
  color: #94d1be;
  align-items: center;
  margin: 0;
  padding-top: 5%;
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
</style>
