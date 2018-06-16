import axios from 'axios'

export default function ({ store, route }) {
  // axios.get('http://my-stats-api.com')
  console.log('running middleware')
  axios.get('https://xxxxxxx.firebaseio.com/erogated_posts.json')
    .then(function (response) {
      var result = []
      for (var p in response.data) {
        if (response.data.hasOwnProperty(p)) {
          result.push(response.data[p])
        }
      }
      store.commit('erogated_posts/setCards', result)
    })
    .catch(function (error) {
      console.log(error)
    })
}
