<template>
  <div class="pagination" data-cy="pagination">
    <button
      class="pagination__prev"
      :disabled="currentPage === 1"
      @click="$emit('goToPage', currentPage - 1)"
    >
      <img src="/arrow.svg" title="Anterior" alt="Anterior">
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      class="pagination__numbers"
      :class="{'pagination__numbers--active': page === currentPage}"
      data-cy="pagination-number"
      @click="$emit('goToPage', page)"
    >
      {{ page }}
    </button>

    <button
      class="pagination__next"
      :disabled="currentPage === totalPages"
      @click="$emit('goToPage', currentPage + 1)"
    >
      <img src="/arrow.svg" title="Próximo" alt="Próximo">
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginationItems',

  props: {
    totalPages: {
      type: Number,
      required: true
    },

    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination {
    &__next, &__prev {
      border-radius: 100%;
      background-color: $gray-4;

      &:disabled {
        background-color: $light-gray;
        cursor: default;
      }

      img {
        vertical-align: middle;
      }
    }

    &__prev img {
      transform: rotate(180deg);
    }

    &__numbers {
      @include font-weight-400;
      background: transparent;

      &--active {
        font-weight: 700;
        position: relative;

        &::after {
          content: "";
          width: 100%;
          display: block;
          height: 4px;
          background-color: $gray-3;
          border-radius: 9px;
          position: absolute;
          left: 0;
          bottom: -8px;
        }
      }
    }

    button {
      border: none;
      cursor: pointer;
      width: 32px;
      height: 32px;

      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
</style>
