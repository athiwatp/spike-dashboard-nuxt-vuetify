<template>
    <v-layout>
      <v-flex>
      <v-dialog v-model="dialog" dark max-width="500px">
        <v-btn color="primary" dark slot="activator" class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Request" v-model="editedItem.name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Response" v-model="editedItem.calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Exact Match" v-model="editedItem.fat"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.request }}</td>
          <td class="text-xs-left">{{ props.item.response }}</td>
          <td class="text-xs-left">{{ props.item.match }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
      </v-flex>
    </v-layout>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Request',
        align: 'left',
        value: 'request'
      },
      { text: 'Response', value: 'response', align: 'left' },
      { text: 'Exact Match', value: 'match', align: 'left' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      request: '',
      response: '',
      match: false
    },
    defaultItem: {
      request: '',
      response: '',
      match: false
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.items = [
        {
          request: 'Test Request',
          response: 'Test Response',
          match: false
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
