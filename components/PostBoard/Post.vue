<template>
  <v-card>
    <v-card-media
        :src="card.src"
        height="200px"
    >
    </v-card-media>
    <v-card-title primary-title>
        <div>
            <h3 class="headline mb-0">{{card.title}}</h3>
            <!-- <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div> -->
        </div>
    </v-card-title>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
        <img src="/reddit.png"/>
        </v-btn>
        <v-btn icon>
        <v-icon>image</v-icon>
        </v-btn>
      </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['card']
}
</script>
