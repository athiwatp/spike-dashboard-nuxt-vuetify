export const state = () => ({
  sidebar: false,
  title: 'Hello! welcome to my dashboard'
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
