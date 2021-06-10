<template>
  <nav>
    <div class="nav-wrapper">
      <nav>
        <div class="nav-wrapper">
          <img
            style="
              border-radius: 75px;
              margin-top: 6px;
              width: 90px;
              height: 50px;
              float: left;
            "
            :src="image"
          />
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a style="float: right; width: 150px;" href="/">Ραντεβου</a>
            </li>
            <li>
              <a style="float: right; width: 150px;" href="/GetCustomers">
                Πελατες
              </a>
            </li>
            <li>
              <a
                style="float: left; width: 150px;"
                class="logout"
                @click="Logout"
                href="/"
              >
                Αποσύνδεση
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </nav>
  <a
    href="/add_Appointment"
    class="createAppointment"
    style="float: right; width: 120px;"
  >
    Προσθέστε Ραντεβού
  </a>
  <div class="home">
    <GetAppointments />
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import firebase from 'firebase'
import GetAppointments from '@/components/GetAppointments'
import image from '../assets/logo.png'

export default {
  components: { GetAppointments },
  data() {
    return {
      image: image,
    }
  },
  setup() {
    const name = ref('')
    onBeforeMount(() => {
      const user = firebase.auth().currentUser
      if (user) {
        name.value = user.email.split('@')[0]
      }
    })

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push('login')
          })
        })
        .catch((err) => alert(err.message))
    }
    return {
      name,
      Logout,
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  },
}
</script>

<style scoped>
.home {
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;
  padding-top: 50px;
}

nav {
  background-color: #daf0ee;
  outline: solid 1px #ffffff;
}

.createAppointment {
  border: solid 2px #3b413c;
  background: #01161e;
  color: #ffffff;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  margin-top: 15px;
  border-radius: 5px;
  margin-right: 5px;
  margin-left: -150px;
}

a {
  margin-right: 10px;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  background: #1c1a1b;
  color: #ffffff;
  border: solid 0.7px;
}
</style>
