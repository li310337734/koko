<template>
  <div class="aa">
      <input type="text" v-model="ip1">
      <input type="text" v-model="ip2">
      <input type="button" @click="adds()" value="aaa">
  </div>
</template>

<script>
import qs from "qs"
export default {
    data() {
        return {
            ip1:"",
  ip2:"",
        }
    },
methods:{
    adds(){
        let data=qs.stringify({
            professionalName:this.ip1,
              professionalDesc:this.ip2
        })
        this.axios.post("http://139.9.169.87:8081/examsystem/addProfessional",data,{
            headers:{
                Accept:"application/json"
            }
        })
        .then(res=>{
           console.log(res);
           this.$router.push({
               path:"/opo/tab21"
           })
            
        })
    }
}
}
</script>

<style>
.aa{
    width: 1200px;
    margin-left: -1200px;
    margin-top: 100px;
}
</style>