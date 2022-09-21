<template>
  <footer>
    <div>
      USERS
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
  footer {
    background-color: $dark-gray;
    height: 196px;
    color: #fff;
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 0.875rem;
    }
  }
</style>
