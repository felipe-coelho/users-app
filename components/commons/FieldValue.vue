<template>
  <div class="fields">
    <div class="label">
      {{ label }}
    </div>
    <div class="value">
      <template v-if="valueType === 'date'">
        {{ value | date-format }}
      </template>
      <template v-else>
        {{ value }}
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    valueType: {
      type: String,
      default: '',
      validator: value => ['date'].includes(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.fields {
  margin-bottom: 16px;

  .label {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
  }
}
</style>
