<template>
  <div class="app full-height">
    <headers></headers>
    <router-view></router-view>

  </div>
</template>

<script>
import headers from './components/header.vue';
export default {
  data () {
    return {
      message: 'Express + Vue boilerplate-Konata9'
    }
  },
  components:{
      'headers': headers
  }
}
</script>

<style>
html {
  height: 100%;
}
a{
  text-decoration: none;
}
body {
  margin: 0;
  height: 100%;
}
</style>
