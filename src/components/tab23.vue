<template>
  <div class="zjn">
      <div class="erw">
          <div><el-input v-model="input" placeholder="查询"></el-input></div>
          
          <div><el-button type="primary">查询</el-button></div>
          <div><el-button plain>重置</el-button></div>
      </div>
      <div class="mkl">
          <div><el-button type="primary">+添加模拟试卷</el-button></div>
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
      label="模拟试卷ID"
      width="180">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="moni"
      label="模拟试卷名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="shijian"
      label="添加时间"
      width="350">
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
          label: '2019考试大纲'
        }, {
          value: '选项2',
          label: '2018考试大纲'
        }, {
          value: '选项3',
          label: '2017考试大纲'
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
          shijian:'2017-07-19',
          nianfen:'2019年',
          moni:'试卷（一）'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'教育教学能力',
          renshu:'123',
          shijian:'2017-07-19',
          nianfen:'2019年',
          moni:'试卷（一）'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19',
          nianfen:'2019年',
          moni:'试卷（一）'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19',
          nianfen:'2019年',
          moni:'试卷（一）'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19',
          nianfen:'2019年',
          moni:'试卷（一）'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19',
          nianfen:'2019年',
          moni:'试卷（一）'
        }, {
          date: '2019999',
          name: '教学规',
          address: '图片',
          shichang:'20小时',
          zhangjie:'98小结',
          jiangshi:'王昭君',
          leixin:'综合素质',
          renshu:'123',
          shijian:'2017-07-19',
          nianfen:'2019年',
          moni:'试卷（一）'
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
      },
       handleDelete(handleSelectionChange,i){
        this.tableData.splice(i,1);
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