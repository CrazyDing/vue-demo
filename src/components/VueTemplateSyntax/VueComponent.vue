<template>
    <div>
        <df></df>
        <ds></ds>
        点击总次数：{{total}}
        <button-count @addTotal="add"></button-count>
        <button-count @addTotal="add"></button-count>
    </div>
</template>

<script>
    export default {
        name: "vue-component",
        components:{
            "ds":{
                template:'<div>我是一个局部组件</div>'
            },
            "buttonCount":{
                template:'<div @click="addOne" style="border:1px solid black;width:20px;height:20px;margin:0 auto;">{{count}}</div>',
                data:function () {
                    return{
                        count:0
                    }
                },
                methods:{
                  "addOne":function () {
                      this.count++;
                      this.$emit("addTotal");
                  }
                }
            }
        },
        data:function () {
            return{
                total:0
            }
        },
        methods:{
            "add":function () {
                  this.total++
            }
        }
    }
</script>

<style scoped>

</style>
