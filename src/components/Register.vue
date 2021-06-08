<template>
  <div class="register">
    <h1>REGISTER</h1>
    <form @submit.prevent="Register">
      <input type="email" placeholder="Email" v-model="email" required />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
      <button type="submit" value="Register">Sign Up</button>
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import { ref } from 'vue'
export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          alert('Your registration was succesful')
        })
        .catch(() =>
          alert(
            'Κάτι πήγε στραβά! Ελέγξτε τα στοιχεία σας και προσπαθήστε ξανά. ',
          ),
        )
    }
    return {
      Register,
      email,
      password,
    }
  },
}
</script>

<style scoped>
.register {
  width: 382px;
  overflow: hidden;
  margin: auto;
  margin: 20 0 0 450px;
  padding: 80px;
  border-radius: 15px;
}

h1 {
  text-align: center;
  color: #31a8bd;
  padding: 20px;
}

input {
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 3px;
  padding-left: 8px;
  margin-top: 10px;
}
button {
  width: 310px;
  height: 30px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  padding-left: 2px;
  background: #ffff99;
}
</style>
