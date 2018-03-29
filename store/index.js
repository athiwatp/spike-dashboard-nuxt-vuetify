export const state = () => ({
  sidebar: false,
  title: 'Hello! welcome to my dashboard',
  welcome_text: 'This should be hello text'
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}

export const getters = {
  getTitle (state) {
    return state.title
  }
}
