<template>
  <div class="col align-self-center">
    <form v-on:submit.prevent="submitForm()">
      <div>
        <input
          v-model="form.customerfName"
          type="text"
          class="form-control"
          placeholder="Ονομα"
        />
      </div>
      <div>
        <input
          v-model="form.customerlName"
          type="text"
          class="form-control"
          placeholder="Επωνυμο"
        />
      </div>
      <div>
        <input
          v-model="form.customerPhone"
          type="text"
          class="form-control"
          placeholder="Phone"
        />
      </div>
      <div>
        <input
          v-model="form.customerEmail"
          type="text"
          class="form-control"
          placeholder="Email"
        />
      </div>
      <div>
        <input v-model="form.date" type="Date" class="form-control" />
        <!-- <Time
          lazy
          v-model="form.Time"
          :hour-range="[[9, 20]]"
          :minute-interval="20"
          close-on-complete
        /> -->
      </div>
      <div>
        <input type="time" class="form-control" v-model="form.Time" />
      </div>
      <GetServices v-model="form.service_Id" />
    </form>
    <button v-on:click="submitForm(form)">Small Button</button>
  </div>
</template>

<script>
import GetServices from '@/Getters/GetServices'
// import Time from 'vue3-timepicker'
import 'vue3-timepicker/dist/VueTimepicker.css'
import axios from 'axios'

export default {
  components: { GetServices },
  data() {
    return {
      form: {
        date: '',
        Time: '',
        service_Id: '',
        customer_Id: '',
        customerfName: null,
        customerlName: null,
        customerPhone: null,
        customerEmail: null,
      },
    }
  },
  methods: {
    submitForm() {
      const requestOptions = {
        date: this.form.date + 'T' + this.form.Time + 'Z',
        service_Id: this.form.service_Id,
        customer: {
          firstname: this.form.customerfName,
          lastname: this.form.customerlName,
          phoneNumber: this.form.customerPhone,
          emailAddress: this.form.customerEmail,
        },
      }
      axios
        .post('https://localhost:5001/Appointment', requestOptions)
        .then((res) => {
          alert(res.data)
        })
        .catch((error) => {
          console.log('Unable to create post ' + { error })
        })
    },
  },
}
</script>

<style scoped>
form {
  display: block;
  justify-content: center;
  width: 49%;
  margin-left: 150px;
  margin-right: 150px;
  align-items: center;
}
</style>
