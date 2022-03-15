import { ref, onUnmounted, computed } from 'vue'
import dayjs from 'dayjs'
import { useIntervalFn } from '@vueuse/core'

// 倒计时
/**
 * 
 * @param {*} time 倒计时秒数
 * @returns {start:fn 开始倒计时 countTimeText:倒计时分秒值}
 */
export function useCountDown (time) {
  const countTime = ref(0)

  // 计算属性基于现在的countTime做一个转换处理
  const countTimeText = computed(() => {
    // 完成转换逻辑
    return dayjs.unix(countTime.value).format('mm分ss秒')
  })

  const { pause, resume } = useIntervalFn(() => {
    /* your function */
    // 自减逻辑
    countTime.value--
    // 到零停止
    if (countTime.value <= 0) {
      pause()
    }
  }, 1000, { immediate: false })

  // 开始计时方法
  function start (tm) {
    if (countTime.value === 0) {
      countTime.value = time || tm
    }
    resume()
  }

  // 清理一下定时器
  // 组件的卸载之后
  onUnmounted(() => {
    pause()
  })

  // console.log(pause, resume, isActive)
  return { countTime, start, pause, countTimeText }
}
