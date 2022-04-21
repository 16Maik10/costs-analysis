<template>
    <div class="pays-add-new">
        <button @click="showForm=!showForm" class="pays-add-new__btn btn">Add new cost <span class="plus">+</span></button>
        <form @submit.prevent="addPayment(date,category,value)" v-show="showForm" class="form">
            <input required v-model="category" type="text" placeholder="Payment description">
            <input required v-model.number="value" type="text" placeholder="Payment amount">
            <input required type="date" v-model="date">
            <button type="submit" class="form__btn btn">Add <span class="plus">+</span></button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'paysAddNew',
    data() {
        return {
            category: '',
            date: '',
            value: null,
            showForm: false,
        }
    },
    methods: {
        addPayment(date,category,value){
            const day = new Date(date).getDate();
            const month = new Date(date).getMonth()+1;
            const year = new Date(date).getYear() + 1900;
            const formattedDate = `
            ${day < 10? '0'+day : day}.${month < 10? '0'+month : month}.${year}
            `;
            const payment = {
                date: formattedDate,
                category,
                value
            }
            this.date = '';
            this.category = '';
            this.value = null;
            this.$emit('addPayment',payment)
        }
    }

}
</script>

<style lang="scss" scoped>
.pays-add-new {

    margin: 20px 0;

    &__btn {
        width: 180px;
        padding: 5px;
        margin: 20px 0;
    }
}

.btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    border-radius: 5px;
    background-color: #25a79a;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;
}

.plus {
    font-size: 22px;
}

.form {

    display: flex;
    flex-direction: column;
    width: 340px;

    &__btn {
        width: 170px;
        padding: 2px 0 2px 40px;
        align-self: end;
    }
}

input{
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    outline: none;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3)
}
</style>