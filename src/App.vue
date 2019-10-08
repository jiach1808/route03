<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
    <router-link to="/">home</router-link>
    <router-link to="/b">B分页</router-link>
    <router-link to="/b/b1">B1</router-link>
    <router-link :to="{name:'b2',params:{userName:'wjc',id:'123456'}}">B2</router-link>
    </div>
    <p>{{$route.name}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
