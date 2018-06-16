<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <header>{{erogated_posts.title}}</header>
      <post-board :cards="cards"></post-board>
    </v-flex>
  </v-layout>
</template>
<script>
import PostBoard from '~/components/PostBoard/PostBoard.vue'
export default {
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: '/static/doc-images/cards/house.jpg', flex: 6 },
      { title: 'Favorite road trips', src: '/static/doc-images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 6 }
    ]
  }),
  computed: {
    erogated_posts () { return this.$store.state.erogated_posts }
  },
  components: {
    PostBoard
  }
}
</script>