<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is  B page '
    }
  }
}
</script>


<style scoped>
h1 {
  text-align:center;
  color:blue;
}
</style>
