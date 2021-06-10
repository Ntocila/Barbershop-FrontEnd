<template>
  <select class="form-select" v-model="selected">
    <option
      v-for="service of services"
      v-bind:key="service.id"
      v-bind:value="{ id: service.id }"
    >
      {{ service.id }} - {{ service.serviceName }}
    </option>
  </select>
  <h1>Value: {{ selected.id }}</h1>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetServices',
  data() {
    return {
      services: [],
      selected: '',
    }
  },

  methods: {
    getServices() {
      axios
        .get('https://localhost:5001/Service')
        .then((response) => {
          this.services = response.data
        })
        .catch(function (error) {
          alert(error)
        })
    },
  },
  mounted() {
    this.getServices()
  },
}
</script>
<style lang="scss" scoped></style>
