<template>
  <div class="xtx-bread-item">
    <!-- 1. 是否可点击跳转 -->
    <RouterLink v-if="to" :to="to"><slot /></RouterLink>
    <span v-else><slot /></span>
    <!-- 2. 是否传入分隔符 -->
    <i v-if="separator">{{ separator }}</i>
    <i v-else class="iconfont icon-angle-right"></i>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'XtxBreadItem',
  props: {
    to: String
  },
  setup () {
    const separator = inject('separator')
    return { separator }
  }
}
</script>
