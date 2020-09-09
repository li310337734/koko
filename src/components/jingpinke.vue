<template>
  <div class="zjn">
      <div class="erw">
          <div><el-input v-model="input" placeholder="课程ID/名称"></el-input></div>
          <div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
              </el-select>
          </div>
          <div><el-button type="primary">查询</el-button></div>
          <div><el-button plain>重置</el-button></div>
      </div>
      <div class="mkl">
          <div><el-button type="primary">+添加课程</el-button></div>
          <div class="biaoge1">
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="课程ID"
      width="100">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="课程名称"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      label="课程图片"
       width="100"
      show-overflow-tooltip>
    </el-table-column>
   <el-table-column
      prop="shichang"
      label="课程时长"
      width="100">
    </el-table-column>
    <el-table-column
      prop="zhangjie"
      label="课程章节"
      width="100">
    </el-table-column>
    <el-table-column
      prop="jiangshi"
      label="讲师"
      width="100">
    </el-table-column>
    <el-table-column
      prop="leixin"
      label="课程类型"
      width="110">
    </el-table-column>
    <el-table-column
      prop="renshu"
      label="在学人数"
      width="100">
    </el-table-column>
    <el-table-column
      prop="mianfei"
      label="是否免费"
      width="100">
      <template scope="scope">
      <el-switch
          on-text ="是"
          off-text = "否"
          on-color="#5B7BFA"
          off-color="#dadde5"
          v-model="scope.row.menusstate" 
          @change=change(scope.$index,scope.row)                
          >
      </el-switch>
      </template>
    </el-table-column>
    <el-table-column
      prop="shijian"
      label="添加时间"
      width="100">
    </el-table-column>
    <el-table-column
      prop="caozuo"
      label="操作"
      width="125">
      <template slot-scope="scope">
              <span
                size="mini"
                style="color:#5454e6;cursor:pointer"
                @click="handleEdit(scope.$index, scope.row)">查看</span>
              <span
                size="mini"
                style="margin-left:5px;color:#5454e6;cursor:pointer"
                @click="handleEdit(scope.$index, scope.row)">编辑</span>
              <span
                size="mini"
                style="margin-left:5px;color:#5454e6;cursor:pointer"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</span>
            </template>
    </el-table-column>
  </el-table>
   </div>
    </div>  
  </div>
</template>

<script>
export default {
 data() {
    return {
      input: '',
      options: [{
          value: '选项1',
          label: '课程类型'
        }, {
          value: '选项2',
          label: '综合素质'
        }, {
          value: '选项3',
          label: '教育教学能力'
        }],
        tableData: [{
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'教育教学能力',
          renshu:'123',
          shijian:'2017-07-19'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19'
        }],
        value: '',
        multipleSelection: []
    }
  },
  methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

<style>
.zjn{
  margin-top: 87px;
    margin-left: -1200px;
}
.biaoge1{
  margin-top: 30px;
}
.mkl>div:nth-of-type(1)>button{
    height: 10px;
    line-height:2px;
    margin-top: 20px;
    margin-left: 20px
}
.erw{
    width: 1200px;
    height: 64px;
    background: white;
    display: flex;
   
}
.erw>div:nth-of-type(1){
    line-height: 64px;
    margin-left: 150px;
}
.erw>div:nth-of-type(2){
    margin-left: 20px;
    line-height: 64px
}
.erw>div:nth-of-type(3){
    margin-left: 20px;
    line-height: 64px
}
.erw>div:nth-of-type(4){
    margin-left: 20px;
    line-height: 64px
}
.mkl{
    width: 1200px;
    height: 558px;
    background: white;
    margin-top: 20px
}
</style>