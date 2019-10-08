<template>
  <div class="hello">
    <h1>{{ msg }}-- {{$route.params.userName}}</h1>
      <p>密码：{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is  b2 page '
    }
  }
}
</script>


<style scoped>
h1 {
  text-align:center;

}
</style>
