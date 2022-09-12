<template>
  <section class="filters" data-cy="filters-list">
    <h3>
      {{ filtersTitle }}
    </h3>

    <ul class="filters-list">
      <li v-for="filter in renderFilters" :key="filter.id">
        <label>
          <input
            :id="filter.id"
            v-model="filterSelected"
            :value="filter.name"
            type="checkbox"
            name="filter"
            class="filters-list__check"
            @change="$emit('filterChanged', filterSelected)"
          >
          {{ filter.name }}
        </label>
      </li>
    </ul>

    <div
      v-if="isFilterListLengthExceedslimit"
      data-cy="filters-visibility"
      class="filters__visibility"
    >
      <a
        v-if="renderFilters.length < filtersList.length"
        href="#"
        @click.prevent="filtersListSize = filtersList.length"
      >
        Ver todos
      </a>

      <a
        v-else
        href="#"
        @click.prevent="filtersListSize = filtersListLimit"
      >
        Ver menos
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FiltersList',

  props: {
    filtersTitle: {
      type: String,
      required: true
    },
    filtersList: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      filterSelected: [],
      filtersListLimit: 5,
      filtersListSize: 0
    }
  },

  computed: {
    renderFilters () {
      return this.filtersList.slice(0, this.filtersListSize)
    },

    isFilterListLengthExceedslimit () {
      return this.filtersList.length > this.filtersListLimit
    }
  },

  mounted () {
    this.filtersListSize = this.filtersListLimit
  }
}
</script>

<style lang="scss" scoped>
.filters {
  margin-bottom: 20px;

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.875rem;
  }

  &-list {
    list-style-type: none;

    &__check {
      margin: 0 8px 0 0;
    }
  }

  &__visibility {
    @include font-weight-400(1rem);
    margin-top: 8px;

    a {
      color: $impure-black;
    }
  }
}
</style>
