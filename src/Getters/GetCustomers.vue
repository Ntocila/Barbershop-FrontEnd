<template>
  <NavBar />
  <div class="customers">
    <h1 id="tableLabel">ΠΕΛΑΤΕΣ</h1>
    <br />
    <p v-if="!customers"><em>Loading...</em></p>
    <table
      class="table table-striped"
      aria-labelledby="tableLabel"
      v-if="customers"
    >
      <thead>
        <tr>
          <th>Αριθμός Πελάτη</th>
          <th>Ονοματεπώνυμο</th>
          <th>Τηλέφωνο</th>
          <th>Ηλ. Διεύθυνση</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) of customers" v-bind:key="index">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }} {{ customer.lastName }}</td>
          <td>{{ customer.phoneNumber }}</td>
          <td>{{ customer.emailAddress }}</td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>
<script>
import axios from 'axios'
import NavBar from '../components/NavBar'

export default {
  name: 'GetCustomers',
  components: { NavBar },
  data() {
    return {
      customers: [],
    }
  },

  methods: {
    getCustomers() {
      axios
        .get('https://localhost:5001/Customer')
        .then((response) => {
          this.customers = response.data
        })
        .catch(function (error) {
          alert(error)
        })
    },
  },
  mounted() {
    this.getCustomers()
  },
}
</script>

<style scoped>
.customers {
  margin-right: 5px;
  margin-left: 5px;
  padding-top: 50px;
}

th,
td {
  font-size: 1.1rem;
  text-align: center;
  width: 29%;
  padding-left: 80px;
  padding-right: 100px;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-top: 15px;
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
