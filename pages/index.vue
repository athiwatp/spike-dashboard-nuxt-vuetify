<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
        <v-card-title class="headline">{{$store.state.title}}</v-card-title>
        <v-card-text>
          <p>{{$store.state.welcome_text}}</p>
        </v-card-text>
        <v-card-actions v-if="!auth">
          <signin></signin>
          <signup></signup>
        </v-card-actions>
        <v-card-actions v-else>
          <p> Hello User!</p>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import SignIn from '../components/SignIn/SignIn.vue'
import SignUp from '../components/SignUp/SignUp.vue'

export default {
  data () {
    return {
      auth: false
    }
  },
  components: {
    'signin': SignIn,
    'signup': SignUp
  }
}
</script>

