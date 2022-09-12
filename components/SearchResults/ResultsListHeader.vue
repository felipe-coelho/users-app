<template>
  <header v-if="totalResults" class="results-header">
    <div>
      Exibindo
      {{ getItemsPerPage }} de
      {{ totalResults }}
      {{ getItemLabel }}
    </div>

    <div>
      Ordenar por:
      <select
        v-model="sortSelected"
        class="sort-select"
        data-cy="select-orderby"
        @change="sortListBy(sortSelected)"
      >
        <option value="" selected>
          Selecione
        </option>
        <option value="name">
          Nome
        </option>
        <option value="registeredAge">
          Tempo de cadastro
        </option>
      </select>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ResultsListHeader',

  props: {
    itemsPerPage: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      sortSelected: ''
    }
  },

  computed: {
    ...mapState({
      usersList: state => state.usersList,
      currentPage: state => state.paginationCurrentPage
    }),

    totalResults () {
      return this.usersList.length
    },

    getItemsPerPage () {
      return (this.itemsPerPage * this.currentPage) > this.totalResults
        ? this.totalResults
        : this.itemsPerPage * this.currentPage
    },

    getItemLabel () {
      return this.usersList.length === 1 ? 'item' : 'itens'
    }
  },

  methods: {
    ...mapActions({
      updateList: 'setUsersList'
    }),

    sortListBy (fieldName) {
      if (fieldName) {
        const sortedList = [...this.usersList].sort((prevItem, currentItem) => {
          if (prevItem[fieldName] > currentItem[fieldName]) {
            return 1
          }
          if (prevItem[fieldName] < currentItem[fieldName]) {
            return -1
          }

          return 0
        })

        this.updateList(sortedList)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.results-header {
  @include frame-border-gray;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0 16px;
}

.sort-select {
  @include font-weight-400(0.75rem);
  border: none;
}
</style>
