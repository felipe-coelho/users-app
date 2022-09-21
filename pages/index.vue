<template>
  <div class="container">
    <div class="container__sidebar">
      <FiltersList
        filters-title="Por Estado"
        :filters-list="statesFilterList"
        @filterChanged="updateStateFilter"
      />
      <FiltersList
        filters-title="Por Gênero"
        :filters-list="gendersFilterList"
        @filterChanged="updateGenderFilter"
      />
    </div>

    <div class="container__users-list">
      <ResultsList :list="usersList" :items-per-page="9" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FiltersList from '~/components/SearchResults/FiltersList'
import ResultsList from '~/components/SearchResults/ResultsList'
import Utils from '~/utils/index'
export default {
  name: 'IndexPage',

  components: {
    FiltersList,
    ResultsList
  },

  asyncData ({ store }) {
    store.dispatch('updateList')

    const usersList = store.state.usersList

    const getUniqStates = new Set(usersList.map((result) => {
      return result.location.state
    }))

    const getUniqGenders = new Set(usersList.map((result) => {
      return result.gender
    }))

    return {
      statesFilterList: [...getUniqStates].map((state, index) => {
        return {
          id: index,
          label: state,
          name: state
        }
      }),

      gendersFilterList: [...getUniqGenders].map((gender, index) => {
        return {
          id: index,
          label: Utils.getGenderTranslate(gender),
          name: gender
        }
      })
    }
  },

  data () {
    return {}
  },

  computed: {
    ...mapState({
      usersList: state => state.usersList
    })
  },

  mounted () {
    this.$store.watch(state => state.filters.states, () => this.updateList())
    this.$store.watch(state => state.filters.genders, () => this.updateList())
  },

  methods: {
    ...mapActions({
      setFilterState: 'setFilterState',
      setFilterGender: 'setFilterGender',
      updateList: 'updateList'
    }),

    updateStateFilter (state) {
      this.setFilterState(state)
    },

    updateGenderFilter (gender) {
      this.setFilterGender(gender)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    @include base-container;
    display: grid;
    grid-template-columns: [sidebar] 272px [users-list] 1fr;
    gap: 1rem;

    @media (max-width: 1200px) {
       grid-template-columns: [users-list] 100%;
    }

    &__sidebar {
      grid-area: sidebar;
      @include frame-border-gray;
      min-height: 474px;
      padding: 24px 0 0 27px;

      @media (max-width: 1200px) {
        display: none;
        grid-area: unset;
      }
    }

    &__users-list {
      grid-area: users-list;
    }
  }

</style>
