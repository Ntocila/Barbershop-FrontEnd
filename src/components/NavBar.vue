<template>
  <div>
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
  </div>
</template>

<script>
import image from '../assets/logo.png'

export default {
  data() {
    return {
      image: image,
    }
  },
}
</script>

<style scoped>
nav {
  background-color: #daf0ee;
  outline: solid 1px #ffffff;
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
