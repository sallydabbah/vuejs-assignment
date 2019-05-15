<template>
  <div>
    <h3 class="bg-light">
    <b-nav align="center">
    <b-nav-item ><router-link to="/" exact>Home</router-link></b-nav-item>
    <b-nav-item><router-link to="/posts" exact>Posts</router-link></b-nav-item>
  </b-nav>
</h3>
</div>
</template>

<script>
export default {}
</script>
<style scoped>
a{
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
