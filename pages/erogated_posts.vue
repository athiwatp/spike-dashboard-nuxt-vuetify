<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <header>{{erogated_posts.title}}</header>
      <post-board :cards="getters"></post-board>
    </v-flex>
  </v-layout>
</template>
<script>
import PostBoard from '~/components/PostBoard/PostBoard.vue'
export default {
  computed: {
    erogated_posts () {
      return this.$store.state.erogated_posts
    },
    getters () {
      return this.$store.getters['erogated_posts/getCards']
    }
  },
  components: {
    PostBoard
  },
  middleware: ['erogated_posts']
}
</script>