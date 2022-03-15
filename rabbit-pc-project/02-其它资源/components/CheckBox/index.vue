<template>
  <div class="xtx-checkbox" @click="changeChecked">
    <!-- 选中小图标 -->
    <i v-if="checked" class="iconfont icon-checked"></i>
    <!-- 未选中小图标 -->
    <i v-else class="iconfont icon-unchecked"></i>
    <!-- 自定义文字 -->
    <span><slot /></span>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  name: 'XtxCheckBox',
  props: {
    // vue3.0 v-model用法 （不支持.sync修饰符）
    // 父组件：传递
    // <XtxCheckBox v-model="sel" v-model:meng="goods"> 选择 </XtxCheckBox>
    // 子组件：接收多个v-model值
    // 默认
    modelValue: { // 更新使用 => emit('update:modelValue', newVal)
      type: Boolean,
      default: false
    },
    // 其它
    meng: Object // 更新使用=》emit('update:meng', newVal)
  },
  setup (props, { emit }) {
    console.log('v-models:', props)
    const checked = ref(false)
    const changeChecked = () => {
      checked.value = !checked.value
      emit('update:modelValue', checked.value)
      // 传递状态
      emit('change', checked.value)
    }
    watch(
      () => {
        return props.modelValue
      },
      () => {
        checked.value = props.modelValue
      },
      {
        immediate: true
      }
    )
    return { checked, changeChecked }
  }
}
</script>
<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  cursor: pointer;
  .icon-checked {
    color: @xtxColor;
    // 指定元素之后的相邻兄弟元素
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
