<template>
  <div>
    <b-container class="bv-example-row border border-info">
  <b-row align-v="start">
    <b-col md="3" id="myrow">  <b-button pill variant="info">PostId</b-button></b-col>
    <b-col md="4" id="myrow" >  <b-button pill variant="info">Email</b-button></b-col>
    <b-col md="5" id="myrow">  <b-button pill variant="info">Content</b-button></b-col>
  </b-row>
  <div v-for="comment in comments">
  <b-row class="pl-sm-5 border border-info" >
    <b-col md="3" id="myrow">{{comment.id}}</b-col>
    <b-col md="4" id="myrow">{{comment.email}}</b-col>
    <b-col md="5" id="myrow"> {{comment.body}} </b-col>
  </b-row>
</div>
</b-container>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {
    data () {
        return {
            postId:this.$route.params.postId,
        }
    },
    created() {
       this.$store.dispatch('loadPostComments','https://jsonplaceholder.typicode.com/comments?postId='+this.postId);
    },
    computed:{
      comments(){
        return this.$store.state.selectedPostComments;
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
