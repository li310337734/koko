<template>
  <div class="zjn">
      <div class="erw">
          <div class="sk"><el-input v-model="input" placeholder="查询"></el-input></div>
          <div class="sk">
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
          <div><el-button type="primary" @click="add()">+添加考试大纲</el-button></div>
          <div class="biaoge1">
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
   >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
   
    <el-table-column
      prop="id"
      label="id"
      width="300">
    </el-table-column>
    <el-table-column
      prop="professionalName"
      label="professionalName"
      width="350">
    </el-table-column>
     <el-table-column
      prop="professionalDesc"
      label="professionalDesc"
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
                @click="handleEdits(scope.$index, scope.row)">查看</span>
              <span
                size="mini"
                style="margin-left:5px;color:#5454e6;cursor:pointer"
                @click="handleEdit(scope.row)">编辑</span>
              <span
                size="mini"
                style="margin-left:5px;color:#5454e6;cursor:pointer"
                type="danger"
                @click="handleDelete(scope.row.id)">删除</span>
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
        tableData: [],
        value: '',
        multipleSelection: []
    }
  },
  created() {
    this.axios.get("http://139.9.169.87:8081/examsystem/getProfessionalNoPage")
    .then(res=>{
     console.log(res);
      
      this.tableData=res.data.data
    })
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
       handleDelete(ida){
           this.axios.get("http://139.9.169.87:8081/examsystem/deleteProfessional",{
             params:{
               id:ida
             }
           })
    .then(res=>{
     console.log(res);
      location.reload()
     
    })
      },
      add(){
        this.$router.push({
          path:"/jiji"
        })
      },
      handleEdit(ids){
        console.log(ids)
         this.$router.push({
          name:"bibi",
          params:{cc:ids}
        })
      }
    }
 
}
</script>

<style>
.sk{
  margin-top: -15px
}
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