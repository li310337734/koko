<template>
  <div class="app-3">
      <div class="app-5">
          <div class="app-5-1">
              <div>课程详细</div>
              <button @click="$router.go(-1)">返回</button>
          </div>
          <div class="app-5-2">基本信息</div>
          <div style="width:850px;margin:0 auto;">
              <template>
                <el-table
                border
                 :header-cell-style="{background:'#f9f9f9'}"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="课程ID"
                    align="center"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    align="center"
                    label="课程名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    align="center"
                    label="课程图片">
                </el-table-column>
                <el-table-column
                    prop="time"
                    align="center"
                    label="课程时长">
                </el-table-column>
                <el-table-column
                    prop="jie"
                    align="center"
                    label="课程章节">
                </el-table-column>
                </el-table>
            </template>
            <template>
                <el-table
                border
                 :header-cell-style="{background:'#f9f9f9'}"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date1"
                    label="讲师"
                    align="center"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name1"
                    align="center"
                    label="课程类型"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address1"
                    align="center"
                    label="在学人数">
                </el-table-column>
                <el-table-column
                    prop="time1"
                    align="center"
                    label="添加时间">
                </el-table-column>
                <el-table-column
                    prop="jie1"
                    align="center"
                    label="学院QQ交流群">
                </el-table-column>
                </el-table>
            </template>
          </div>
          <div class="ke">课程介绍</div>
          <div class="ke1">介绍介绍介绍，这是内容内容内容，，，，，，所有作业和实战，我们针每一位学员1对1批改；不是简单的打分式批改，是详细的逐行代码批改所有作业和实战，我们针对每一位学员1对1批改；不是简单的打分式批改，是详细的逐行代码批改，所有作业和实战，我们针对每一位学员1对1批改；不是简单的打分式批改，是详细的逐行代码批改，所有作业和实战，我们针对每一位学员1对1批改；不是简单的打分式批改，是详细的逐行代码批改。。腾讯爱奇艺修改超前点播规则你怎么看，个人感觉这纯粹是换汤不换药，感觉付费比之前更多了，每次更新都 要花3块，18元买六集，除非脑子不清楚才会花钱买吧</div>
          <div class="ke">讲师介绍</div>
          <div class="ke2">
              <div>*</div><div>讲师头像:</div><div>头像</div>
          </div>
          <div class="ke3">
              <div>*</div><div>讲师姓名:</div><div>王昭君</div>
          </div>
          <div class="ke3">
              <div>*</div><div>讲师头衔:</div><div>大学教授</div>
          </div>
          <div class="ke3">
              <div>*</div><div>讲师介绍:</div><div>介绍介绍介绍介绍介绍介绍介绍介绍</div>
          </div>
          <div class="ke">课程视频</div>
          <img width="850" style="margin-left:40px;" src="img/3.png"/>
          <div class="ke">课程章节</div>
          <div style="margin:40px;">87小节</div>
          <div style="width:850px;margin:40px;">
              <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
      </div>
  </div>
</template>

<script>
export default {
     data() {
        return {
          tableData: [{
            date: '20190909120909',
            name: '教学观',
            address: '图片',
            time:'20小时',
            jie:'98节',
            date1: '王昭君',
            name1: '综合素质',
            address1: '123',
            time1:'2017-07-19 14:48:38',
            jie1:'1234444444'
          }],
          data: [{
          label: '第一章 教学观',
          children: [{
            label: '1.1教学观概念',
            
          }]
        }, {
          label: '第二章 教育观',
          children: [{
            label: '1.1教育观概念',
            
          }]
        }, {
          label: '第三章学生观',
          children: [{
            label: '1.1学生观概念',
           
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
        }
      },
      methods:{
          handleNodeClick(data) {
            console.log(data);
        }
      }
}
</script>

<style>
    .app-5{
        width:1200px;
        height: 2000px;
        background: #fff;
        font-size: 13px;
        margin-left: -1200px;
    margin-top: 65px;
    }
    .app-5-1{
        display: flex;
        border-bottom: 0.5px solid #ccc;
    }
    .app-5-1 div:nth-child(1){
        margin:20px;
    }
    .app-5-1 button:nth-child(2){
        width: 43px;
        height: 24px;
        margin: 20px 0px 0px 845px;
    }
    .app-5-2{
        border-left: 4px solid #4f91f5;
        text-indent: 7px;
        margin: 40px;
    }
    .ke{
        border-left: 4px solid #4f91f5;
        text-indent: 7px;
        margin: 40px;
    }
    .ke1{
        width: 850px;
        height:150px;
        border-radius: 5px;
        border:0.5px solid #ccc;
        margin: 0 auto;
        padding:20px;
    }
    .ke2{
        margin:40px;
        display: flex;
    }
    .ke2 div:nth-child(1){
        color:red;
    }
    .ke2 div:nth-child(3){
        width:35px;
        height:35px;
        border-radius: 100%;
        border: 0.5px solid #ccc;
        text-align: center;
        line-height: 35px;
        margin:-10px 0px 0px 60px;
    }
    .ke3{
        margin:40px;
        display: flex;
    }
    .ke3 div:nth-child(1){
        color:red;
    }
    .ke3 div:nth-child(3){
        margin:0px 0px 0px 60px;
    }
</style>