<template>
    <div>
      <p>
        使用 v-html 指令用于输出 html 代码：<br />
      </p>
      <div v-html="message"></div>
    </div>
</template>

<script>
    export default {
      name: "v-html",
      data() {
        return{
          message:'<h1>我不是菜鸟</h1>'
        }
      }
    }
</script>

<style scoped>

</style>
