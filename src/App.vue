<template>
  <div id="appa">
   <router-link to="/">Hello Word</router-link>
   <router-link to="/tai"> Ke TestComponent</router-link>
   <router-link to="/bikin-soal"> TUGAS BIKIN SOAL</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#appa {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
