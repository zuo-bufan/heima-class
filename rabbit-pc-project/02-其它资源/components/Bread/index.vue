<template>
  <div class="xtx-bread">
    <slot />
    <!-- <div class="xtx-bread-item">
      <span>首页</span>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item">
      <span>美食</span>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item">
      <span>巧克力</span>
    </div> -->
  </div>
</template>

<script>
import { provide } from 'vue'
export default {
  name: 'XtxBread',
  props: {
    separator: {
      type: String
    }
  },
  setup (props) {
    provide('separator', props.separator)
  }
}
</script>

<style lang='less'>
.xtx-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .xtx-bread-item {
    // 最后一个i隐藏
    &:nth-last-of-type(1) {
      i {
        display: none;
      }
    }
  }
}
</style>
