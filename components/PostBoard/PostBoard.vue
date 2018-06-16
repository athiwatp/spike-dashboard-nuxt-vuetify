<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex
            v-for="card in cards"
            v-bind="{ [`xs${card.flex}`]: true }"
            :key="card.title"
        >
          <post :card="card" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>    
</template>
<script>
import Post from './Post.vue'

export default {
  name: 'post-board',
  components: {
    Post
  },
  props: ['cards']
}
</script>
