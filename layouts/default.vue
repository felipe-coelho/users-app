<template>
  <div>
    <PageHeader />

    <section>
      <Nuxt />
    </section>

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'
export default {
  name: 'LayoutDefault',

  components: {
    PageFooter,
    PageHeader
  }
}
</script>
