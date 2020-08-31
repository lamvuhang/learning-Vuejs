<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>HTTP</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username"> 
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.mail"> 
        </div>
        <button class="btn btn-primary" @click="submit">Submit!</button>
        <br>
        <button class="btn btn-primary" @click='fetchData'>Fetch!</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, index) in users" :key="index"> {{ u.username }} - {{ u.mail }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username : '',
        mail :''
      },
      users : []
    }
  },
  methods: {
    submit() {
      this.$http.post('https://vuejs-http-10e42.firebaseio.com/data.json', this.user)
                .then(res => {
                  console.log(res);
                }, err => {
                  console.log(err);
                })
    },
    fetchData() {
      this.$http.get('https://vuejs-http-10e42.firebaseio.com/data.json')
                .then( res => {
                  return res.json()
                })
                .then( data => {
                  const resultArr =[]
                  for( let key in data) {
                    resultArr.push(data[key])
                  }
                  this.users = resultArr
                })
    }
  }
}
</script>

<style >

</style>