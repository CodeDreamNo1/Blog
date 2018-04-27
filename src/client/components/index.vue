<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="username">
    <input type="text" v-model="pass">
    <button @click="sub"></button>
  </div>
</template>

<script>
import api from '../model/model.js';
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      username:'',
      pass:''

    }
  },
  methods:{
      sub(){
        this.$axios.get(api.login(), {'username':this.username, 'pass': this.pass})
        .then(function(res) {
           console.log(res)
        });
      }
  }
}
</script>
