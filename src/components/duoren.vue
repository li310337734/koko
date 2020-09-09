<template>
  <div class="ver">
    <el-table :data="api" style="width: 100%">
      <el-table-column prop="QuestionId" label="日期" width="180"></el-table-column>
      <el-table-column prop="Title" label="姓名" width="180"></el-table-column>
      <el-table-column prop="Content" label="地址"></el-table-column>
      <el-table-column prop="Prize" label="日期" width="180"></el-table-column>
      <el-table-column prop="CreateUserId" label="姓名" width="180"></el-table-column>
      <el-table-column prop="CreateUserName" label="地址"></el-table-column>
      <el-table-column prop="CreatedTime" label="日期" width="180"></el-table-column>
      <el-table-column prop="VisitCount" label="姓名" width="180"></el-table-column>
      <el-table-column prop="State" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: [
        {
          QuestionId: "",
          Title: " ",
          Content: "",
          Prize: "",
          CreateUserId: "",
          CreateUserName: "",
          CreatedTime: "",
          VisitCount: "",
          State: ""
        }
      ]
    };
  },
  created() {
    this.axios
      .get("http://47.111.250.151:8081/api/Question/GetQuestion")
      .then(gen => {
        this.api = gen.data.rows;
        console.log(this.api);
      });
  }
};
</script>

<style>
.ver {
  width: 1200px;
  height: 1080px;
  background: #f2f2f2;
  margin-left: -1200px
}
.ver-top {
  width: 100%;
  height: 55px;
  background: #fff;
}
.ver-nr span {
  color: #666666;
  margin-left: 15%;
  padding-left: 15px;
  line-height: 53px;
  border-left: 3px solid #ff8800;
}
.ver-center {
  width: 70%;
  height: 660px;
  background: #ffffff;
  margin-top: 10px;
  margin-left: 15%;
}
.el-tabs--top {
  padding: 15px 40px;
}
.el-tabs__item:hover {
  color: #666666;
  cursor: pointer;
}
.el-tabs__item.is-active {
  color: #ffffff;
  background: #ff8800 !important;
  border-radius: 5px 5px 0px 0px;
}
.el-tabs--card > .el-tabs__header {
  border-bottom: 2px solid #ff8800;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border-bottom: 0px solid transparent;
  border-left: 0px solid #e4e7ed;
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: 0px solid #e4e7ed;
}
#tob-second {
  border: 1px solid #e4e4e4 !important;
  border-radius: 5px 5px 0px 0px !important;
  background: #f2f2f2 !important;
}
.el-button--warning {
  width: 80px;
  height: 30px;
}
.el-button {
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 0px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button--warning {
  float: right;
  margin-top: -581px;
  margin-right: 330px;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-input__inner {
  width: 325px;
  height: 40px !important;
}
.el-input__icon {
  line-height: 40px !important;
}
.el-select .el-input__inner:focus {
  border-color: #ff8800;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #ff8800;
  color: #ffffff;
}
.el-input {
  margin: 15px 0px;
}
.wxts {
  margin-top: 70px;
}
</style>