<template>
    <div class="container">
        <div class="title">
            {{stock.name}} - Price: {{stock.price}}
        </div>
        <div class="body">
            <input type="number" v-model="quantity">
            <button
                    @click="buyStock"
                    :disabled="insufficientFunds || +quantity <= 0"
            >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data () {
        return {
            quantity : 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: +this.quantity
            };
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>

<style scoped>
    .container{
        border: 1px solid grey;
        border-radius: 5px;
        padding: 0px;
        display: inline-block;
        margin: 15px;
    }

    .title{
        background-color: lightgreen;
        border-bottom: 1px solid grey;
            padding: 10px;
    }

    .body{
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>