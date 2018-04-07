<template>
  <v-layout>
      <v-flex text-xs-center>
          <v-card>
            <v-card-title class="headline">Configs</v-card-title>
            <v-card-text>
                <v-form v-model="valid">
                    <v-text-field
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                    ></v-text-field>
                </v-form>
            </v-card-text>
          </v-card>
      </v-flex>
  </v-layout>
</template>
