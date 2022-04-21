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
                v-for="el in payments.slice(start,end)"
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
            <button @click="pagination(--currentPage)" :disabled="currentPage == 1"> &lt; </button>
            <button 
            v-for="n in pages" 
            :key="n"
            :class="{ activePage: n == currentPage }" 
            @click="pagination(n)"
            >
            {{n}}
            </button>
            <button @click="pagination(++currentPage)" :disabled="currentPage==pages"> &gt; </button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'paysTable',
    props: {
        payments: {
            type: Array,
            default: () => [{
                date: '01.01.0000',
                category: 'null',
                value: 0
            },
            {
                date: '01.01.0000',
                category: 'null',
                value: 0
            },
            {
                date: '01.01.0000',
                category: 'null',
                value: 0
            }]
        }
    },
    data() {
        return {
            start: 0,
            end: 5,
            step: 5,
            currentPage: 1
        }
    },
    methods: {
        pagination(page){
            this.start = (page-1) * this.step;
            this.end = this.start + this.step;
            this.currentPage = page;
        }
    },
    computed: {
        pages(){
            return Math.ceil(this.payments.length/this.step)
        }
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