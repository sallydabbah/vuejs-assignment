<template>

  <div>
    <label class="bg-light">Selected Post:</label>
    <b-list-group horizontal class="border border-info" id="myList">
   <b-list-group-item><router-link v-bind:to="'/posts/'+post.id+'/comments'">{{post.id}}</router-link></b-list-group-item>
   <b-list-group-item>{{post.title}}</b-list-group-item>
   <b-list-group-item><article>{{post.body}}</article></b-list-group-item>
 </b-list-group>
  </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default{
  data(){
    return {
       id:this.$route.params.id,
       post:{}
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
        console.log(data);
         this.post=data.body;
    })
  }
}
</script>

<style>
#myList{
  margin-top: 20px;
}
</style>
