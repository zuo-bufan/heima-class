<template>
  <div>
    <!-- 公共的头 -->
    <header>
      <h1>header</h1>
    </header>
    <!-- 中间是二级路由的挂载点 -->
    <article>
      <!-- router-view -->
      <nuxtChild />
    </article>
    <!-- 公共的尾部 -->
    <footer>
      <nuxt-link to="/layout">首页</nuxt-link>
      <nuxt-link to="/layout/two">第二个</nuxt-link>
      <nuxt-link to="/layout/three">第三个</nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>