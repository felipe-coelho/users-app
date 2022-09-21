<template>
  <header>
    <div class="header__content">
      <div class="header__logo">
        <a href="/">
          <img src="/users-logo-web.png" alt="Juntos Somo +">
        </a>
      </div>
      <div class="header__search">
        <input
          type="search"
          name="search"
          placeholder="Buscar aqui"
          data-cy="input-search"
          @keyup.enter="doSearch"
        >
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageHeader',

  methods: {
    ...mapActions({
      setSearchTerm: 'setSearchTerm',
      updateList: 'updateList'
    }),

    doSearch (event) {
      this.setSearchTerm(event.target.value)
      this.updateList()

      if (this.$route.name !== 'index') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 96px;
    background-color: $gray-1;
    display: flex;
    align-items: center;

    .header__content {
      align-items: center;
      display: flex;
      width: 1136px;
      margin: 0 auto;

      @media (max-width: 1200px) {
        padding: 0 16px;
        width: 100%;
      }
    }

    .header__logo {
      margin-right: 140px;

      a img {
        border-radius: 5px;
      }

      @media (max-width: 768px) {
        margin-right: 0;
      }
    }

    .header__search {
      @media (max-width: 1200px) {
        width: 100%;
        text-align: right;
      }

      input {
        width: 464px;
        height: 48px;
        background: #fff;
        border: 1px solid #B0B0B0;
        border-radius: 32px;
        padding: 0 20px 0 50px;
        color: $gray-3;

        @media (max-width: 1200px) {
          width: 80%;
        }
      }
    }
  }
</style>
