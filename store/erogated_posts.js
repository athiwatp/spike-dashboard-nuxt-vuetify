export const state = () => ({
  title: 'Hello! welcome to my dashboard!!!',
  cards: []
})

export const getters = {
  getCards (state) { return state.cards }
}

export const mutations = {
  setCards (state, posts) {
    console.log(posts)
    var cards = []
    posts.forEach(element => {
      cards.push({ title: element.title, src: element.link, flex: 6 })
    })

    state.cards = cards
  }
}
