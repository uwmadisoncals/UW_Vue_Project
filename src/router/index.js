import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import MainHeader from '@/components/Header'
import WPPosts from '@/components/WPPosts'
import SinglePost from '@/components/SinglePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Hello,
        a: MainHeader
      },
      props: { default: true, a: true }
    },
    {
      path: '/about',
      name: 'About',
      components: {
        default: About,
        a: MainHeader
      },
      props: { default: true, a: true }
    },
    {
      path: '/news',
      name: 'Posts',
      components: {
        default: WPPosts,
        a: MainHeader
      },
      props: { default: true, a: true }
    },
    {
      path: '/news/:id',
      name: 'Post',
      components: {
        default: SinglePost,
        a: MainHeader
      },
      props: { default: true, a: true }
    }
  ]
})
