<template>
  <div class="app-3" style="width:1200px;height:500px;background:#fff;padding-top:30px;padding-left:40px;margin-left:-1200px">
      <input type="text" v-model="list.date"/>
      <input type="text" v-model="list.name"/>
      <input type="text" v-model="list.address"/>
      <input type="text" v-model="list.shichang"/>
      <input type="text" v-model="list.zhangjie"/>
      <input type="text" v-model="list.jiangshi"/>
      <input type="text" v-model="list.leixin"/>
      <input type="text" v-model="list.shijian"/>
      <input type="text" v-model="list.renshu"/>      
      <div><button @click="tj()">添加</button></div>
  </div>
</template>

<script>
export default {
    name:"aaa",
    data() {
        return {
            list:'',
            index:''
        }
    },
    created(){
        this.list = this.$route.params.list
        this.index = this.$route.params.index
    console.log(this.list,this.index)
},
methods:{
    tj(){
        this.$router.push({
            name:"aka",
            params:{
                list:this.list,
                index:this.index
            }
        })
    }
}
}
</script>

<style>

</style>