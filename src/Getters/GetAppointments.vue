<template>
  <h1 id="tableLabel">ΡΑΝΤΕΒΟΥ</h1>
  <br />
  <p v-if="!appointments"><em>Loading...</em></p>
  <table
    class="table table-striped"
    aria-labelledby="tableLabel"
    v-if="appointments"
  >
    <thead>
      <tr>
        <th>Αριθμός Ραντεβού</th>
        <th>Ημέρα</th>
        <th>Ώρα</th>
        <th>Όνομα Πελάτη</th>
        <th>Επιλογή</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(appointment, index) of appointments" v-bind:key="index">
        <td>{{ appointment.id }}</td>
        <td>{{ format_date(appointment.appointmentDate) }}</td>
        <td>{{ format_time(appointment.appointmentDate) }}</td>
        <td>
          {{ appointment.customer.firstName }}
          {{ appointment.customer.lastName }}
        </td>
        <td>{{ appointment.service.serviceName }}</td>
      </tr>
    </tbody>
  </table>
  <br />
</template>
<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'GetAppointments',
  data() {
    return {
      appointments: [],
    }
  },

  methods: {
    getAppointments() {
      axios
        .get('https://localhost:5001/Appointment')
        .then((response) => {
          this.appointments = response.data
        })
        .catch(function (error) {
          alert(error)
        })
    },
    //Formatting Date to display only Year Month Date
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
      }
    },
    //Formatting Date to display only Hour Minutes
    format_time(value) {
      if (value) {
        return moment(String(value)).format('hh:mm')
      }
    },
  },
  mounted() {
    this.getAppointments()
  },
}
</script>

<style scoped>
button {
  cursor: pointer;
  display: flex-end;
  float: right;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin-top: 10px;
  border: none;
  border-radius: 12px;
  padding-left: 2px;
  font-size: 14px;
  background: #3b413c;
  color: #94d1be;
}
th,
td {
  text-align: center;
  width: 29%;
  padding-left: 90px;
  padding-right: 100px;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  color: #ffffff;
  border: none;
}
h1 {
  color: #daf0ee;
  font-weight: bold;
  text-align: center;
  width: 100%;
}
tbody tr {
  background-color: #94d1be;
  border: 1px solid #daf0ee;
}
</style>
