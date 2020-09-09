<template>
   <div class="aa">
      <input type="text" v-model="iqp1">
      <input type="text" v-model="iqp2">
      <input type="button" @click="upd()" value="xiugai">
  </div>
</template>

<script>
import qs from "qs"
export default {
    data() {
        return {
            iqp1:this.$route.params.cc.professionalName,
            iqp2:this.$route.params.cc.professionalDesc,
        }
    },
    upd(){
        let data=qs.stringify({
            id:this.$route.params.cc.id,
            professionalName:this.iqp1,
            professionalDesc:this.iqp2
        })
        this.axios.post("http://139.9.169.87:8081/examsystem/updateProfessional",data,{
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
</script>

<style>

</style>