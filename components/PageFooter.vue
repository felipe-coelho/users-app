<template>
  <footer>
    <div>
      <img src="/juntossomosmais_logo-white.svg" alt="Juntos Somo +">
    </div>

    <div class="middle-text">
      Juntos Somos Mais Fidelização S.A.
    </div>

    <div class="social-media">
      Siga-nos nas redes sociais: <br>

      <div class="social-media__icons">
        <img src="/facebook-icon.svg" alt="">
        <img src="/instagram-icon.svg" alt="">
        <img src="/linkedin-icon.svg" alt="">
      </div>
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
    min-height: 296px;
    color: #fff;
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .middle-text {
      margin: 24px 0;
    }

    span {
      font-size: 0.875rem;
    }

    .social-media {
      &__icons {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
