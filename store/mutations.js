export default {
  setUsersList (state, payload) {
    state.usersList = payload
  },

  setFilterState (state, payload) {
    state.filters.states = payload
  },

  setFilterGender (state, payload) {
    state.filters.genders = payload
  },

  setSearchTerm (state, payload) {
    state.searchTerm = payload
  },

  setPaginationCurrentPage (state, payload) {
    state.paginationCurrentPage = payload
  }
}
