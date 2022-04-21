<template>
  <div id="app">
    <h1>Me personal costs</h1>
    <pays-add-new @addPayment="addPayment"></pays-add-new>
    <pays-table :payments="payments"></pays-table>
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
      payments: [
        {
          id: 1,
          date: '01.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 2,
          date: '02.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 3,
          date: '03.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 4,
          date: '04.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 5,
          date: '05.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 6,
          date: '06.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 7,
          date: '07.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 8,
          date: '08.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 9,
          date: '09.01.0000',
          category: 'null',
          value: 0
        },
        {
          id: 10,
          date: '10.01.0000',
          category: 'null',
          value: 0
        },
      ]
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
