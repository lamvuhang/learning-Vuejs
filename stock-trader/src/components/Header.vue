<template>
    <div class="container">
        <div class="menu">
            <ul class="a-side">
                <router-link to="/" tag="li"><a>Stock Trader</a></router-link>
                <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
                <router-link to="/stocks" tag="li"><a>Stocks</a></router-link>
            </ul>
            <ul class="b-side">
                <li><a href="#" @click="endDay">End day</a></li>
                <li
                        class="dropdown"
                        :class="{open: isDropdownOpen}"
                        @click="isDropdownOpen = !isDropdownOpen">
                    <a
                        href="#">Save & Load <span class="caret"></span></a>
                    <ul class="dropdown-menu" v-if="isDropdownOpen">
                        <li><a href="#" @click="saveData">Save Data</a></li>
                        <li><a href="#" @click="loadData">Load Data</a></li>
                    </ul>
                </li>
                <li><a href="#">Fund : {{ funds}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
            
        }
    }, 
    methods: {
         ...mapActions({
            randomizeStocks: 'randomStocks',
            fetchData: 'loadData'
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json', data);
        },
        loadData() {
            this.fetchData();
        }
    }
}
</script>

<style scoped>
    .menu{
        display: flex;
        padding: 10px;
        border: 1px solid gray;
        justify-content: space-between;
        background-color: #ccc;
    }

    ul{
        list-style-type: none;
        display: flex;
        padding-left: 0px;
    }

    li{
        padding: 10px;
    }

    a{
        color: black;
    }

    a:hover{
        text-decoration: none;
    }
</style>