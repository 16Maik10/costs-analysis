<template>
    <div class="wrapper">
        <table class="pays-table">
            <thead>
                <tr>
                    <th class="pays-table__title">#</th>
                    <th class="pays-table__title">Date</th>
                    <th class="pays-table__title">Category</th>
                    <th class="pays-table__title">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                v-for="el in getPaymentList[`page${currentPage}`]"
                :key="el.id"
                >
                <td>{{el.id}}</td>
                <td>{{el.date}}</td>
                <td>{{el.category}}</td>
                <td>{{el.value}}</td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            <button @click="currentPage-=1" :disabled="currentPage == 1"> &lt; </button>
            <button 
            v-for="n in getPaymentListLength" 
            :key="n"
            :class="{ activePage: n == currentPage }" 
            @click="currentPage=n"
            >
            {{n}}
            </button>
            <button @click="currentPage+=1" :disabled="currentPage==getPaymentListLength"> &gt; </button>
        </div>
        
    </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";



export default {
    name: 'paysTable',
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        ...mapActions([
            'setDefaultPayments'
        ])
    },
    computed: {
        ...mapGetters([
            'getPaymentList',
            'getPaymentListLength'
        ])
    },
    created(){
        this.setDefaultPayments();
    }
}
</script>

<style lang="scss" scoped>

.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    min-height: 310px;
}

.pays-table{
    width: 500px;
    padding: 10px;
    text-align: left;

    &__title{
        font-weight: 700;
        margin: 0;
    }
}

tr{
    line-height: 40px;
}

td{
    width: 41px;
}

.pagination{
    align-self: center;
}

.activePage{
    color: #25a79a;
}

</style>