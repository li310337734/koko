<template>
  <div class="gh">
      <div class="hj">
          <div>账号登录</div>
      </div>
      <div class="el">
            <el-input
                placeholder="请输入账号"
                prefix-icon="el-icon-mobile-phone"
                v-model="zhanghao">
            </el-input>
      </div>
       <div class="el">
            <el-input
                placeholder="请输入登录密码"
                prefix-icon="el-icon-lock"
                v-model="mima"
                type="password">
            </el-input>
      </div>
      <el-row class="vc">
         <el-button type="primary" style="width:300px;margin-left:40px;margin-top:20px" @click="dl">登录</el-button>
      </el-row>
      <div class="io">LOGO</div>
  </div>
  
</template>
<script>
export default {
  data() {
        return {
            zhanghao:'',
            mima:''
        }
    },
    methods:{
        dl(){
            this.axios.post(
                "http://139.9.169.87:8081/examsystem/login?username="+this.zhanghao+"&password="+this.mima+""
            ).then((res)=>{
                console.log(res)
                localStorage.setItem("token",res.data.data.token)
                this.$router.push({
                    path:"/opo"
                })
                console.log(localStorage.getItem("token"))
                console.log(this.zhanghao)
                console.log(this.mima)
            })
        }
    },created(){
       
    }
}
</script>
<style>
    body{
        
        background: #e5e5e5;
    }
    .io{
        width: 100px;
        height: 100px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 68px;
        right: 720px;
        text-align: center;
        line-height: 100px;
        color: #e5e5e5
    }
    .gh{
        width: 380px;
        height: 418px;
        background: white;
        margin: 0 auto;
        margin-top: 120px;
        border-radius: 2%;
    }
    .hj{
        color: #549ef1;
        font-weight: 1000;
        padding-top: 70px;
    }
    .hj>div:nth-of-type(1){
        margin-left:155px;
    }
    .hj>div:nth-of-type(2){
        height: 2px;
        width: 300px;
        background: #549ef1;
        margin: 0 auto;
        margin-top: 20px
    }
    .el{
        width: 300px;
        margin-top: 20px;
        margin-left: 40px
    }

</style>