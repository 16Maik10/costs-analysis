<template>
  <div id="app">
    <h1>Me personal costs</h1>
    <pays-add-new @addPayment="addPayment"></pays-add-new>
    <pays-table></pays-table>
  </div>
</template>

<script>

import paysAddNew from './components/pays-add-new.vue'
import paysTable from './components/pays-table.vue'

export default {
  name: 'App',
  components: {
    paysAddNew,
    paysTable
  },
  data() {
    return {
  
    }
  },
  methods: {
    addPayment(payment) {
      payment.id=this.payments.length+1
      this.payments.push(payment)
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}
</style>
