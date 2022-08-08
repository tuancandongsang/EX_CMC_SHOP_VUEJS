<template>
 <nav>
  <h1>My Vue router</h1>
  <ul>
    <li> <router-link to="/">Home </router-link></li>
    <li><router-link to="/Product">Product</router-link></li>
    <li><router-link to="/About">Aboutcc</router-link></li>
  </ul>
 </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  background: #999;
}
ul{
  list-style-type: none;
  display: flex;
}
li{
  border: solid 1px #333;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  margin: 0 30px;
  font-weight: 700;
  font-size: 20px;
}
li:hover{
  color: #fff;
  background-color: #555;
}
</style>
