import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://vuejs-axios-bab32.firebaseio.com'
})

//instance.defaults.header...

export default instance