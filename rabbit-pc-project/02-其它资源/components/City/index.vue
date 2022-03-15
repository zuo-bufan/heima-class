
<template>
  <div class="xtx-city" ref="target">
    <!-- 展示选择结果位置 -->
    <div class="select" @click="toggleDialog" :class="{ active }">
      <span class="placeholder" v-if="!seled.fullSels">请选择配送地址</span>
      <span class="value" v-else>{{ seled.fullSels }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <!-- 选择省市区弹层 -->
    <div class="option" v-if="active">
      <!-- 只渲染了第一层 -->
      <span
        class="ellipsis"
        @click="selCity(city)"
        v-for="city in cityList"
        :key="city.code"
        >{{ city.name }}</span
      >
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { onClickOutside } from '@vueuse/core'
// 获取城市列表数据
function useCityList () {
  const cityList = ref([])
  // 备份数据变量
  const backupCityList = []
  const getCityList = async () => {
    const { data } = await axios({ url: 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json' })
    console.log('citys:', data)
    // 备份
    // backupCityList = data => 问题：切断引用关系
    backupCityList.push(...data)

    cityList.value = data
  }
  onMounted(() => {
    getCityList()
  })
  return { cityList, backupCityList }
}
export default {
  name: 'XtxCity',
  // 选择完触发change事件传递选中城市数据
  emits: ['change'],
  setup (props, { emit }) {
    // 获取城市列表
    const { cityList, backupCityList } = useCityList()
    const target = ref()
    // 1. 控制选择弹层是否显示
    const active = ref(false)
    // 打开城市选择
    function open () {
      console.log(backupCityList)
      // 还原数据
      cityList.value = backupCityList
      active.value = true
    }
    // 关闭城市选择
    function close () {
      active.value = false
    }
    // 点击组件外边关闭
    onClickOutside(target, () => close())

    function toggleDialog () {
      if (active.value) {
        close()
      } else {
        open()
      }
    }

    /**
     * 点击选择省市区:
     * 1. 默认展示省 => level=0
     * 2. 打开弹层，点击省展示当前点击省下的所有市=》level = 1
     * 2. 继续点击某个市，展示市下的区县=》level = 2
     */
    // 点击选中城市数据
    const seled = reactive({
      provinceCode: '', // 省code
      provinceName: '', // 省名称
      cityCode: '', // 城市code
      cityName: '', // 城市名称
      countryCode: '', // 地区code
      countryName: '', // 地区名
      // 最终选择(省+市+区名)
      fullSels: ''
    })
    const selCity = (currCity) => {
      console.log(currCity)
      // 省市区联动实现
      cityList.value = currCity.areaList
      // 选择的时候存储省市区选中数据
      if (currCity.level === 0) {
        // 存省
        seled.provinceName = currCity.name
        seled.provinceCode = currCity.code
      } else if (currCity.level === 1) {
        // 存市
        seled.cityName = currCity.name
        seled.cityCode = currCity.code
      } else {
        // 存区
        seled.countryName = currCity.name
        seled.countryCode = currCity.code
        // 拼接完整地址
        seled.fullSels = seled.provinceName + ' ' + seled.cityName + ' ' + seled.countryName
        // 选完关闭弹层
        toggleDialog()
        // 把选中的数据传到组件外部
        emit('change', seled)
      }
    }

    return { active, toggleDialog, cityList, selCity, seled, target }
  }
}
</script>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  margin-left: 10px;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
