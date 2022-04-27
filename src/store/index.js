import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: {},
    currentId: 15,
    categories: ["Education", "Food", "Transport"]
  },
  getters: {
    getPaymentList: state => state.paymentList,
    getPaymentListLength: state => Object.keys(state.paymentList).length,
    getCurrentId: state => state.currentId,
    getCategories(state){
      return state.categories
    }
  },
  mutations: {
    setPaymentList(state, payments) {
      state.paymentList = payments;
    },
    addNewPayment(state, payment) {
      let lastPageNum = this.getters.getPaymentListLength;
      const lastPage = 'page' + lastPageNum;
      payment.id = ++state.currentId;
      if (this.getters.getPaymentList[lastPage].length == 5) {
        ++lastPageNum;
        Vue.set(state.paymentList, `page${lastPageNum}`, [payment])
      } else {
        state.paymentList[`page${lastPageNum}`].push(payment)
      }
    },
    addNewCategory(state,category){
      state.categories.push(category)
    }
  },
  actions: {
    setDefaultPayments({ commit }) {
      fetch('https://raw.githubusercontent.com/16Maik10/default-data-for-costs-alanysis/main/pays.json')
        .then(resp => resp.json())
        .then(data => {
          commit('setPaymentList', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
