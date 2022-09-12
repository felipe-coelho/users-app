<template>
  <div class="results-card">
    <CardData :hover="true" class="results-card__item">
      <NuxtLink :to="linkUrl">
        <img
          class="user-photo"
          :src="cardData.thumbnail"
          :alt="cardData.name"
        >

        <h5 class="user__name" data-cy="user-name">
          {{ cardData.name }}
        </h5>

        <address class="user__address" data-cy="user-address">
          <p>{{ cardData.location.street | address-format }}</p>

          {{ cardData.location.city }} <br>
          {{ cardData.location.state }} -
          CEP: {{ cardData.location.postcode }}
        </address>
      </NuxtLink>
    </CardData>
  </div>
</template>

<script>
import CardData from '~/components/commons/CardData'
export default {
  components: {
    CardData
  },

  props: {
    cardData: {
      type: Object,
      required: true
    },
    linkUrl: {
      type: String,
      default: ''
    }

  }
}
</script>

<style lang="scss" scoped>
  .results-card {
    &__item {
      align-items: center;
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
      height: 310px;
      justify-content: center;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      text-align: center;

      h5.user__name {
        color: $impure-black;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-transform: capitalize;
      }
    }

    img.user-photo {
      border-radius: 100%;
      margin-bottom: 1rem;
    }

    .user__address {
      @include font-weight-400(0.75rem);
      color: $impure-black;
      text-align: center;

      p {
        color: $impure-black;
        font-size: 0.875rem;
        margin-bottom: 0.75rem;
      }
    }
  }
</style>
