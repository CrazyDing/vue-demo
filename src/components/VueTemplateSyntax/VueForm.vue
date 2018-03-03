<template>
    <div>
      <label>
        全选
      </label>
      <br/>
      <input type="checkbox" v-model="checked" @click="checkAll"/>{{checked}}
      <br/>
      <label>
        复选
      </label>
      <br/>
      <input type="checkbox" value="apple" v-model="checkNames"/>

      <label>
        apple
      </label>
      <input type="checkbox" value="google" v-model="checkNames"/>
      <label>
        google
      </label>
      <input type="checkbox" value="facebook" v-model="checkNames"/>
      <label>
        facebook
      </label>
      <br/>
      <label>
        已选：{{checkNames}}
      </label>
    </div>
</template>

<script>
    export default {
      name: "vue-form",
      data(){
          return{
            checked:false,
            checkNames:[],
            checkArrays:["apple","google","facebook"]
          }
      },
      methods:{
        checkAll:function () {
          if(!this.checked){
            this.checkNames = this.checkArrays
          }else{
            this.checkNames = []
          }
        }
      },
      watch:{
        "checkNames":function () {
          if(this.checkNames.length == this.checkArrays.length){
            this.checked = true;
          }else{
            this.checked = false;
          }
        }
      }
    }
</script>

<style scoped>

</style>
