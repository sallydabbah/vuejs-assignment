import homeComponent from './components/homeComponent.vue';
import postsComponent from './components/postsComponent.vue';
import postComponent from './components/postComponent.vue';
import commentsComponent from './components/commentsComponent.vue';
import comments from './components/comments.vue';
export default [
    { path: '/', component: homeComponent},
    { path: '/posts', component: postsComponent},
    {path:'/post/:id',component: postComponent},
    {path:'/posts/:id/comments',component:commentsComponent},
    {path:'/comments?postId= ${variable}',name:'comments',component:comments}
]
