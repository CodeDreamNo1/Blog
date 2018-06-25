<template>

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
        this.$axios.post(api.login(), {'username':this.username, 'password': this.pass})
        .then(function(res) {
           console.log(res);
        });
      },
      getdata(){
          this.$axios.get('/c').then(function(res){
            console.log(res);
          })
      }
  },
}
</script>
