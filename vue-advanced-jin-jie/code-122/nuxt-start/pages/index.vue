<template>
  <div>
    <h1 @click="$router.push('/list')">{{msg}}</h1>
    <!-- <router-link></router-link> -->
    <nuxt-link to="/layout">layout</nuxt-link>
    <nuxt-link to="/list">list</nuxt-link>
    <nuxt-link to="/detail/123">detail</nuxt-link>
    <button @click="add">click</button>
    <!-- 后台列表渲染 -->
    <div>
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: 'nuxt ssr with vue!',
    }
  },
  /**
   * 服务端在组件创建之前异步获取后台数据
   * 1. beforeCreate之前执行 =》不存在this
   * 2. 首次加载/刷新情况只在服务器端运行=> 加载完后切换路由=》请求是在客户端发的
   * 3. 函数体体内通过return 返回data中的数据
   */
  async asyncData (context) {
    // console.log(context, this)
    // 调用后台接口
    const { data } = await axios.get('https://5990367be1e4470011c46fa8.mockapi.io/meng/user')
    console.log('获取后台数据：', data)
    return {
      // 后台数据
      // list: [{ id: 0, name: '小红' }, { id: 1, name: '小港' }]
      list: data
    }
  },
  created () {
    // 首次加载/刷新页面情况下：被执行了两次=》完成服务端渲染
    console.log('是否是服务端渲染：', this.$isServer, this.list)
    // this.getList()
  },
  methods: {
    add () {
      this.msg = Math.floor(Math.random() * 100)
    },
    //获取后台数据
    async getList () {
      const { data } = await axios.get('https://5990367be1e4470011c46fa8.mockapi.io/meng/user')
      console.log(data)
      this.list = data
    }
  },
}
</script>

<style scoped>
</style>