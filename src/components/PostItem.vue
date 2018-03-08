<template>
    <ul>
        <li v-for="post of posts">
            {{post.title.rendered}}
        </li> 
    </ul> 
</template>

<script>
export default {
  name: 'postitem',
  props: ['posts']
}

</script>