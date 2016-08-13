<template>
  <div id="app">
    
    
    <side-bar></side-bar>
    <div id="right">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import Hello from './components/Hello'
var sideBar = require('./components/sideBar');
export default {
  components: {
    Hello,sideBar
  }
}
</script>

<style>

#app{
  
    width: 1000px;
    height: 680px;
    margin: 50px auto;
}

div#right{
  height: 100%;
  width: 680px; 
  float: left;
}

/* html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
} */
</style>
