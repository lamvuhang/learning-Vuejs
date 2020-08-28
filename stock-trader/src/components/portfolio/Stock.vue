<template>
    <div class="container">
        <div class="title">
            {{stock.name}} - Price: {{stock.price}} || quantity: {{  stock.quantity }}
        </div>
        <div class="body">
            <input type="number" v-model="quantity">
            <button
                    @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0"
            >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}
            </button>
        </div>
    </div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
    mounted() {
        console.log(this.stock);
    },
    props: ['stock'],
    data () {
        return {
            quantity : 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder : 'sellStock'
        }),
        sellStock() {
            const order = {
                stockId : this.stock.id,
                stockPrice: this.stock.price,
                stockQuantity: this.quantity
            }
            this.placeSellOrder(order);
            this.quantity = 0
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
        background-color: lightskyblue;
        border-bottom: 1px solid grey;
            padding: 10px;
    }

    .body{
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>