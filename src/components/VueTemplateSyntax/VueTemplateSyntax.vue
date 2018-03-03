<template>
  <div>
    <h1>Vue.js 模板语法</h1>
    <p>
      Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。
      Vue.js 的核心是一个允许你采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。
      结合响应系统，在应用状态改变时， Vue 能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。
    </p>
    <div>
      <router-link to="/v-html">使用 v-html 指令用于输出 html 代码</router-link><br />
      <router-link to="/vue-form">Vue.js 表单</router-link><br />
      <router-link to="/vue-component">Vue.js 组件</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vue-template-syntax",
  }
</script>

<style scoped>

</style>
