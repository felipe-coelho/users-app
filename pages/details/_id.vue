<template>
  <div class="user-details">
    <header class="user-header">
      <img :src="userDetails.picture" alt="" class="user-picture">

      <div class="user-header__data">
        <h3 class="user-header__data-name">
          {{ userDetails.name }}
        </h3>

        Usuário desde: {{ userDetails.registeredDate | date-format }} <br>
      </div>
    </header>

    <div class="user-details__content">
      <CardData class="user-details__content-group">
        <h3>Dados pessoais</h3>

        <FieldValue label="Sexo" :value="translateGender(userDetails.gender)" />
        <FieldValue label="Data de nascimento" :value="userDetails.dob" value-type="date" />
      </CardData>

      <CardData class="user-details__content-group">
        <h3>Contatos</h3>

        <FieldValue label="E-mail" :value="userDetails.email" />
        <FieldValue label="Celular" :value="userDetails.cell" />
        <FieldValue label="Telefone" :value="userDetails.phone" />
      </CardData>

      <CardData class="user-details__content-group user-address">
        <h3>Endereço</h3>

        {{ userDetails.location.street | address-format }} - {{ userDetails.location.city }} <br>

        {{ userDetails.location.state }} - CEP: {{ userDetails.location.postcode }}
      </CardData>
    </div>
  </div>
</template>

<script>
import FieldValue from '~/components/commons/FieldValue'
import CardData from '~/components/commons/CardData'
import Users from '~/services/Users'
import Utils from '~/utils'
export default {
  name: 'UserDetails',

  components: {
    FieldValue,
    CardData
  },

  asyncData ({ params }) {
    const userId = parseInt(params.id)
    const userDetails = Users.getUserDetails(userId)

    return {
      userDetails
    }
  },

  methods: {
    translateGender (value) {
      return Utils.getGenderTranslate(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.user-details {
  .user-header {
    align-items: center;
    background-color: $dark-gray;
    color: $gray-1;
    display: flex;
    flex-direction: column;
    height: 90px;
    margin-bottom: 180px;
    padding: 16px;
    width: 100%;

    .user-picture {
      border-radius: 100%;
    }

    &__data {
      color: $dark-gray;
      text-align: center;
      font-size: 0.75rem;

      &-name {
        @include font-weight-400(3rem);
        margin-bottom: 16px;
        text-transform: capitalize;
      }
    }
  }

  &__content {
    width: 60%;
    margin: 0 auto;
    display: flex;
    padding: 16px;
    justify-content: space-between;

    @media (max-width: 1200px) {
       width: 100%;
    }

    @media (max-width: 768px) {
       flex-direction: column;
    }

    &-group {
      @include frame-border-gray;
      margin-bottom: 16px;
      width: calc(50% - 16px);
      padding: 16px;
      box-sizing: border-box;

      @media (max-width: 768px) {
        width: 100%;
        text-align: center;
      }

      &:not(:last-child) {
        margin-right: 20px;
      }

      h3 {
        @include font-weight-400(1.5rem);
        color: $gray-3;
        margin-bottom: 10px;
      }
    }
  }

  .user-address {
    text-transform: capitalize;
  }
}
</style>
