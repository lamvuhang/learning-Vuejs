import StockTrader from './components/StockTrader.vue'
import Stocks from './components/stock/Stocks.vue'
import Portfolio from './components/portfolio/Portfolio.vue'

export const routes  = [
    {path: '/', component: StockTrader },
    {path: '/stocks', component: Stocks},
    {path: '/portfolio', component: Portfolio}
]