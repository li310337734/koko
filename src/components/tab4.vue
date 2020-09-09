<template>
  <div class="zjn">
      <div class="erw">
          <div><el-input v-model="input" placeholder="订单编号"></el-input></div>
          <div><el-input v-model="input" placeholder="手机号"></el-input></div>
          <div><el-button type="primary">查询</el-button></div>
          <div><el-button plain>重置</el-button></div>
      </div>
      <div class="mkl">
          <div><el-button type="primary">+添加上课笔记</el-button></div>
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
      label="订单编号"
      width="130">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="购买时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="shijian"
      label="手机号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="gb"
      label="购买课程"
      width="100">
    </el-table-column>
    <el-table-column
      prop="qw"
      label="订单金额"
      width="100">
    </el-table-column>
    <el-table-column
      prop="ww"
      label="实付金额"
      width="100">
    </el-table-column>
    <el-table-column
      prop="rt"
      label="订单状态"
      width="100">
    </el-table-column>
    <el-table-column
      prop="df"
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
          date: '201909091299',
          name: '2019-09-09 12：09:09',
          address: '姓名',
          shichang:'学生',
          zhangjie:'河南大学',
          jiangshi:'感言........',
          leixin:'综合素质',
          renshu:'期待',
          shijian:'手机号',
          gb:'综合素质',
          qw:'10.00',
          ww:'10.00',
          rt:'交易成功'
        }, {
          date: '201909091299',
          name: '2019-09-09 12：09:09',
          address: '姓名',
          shichang:'学生',
          zhangjie:'河南大学',
          jiangshi:'感言........',
          leixin:'教育教学能力',
          renshu:'期待',
          shijian:'手机号',
          gb:'综合素质',
          qw:'10.00',
          ww:'10.00',
          rt:'交易成功'
        }, {
          date: '201909091299',
          name: '2019-09-09 12：09:09',
          address: '姓名',
          shichang:'学生',
          zhangjie:'河南大学',
          jiangshi:'感言........',
          leixin:'综合素质',
          renshu:'期待',
          shijian:'手机号',
          gb:'综合素质',
          qw:'10.00',
          ww:'10.00',
          rt:'交易成功'
        }, {
          date: '201909091299',
          name: '2019-09-09 12：09:09',
          address: '姓名',
          shichang:'学生',
          zhangjie:'河南大学',
          jiangshi:'感言........',
          leixin:'综合素质',
          renshu:'期待',
          shijian:'手机号',
          gb:'综合素质',
          qw:'10.00',
          ww:'10.00',
          rt:'交易成功'
        }, {
          date: '201909091299',
          name: '2019-09-09 12：09:09',
          address: '姓名',
          shichang:'学生',
          zhangjie:'河南大学',
          jiangshi:'感言........',
          leixin:'综合素质',
          renshu:'期待',
          shijian:'手机号',
          gb:'综合素质',
          qw:'10.00',
          ww:'10.00',
          rt:'交易成功'
        }, {
          date: '201909091299',
          name: '2019-09-09 12：09:09',
          address: '姓名',
          shichang:'学生',
          zhangjie:'河南大学',
          jiangshi:'感言........',
          leixin:'综合素质',
          renshu:'期待',
          shijian:'手机号',
          gb:'综合素质',
          qw:'10.00',
          ww:'10.00',
          rt:'交易成功'
        }, {
          date: '201909091299',
          name: '2019-09-09 12：09:09',
          address: '姓名',
          shichang:'学生',
          zhangjie:'河南大学',
          jiangshi:'感言........',
          leixin:'综合素质',
          renshu:'期待',
          shijian:'手机号',
          gb:'综合素质',
          qw:'10.00',
          ww:'10.00',
          rt:'交易成功'
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