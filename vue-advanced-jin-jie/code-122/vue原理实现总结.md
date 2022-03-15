# vue原理实现总结

> MVVM架构=》数据驱动视图

使用技术：原生JS的**构造函数**（类）=》编程=》面向对象

说明：`class`关键字是个语法糖=》背后构造函数

实现步骤：

1. 创建了一个**Vue的构造函数**=》**入口**=》初始化数据和功能

2. 创建了一个Observer构造函数=》劫持data数据 => Object.defineProperty('劫持对象', '劫持对象的属性','劫持逻辑')

3. 创建了一个Compiler构造函数=》编译模板=》实际上做了什么？=》对vue特有的{{key}}、指令等进行编译

   =》让浏览器解析运行

   * 获取dom的所有子节点=》domApp.childNodes

4. 使用EventEmitter构造函数=》收集依赖（依赖data数据=>\$on）和更新依赖（setter=>\$emit）



> vue2和3原理对比=>数据驱动视图(响应式)

1. Vue2 => 使用 Object.defineProperty('劫持对象', '劫持对象的属性','劫持逻辑')

   特点：

   * 劫持指定属性
   * 改变了原始对象

   问题（bug）：

   * 数组：对长度和下标操作
   * 对象：新增和删除的属性

2. Vue3 => 使用Proxy('劫持对象', '劫持逻辑')

   特点：

   * 劫持功能更强、粒度更细（13个）
   * 不用指定被劫持对象的属性
   * 没有改变原始对象=》代理执行后 返回的是个新对象

> Vue3组合式API

```vue
<script>
import { ref, reactive, watch } from 'vue'
export default {
  // vue3.0
  setup(props, context) {
    console.log(this) // =>undefined
    const count = ref(1)
    const arr = reactive([])
    
    function add() {
      console.log('proxy:', this) // 不是组件实例     
    }
    // 监控数据变化=> ref定义的简单类型
    watch(count, (count, prevCount) => {
      /* ... */
      console.log('cp-count-ref:', count, prevCount)
    })
    return {count, arr}
  },
  // vue2.0
  //...
  
}
</script>
```



问题⚠️：vue-cli创建项目的时候=》没有选择less=》单独安装less的版本会过高=>降级less版本

