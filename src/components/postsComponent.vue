<template>
    <div id="show-posts">
<b-container class="bv-example-row border border-info">
  <b-row align-v="start" id="myrow">
    <b-col md="2" >  <b-button pill variant="info">Id</b-button></b-col>
    <b-col md="3" >  <b-button pill variant="info">Title</b-button></b-col>
    <b-col md="5">  <b-button pill variant="info">Content</b-button></b-col>
    <b-col md="2"></b-col>
  </b-row>
  <div v-for="post in posts">
  <b-row class="pl-sm-5 border border-info" >
    <b-col md="2" id="myrow">
      <router-link v-bind:to="'/post/'+post.id">{{post.id}}</router-link></b-col>
    <b-col md="3" id="myrow">{{post.title}}</b-col>
    <b-col md="5" id="myrow"> {{post.body}} </b-col>
    <b-col md="2" id="myrow"> <b-button variant="outline-primary" v-on:click="seeComments" :name="post.id">comments</b-button> </b-col>
  </b-row>
</div>
</b-container>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {mapState} from 'vuex';
export default {
    created() {
            this.$store.dispatch('loadPosts',"http://jsonplaceholder.typicode.com/posts");
    },
    computed:{
      posts(){
        return this.$store.state.posts;
      }
    },
     methods: {
       seeComments:function(event){
          //console.dir( event.target.name);
         this.$router.push({name:'comments',params:{postId:event.target.name}});
       }
     }
}
</script>

<style>
#show-posts{
    max-width: 800px;
    margin: 0px auto;
}
#myrow{
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>
