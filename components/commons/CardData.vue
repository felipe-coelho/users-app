<template>
  <div
    class="card-data"
    data-cy="card-data"
    :class="{ 'card-data--hover': hover, 'card-data--shadow': !hover }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card-data {
  @include frame-border-gray;
  align-items: center;
  justify-content: center;
  transition: all ease-out .2s;
  width: 100%;

  &--hover:hover {
    @include box-shadow;
    border-color: #E2BD93;
    transition: all ease-in .3s;
  }

  &--shadow {
    @include box-shadow;
  }
}
</style>
