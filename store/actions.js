import Users from '~/services/Users'
export default {
  setUsersList ({ commit }, payload) {
    commit('setUsersList', payload)
  },

  setFilterState ({ commit }, payload) {
    commit('setFilterState', payload)
  },

  setFilterGender ({ commit }, payload) {
    commit('setFilterGender', payload)
  },

  setSearchTerm ({ commit }, payload) {
    commit('setSearchTerm', payload)
  },

  setPaginationCurrentPage ({ commit }, payload) {
    commit('setPaginationCurrentPage', payload)
  },

  updateList ({ dispatch, state }) {
    let filteredList = [...Users.getUsers()]

    if (state.searchTerm) {
      filteredList = filteredList.filter((user) => {
        const lowerCaseSearchTerm = state.searchTerm.toLowerCase()
        return user.name
          .toLowerCase()
          .includes(lowerCaseSearchTerm)
      })
    }

    if (state.filters.states.length) {
      state.filters.states.forEach((state) => {
        filteredList = filteredList.filter(user => user.location.state === state)
      })
    }

    if (state.filters.genders.length) {
      state.filters.genders.forEach((gender) => {
        filteredList = filteredList.filter(user => user.gender === gender)
      })
    }

    dispatch('setUsersList', filteredList)
  }
}
