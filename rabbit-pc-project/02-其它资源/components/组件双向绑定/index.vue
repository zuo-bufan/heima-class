<template>
  <div>
    <h1 :class="['red', 'ft']">组件的双向绑定实现</h1>
    <!-- <Model v-model="num" v-model:cc="num" a="1" b="2" /> -->
    <!-- 等价于 v-model="num" ===  :modelValue="num" @update:modelValue="num = $event"-->
    <Model :modelValue="num" @update:modelValue="num = $event" a="1" b="2" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Model from './model.vue'
export default {
  components: {
    Model
  },
  setup () {
    const num = ref(0)
    return { num }
  }
}
</script>

<style lang="less" scoped>
.red {
  color: red;
}
.ft {
  border: 3px dotted red;
}
</style>
