<template>
  <div class="zjn">
     
      <div class="mkz">
          <div><img src="/img/01.png"/></div>
          <div>订单统计</div>
          <div class="csg">
              <div class="fdo">
                  <div class="hyf">
                    <div>本月订单总数</div>
                    <div>4320</div>
                    <div class="pkl">
                        <div>10%</div>
                        <div>同比上月</div>
                    </div>
                  </div>
                  <div class="hyf2">
                    <div>本月订单总数</div>
                    <div>342</div>
                    <div class="pkl2">
                        <div>10%</div>
                        <div>同比上周</div>
                    </div>
                  </div>
              </div>
              <div class="bsg">
                <div style="margin-left:20px;"><ve-line :data="chartData" style="width:600px" :settings="chartSettings"></ve-line></div>
              </div>
          </div>
      </div>  
  </div>
</template>

<script>
export default {
 data() {
    this.chartSettings = {
      area: true
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393},
          { '日期': '1/2', '访问用户': 3530},
          { '日期': '1/3', '访问用户': 2923},
          { '日期': '1/4', '访问用户': 1723},
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593}
        ]
      },
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
.bsg{
    height: 350px;
    width: 900px;
    border: 1px solid #d0cccc
}
.pkl{
    display: flex
}
.pkl>div:nth-of-type(1){
    color: #1bd21b;
    font-size: 12px
}
.pkl>div:nth-of-type(2){
    color: #a5a5a5;
    margin-left: 10px;
    font-size: 12px
}
.hyf{
    margin-left: 60px;
    margin-top: 30px
}
.hyf>div:nth-of-type(1){
    font-size: 12px;
    color:#a5a5a5;
}
.hyf>div:nth-of-type(2){
    color:#4e4e4e;
    font-size: 22px
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
.mkz{
    width: 1200px;
    height: 590px;
    background: white;
    margin-top: 20px;
    padding-top: 30px
}
.mkz>div:nth-of-type(1){
    margin-left: 40px;
}
.mkz>div:nth-of-type(2){
    margin-left: 40px;
    margin-top: 20px;
    font-weight: 100;
}
.csg{
    display: flex;
    margin-left:40px;
    margin-top: 20px
}
.fdo{
    width: 200px;
    height: 350px;
    border: 1px solid #d0cccc
}
.hyf2{
    margin-top: 50px;
    margin-left: 60px
}
.hyf2>div:nth-of-type(1){
    font-size: 12px;
    color:#a5a5a5;
}
.hyf2>div:nth-of-type(2){
    color:#4e4e4e;
    font-size: 22px
}
.pkl2{
    display: flex
}
.pkl2>div:nth-of-type(1){
    color: #d21b1b;
    font-size: 12px
}
.pkl2>div:nth-of-type(2){
    color: #a5a5a5;
    margin-left: 10px;
    font-size: 12px
}
</style>