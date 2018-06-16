export const state = () => ({
  title: 'Hello! welcome to my dashboard!!!',
  cards: []
})

export const getters = {
  getCards (state) { return getErogatedPosts() }
}

function getErogatedPosts () {
  return [
    { title: 'Pre-fab homes', src: '/static/doc-images/cards/house.jpg', flex: 6 },
    { title: 'Favorite road trips', src: '/static/doc-images/cards/road.jpg', flex: 6 },
    { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 6 }
  ]
}
