<template>
<div>
  <b-container class="bv-example-row border border-info">
<b-row align-v="start">
  <b-col md="2" id="myrow" >  <b-button pill variant="info">PostId</b-button></b-col>
  <b-col md="2" id="myrow" >  <b-button pill variant="info">Id</b-button></b-col>
  <b-col md="3" id="myrow">  <b-button pill variant="info">Name</b-button></b-col>
  <b-col md="5" id="myrow">  <b-button pill variant="info">Content</b-button></b-col>

</b-row>
<div v-for="comment in comments">
<b-row class="pl-sm-5 border border-info" >
  <b-col md="2" id="myrow" > {{comment.postId}}</b-col>
  <b-col md="2" id="myrow" > {{comment.id}}</b-col>
  <b-col md="3" id="myrow"> {{comment.name}}</b-col>
  <b-col md="5" id="myrow"> {{comment.body}}</b-col>
</b-row>
</div>
</b-container>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default{
  created() {
       this.$store.dispatch('loadComments','https://jsonplaceholder.typicode.com/posts/' + this.id +'/comments');
  },
  computed :{
      comments(){
        return this.$store.state.comments;
      }
    }
}
</script>
<style>
#myrow{
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: -10px;
}
</style>
