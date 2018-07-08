export const state = () => ({
  title: '[ REDDIT SERVICE ] - EROGATED POSTS',
  cards: []
})

export const getters = {
  getCards (state) { return state.cards }
}

export const mutations = {
  setCards (state, posts) {
    var cards = []
    posts.reverse().forEach(element => {
      if (verifyLink(element.link)) {
        cards.push({ title: element.title, src: element.link, flex: 4 })
      } else {
        cards.push({ title: element.title, src: '/image-not-found.png', flex: 4 })
      }
    })
    state.cards = cards
  }
}

function verifyLink (url) {
  var extension = url.split('.').pop()
  extension = extension.split(/#|\?/g)[0]
  return (extension === 'gif' || extension === 'png' || extension === 'jpg')
}
