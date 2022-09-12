<template>
  <div>
    <ResultsListHeader :items-per-page="itemsPerPage" />

    <div class="results-items">
      <template v-if="totalResults">
        <ResultsCard
          v-for="(user, index) in getListPerPage"
          :key="index"
          :card-data="user"
          :link-url="`/details/${user.id}`"
        />
      </template>

      <h2 v-else data-cy="no-results">
        Nenhum resultado encontrado
      </h2>
    </div>

    <footer v-if="totalResults && (totalResults > itemsPerPage)" class="results-footer">
      <Pagination
        :total-pages="totalPages"
        :current-page="currentPage"
        @goToPage="goToPage"
      />
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ResultsListHeader from '~/components/SearchResults/ResultsListHeader'
import ResultsCard from '~/components/SearchResults/ResultsCard'
import Pagination from '~/components/SearchResults/Pagination'
export default {
  name: 'ResultsList',

  components: {
    ResultsCard,
    Pagination,
    ResultsListHeader
  },

  props: {
    itemsPerPage: {
      type: Number,
      default: 0
    }
  },

  computed: {
    ...mapState({
      usersList: state => state.usersList,
      currentPage: state => state.paginationCurrentPage
    }),

    getListPerPage () {
      const startSliceList = (this.currentPage - 1) * this.itemsPerPage
      return this.usersList.slice(startSliceList, this.currentPage * this.itemsPerPage)
    },

    totalPages () {
      return Math.ceil(this.usersList.length / this.itemsPerPage)
    },

    totalResults () {
      return this.usersList.length
    }
  },

  methods: {
    ...mapActions({
      updateList: 'setUsersList',
      setPaginationCurrentPage: 'setPaginationCurrentPage'
    }),

    goToPage (pageNumber) {
      this.setPaginationCurrentPage(pageNumber)
    }

  }
}
</script>

<style lang="scss" scoped>

.results-items {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  h2 {
    @include font-weight-400(2rem);
    color: $gray-3;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;
    margin: 0 auto;
  }
}

.results-footer {
  display: flex;
  justify-content: center;
}

</style>
