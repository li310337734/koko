<template>
  <div class="app-3">
      <div class="app-6">
          <div class="ke">基本信息</div>
          <div style="display:flex;">
            <div class="id">
              <div>课程id:</div>
              <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="input"></el-input></div>
            </div>
            <div class="id">
              <div>课程名称:</div>
              <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="input1"></el-input></div>
            </div>
          </div>
          <div style="display:flex;">
            <div class="id">
              <div>课程时长:</div>
              <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="input2"></el-input></div>
            </div>
            <div class="id">
              <div>课程章节:</div>
              <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="input3"></el-input></div>
            </div>
          </div>
          <div style="display:flex;">
            <div class="id">
              <div>讲师姓名:</div>
              <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="input4"></el-input></div>
            </div>
            <div class="id">
              <div>课程类型:</div>
              <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="input5"></el-input></div>
            </div>
          </div>
          <div style="display:flex;">
            <div class="id">
              <div>在线人数:</div>
              <div><el-input  style="margin:-5px 0px 0px 10px"  v-model="input6"></el-input></div>
            </div>
            <div class="id">
              <div>是否免费:</div>
              <div style="margin-left:10px;">
                  <el-switch
                    v-model="value"
                    active-color="#5B7BFA"
                    inactive-color="#ccc">
                  </el-switch>
              </div>
            </div>
          </div>
          <div class="goa"><el-button class="button" @click="add()" type="primary">提交</el-button></div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: true,
            input:"",
            input1:"",
            input2:"",
            input3:"",
            input4:"",
            input5:"",
            input6:"",

        }
    },
    methods:{
        add(){
            if(this.input!="" && this.input1!="" && this.input2!="" && this.input3!="" && this.input4!="" && this.input5!="" && this.input6!=""){
                var qwe={
                     date: this.input,
                     name: this.input1,
                     address:this.input2,
                     shichang:this.input3,
                     zhangjie:this.input4,
                     jiangshi:this.input5,
                     leixin:this.input6,
                     shijian:'2017-07-19',
                     renshu:'123'
                }
                console.log(qwe)
                //转换成字符串 
                this.$router.push({
                    name:'aka',
                    params:{cdd:qwe}
                })
            }else{
                alert("不能为空")
            }
        }
    }
}
</script>

<style>
    .goa{
        margin-left: 35px;
        margin-top: 20px
    }
    .app-6{
        width:1200px;
        height: 500px;
        background: #fff;
        font-size: 13px;
        padding-top:1px;
        margin-left: -1200px;
    }
    .id{
        display: flex;
        width:300px;
        margin:30px 0px 0px 40px;
    }
    .button{
        margin: 40px 0px 0px 300px
    }
</style>