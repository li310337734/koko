<template>
  <div class="wer">
    <div class="qwe">
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
     
   
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>课程管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="aka" tag="div"><el-menu-item index="1-1">免费课</el-menu-item></router-link>
          <router-link to="jingpinke" tag="div"><el-menu-item index="1-2">精品课</el-menu-item></router-link>
        </el-menu-item-group> 
          
      </el-submenu>
      
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>综合素质题库管路</span>
        </template>
        <el-menu-item-group>
          <router-link to="tab21" tag="div"><el-menu-item index="2-1">考试大纲</el-menu-item></router-link>
          <router-link to="tab22" tag="div"><el-menu-item index="2-2">历年真题</el-menu-item></router-link>
          <router-link to="tab23" tag="div"><el-menu-item index="2-3">模拟考卷</el-menu-item></router-link>
          <router-link to="tab24" tag="div"><el-menu-item index="2-4">选择题</el-menu-item></router-link>
          <router-link to="tab25" tag="div"><el-menu-item index="2-5">简答题</el-menu-item></router-link>
          <router-link to="tab26" tag="div"><el-menu-item index="2-6">材料分析题</el-menu-item></router-link>
        </el-menu-item-group> 

         </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>教育教学能力题库管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="tab21" tag="div"><el-menu-item index="3-1">考试大纲</el-menu-item></router-link>
          <router-link to="tab22" tag="div"><el-menu-item index="3-2">历年真题</el-menu-item></router-link>
          <router-link to="tab23" tag="div"><el-menu-item index="3-3">模拟考卷</el-menu-item></router-link>
          <router-link to="tab24" tag="div"><el-menu-item index="3-4">选择题</el-menu-item></router-link>
          <router-link to="tab25" tag="div"><el-menu-item index="3-5">简答题</el-menu-item></router-link>
          <router-link to="tab26" tag="div"><el-menu-item index="3-6">材料分析题</el-menu-item></router-link>
        </el-menu-item-group>  

         </el-submenu>
       <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>学员成果管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="tab31" tag="div"><el-menu-item index="4-1">同学说</el-menu-item></router-link>
          <router-link to="tab32" tag="div"><el-menu-item index="4-2">同学感言</el-menu-item></router-link>
          <router-link to="tab33" tag="div"><el-menu-item index="4-3">上课笔记</el-menu-item></router-link>
        </el-menu-item-group>  
      </el-submenu>

      <router-link to="tab4" tag="div"><el-menu-item index="5" style="margin-top:25px">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item></router-link>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据中心</span>
        </template>
        <el-menu-item-group>
          <router-link to="tab5" tag="div"><el-menu-item index="6-1">数据概览</el-menu-item></router-link>
        </el-menu-item-group>  
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>运营管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="duoren" tag="div"><el-menu-item index="7-1">多人拼团</el-menu-item></router-link>
        </el-menu-item-group>  
      </el-submenu>

      <el-menu-item index="8">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>

      <el-menu-item index="9">
        <i class="el-icon-menu"></i>
        <span slot="title">登录账号管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </div>

  <div class="qq">
    <div>页面导航</div>
    <div>头像</div>
    <div>admin</div>
    <div>退出</div>
  </div>
  <div class="rout">
 <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
}
  
</script>

<style>
.rout{
  display: flex
}
.wer{
  display: flex
}
.qwe{
  width: 500px;
  
}
.el-menu>li{
  margin-top: 25px;
}
.qq{
  display: flex;
  background: white;
      width: 1200px;
    height: 64px;
    margin-left: -228px;
}
.qq>div:nth-of-type(1){
  color: #a5a4a4;
  line-height: 64px;
  margin-left: 10px
}
.qq>div:nth-of-type(2){
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: gray;
  font-size: 12px;
  color: white;
  line-height: 30px;
  text-align: center;
  margin-left: 900px;
  margin-top: 15px;
}
.qq>div:nth-of-type(3){
  font-size: 15px;
  line-height: 64px;
  margin-left: 20px;
  font-weight: 100
}
.qq>div:nth-of-type(4){
  font-size: 15px;
  line-height: 64px;
  margin-left: 20px;
  font-weight: 100
}
</style>