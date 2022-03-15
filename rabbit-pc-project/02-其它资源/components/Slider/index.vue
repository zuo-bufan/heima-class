<template>
  <div class="box" style="height: 500px">
    <div class="xtx-slider" @mouseenter="clearLoop" @mouseleave="loopSlider">
      <!-- 图片列表 -->
      <ul class="slider-body">
        <!--
          fade: 当fade类名存在 当前图片就显示 不存在就不显示
         -->
        <li
          class="slider-item"
          :class="{ fade: curIndex === i }"
          v-for="(item, i) in data"
          :key="i"
        >
          <img :src="item.imgUrl" alt="" />
        </li>
      </ul>
      <!-- 圆圈切换按钮 -->
      <div class="slider-indicator">
        <span
          :class="{ active: curIndex === index }"
          v-for="(item, index) in data"
          :key="index"
          @click="curIndex = index"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 目标：点击圆圈按钮 实现对应图片的切换
 * 思路：
 *   1. 图片和圆圈按钮数量是一样的 下标值是对应的
 *   2. 记录一下当前点击的是哪一项
 *   3. 需要根据记录下来的下标值 去配合:class 控制fade这个类名是否应该显示
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'
export default {
  name: 'XtxSlider',
  props: {
    // 数据列表
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 是否自动轮播
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const curIndex = ref(0)
    // const sliders = ref([
    //   {
    //     hrefUrl: '/#/',
    //     id: '630000201807155635',
    //     imgUrl: 'http://zhoushugang.gitee.io/erabbit-client-pc-static/images/b1.jpg'
    //   },
    //   {
    //     hrefUrl: '/#/',
    //     id: '650000201207058528',
    //     imgUrl: 'http://zhoushugang.gitee.io/erabbit-client-pc-static/images/b2.jpg'
    //   }
    // ])

    const timer = ref(null)
    const loopSlider = () => {
      if (!props.autoPlay) return
      timer.value = setInterval(() => {
        curIndex.value++
        if (curIndex.value > props.data.length - 1) {
          // 最后一个播放完=》从头开始
          curIndex.value = 0
        }
      }, 2000)
    }

    const clearLoop = () => {
      clearInterval(timer.value)
    }

    onMounted(() => {
      loopSlider()
    })

    onBeforeUnmount(() => {
      clearLoop()
    })

    return {
      curIndex,
      // sliders,
      loopSlider,
      clearLoop
    }
  }
}
</script>

<style scoped lang='less'>
.xtx-slider {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .slider {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .slider-btn {
      opacity: 1;
    }
  }
}
</style>
