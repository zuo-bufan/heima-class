<template>
  <div>
    <h1>{{ modelValue }}</h1>
    <button @click="cg">add</button>
    <button @click="cb">add-cc</button>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue', 'update:cc'],
  props: {
    // 默认v-model
    modelValue: {
      type: Number,
      default: 0
    },
    a: String,
    // 代替.sync的v-model
    cc: Number
  },
  setup (props, { emit, attrs }) {
    console.log('bb:', props, attrs)
    const cg = () => {
      emit('update:modelValue', Math.random() * 1000)
    }
    const cb = () => {
      emit('update:cc', Math.random() * 10)
    }
    return { cg, cb }
  }
}
</script>

<style lang="scss" scoped>
</style>
