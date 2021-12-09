<template>

  <navbar> </navbar>
  <div class="app">
    <router-view> </router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/UI/Navbar.vue'
  export default{
    components:{Navbar}
  }
  
</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat',sans-serif;
  }
  .app{
    padding: 15px;
  }
</style>