<template>
  <div>
    <el-row class="tableWarp">
      <el-row class="tableHeader"  v-if="order_list">
        <el-col :span="5" >排名</el-col>
        <el-col :span="9">账号</el-col>
        <el-col :span="9">累计贡献值</el-col>
        <el-col :span="9">预计瓜分雷猫积分<img style="line-height: 30px;position: relative;left:15px;top:5px;" src="/static/images/thunder_coin.png"/> </el-col>
      </el-row>
      <el-row class="tableHeader" v-if="all_team_order">
        <el-col :span="12">账号</el-col>
        <el-col :span="12">累计贡献值</el-col>
      </el-row>

      <!--没数据的时候-->
      <el-row v-show="order_list.length===0" v-if="order_list">
        <el-row v-for="(item,index) in 10"
                :key="index">
          <el-row class="tableHeader tableList"
                  :style="{'background': (index%2==0 ? 'rgb(2,25,70)':'')}">
            <el-col :span="5">{{index+1}}</el-col>
            <el-col :span="9"></el-col>
            <el-col :span="9"></el-col>
            <el-col :span="9"></el-col>
          </el-row>
        </el-row>
      </el-row>

      <!--有数据的时候-->
      <el-row v-show="!(order_list.length===0)" v-if="order_list">
        <el-row v-for="(item,index) in order_list"
                :key="index">
          <el-row class="tableHeader tableList"
                  :style="{'background': (index%2==0 ? 'rgb(2,25,70)':'')}">
            <el-col :span="5">{{item.rank}}</el-col>
            <el-col :span="9">{{item.mobile}}</el-col>
            <el-col :span="9">{{item.all_results}}</el-col>
            <el-col :span="9">{{item.get_thundercat_coin}}</el-col>
          </el-row>
        </el-row>
      </el-row>

      <!--没数据的时候-->
      <el-row v-show="all_team_order.length===0" v-if="all_team_order">
        <el-row v-for="(item,index) in 2" :key="index">
          <el-row class="tableHeader tableList" :style="{'background': (index%2==0 ? 'rgb(2,25,70)':'')}">
            <el-col :span="12"></el-col>
            <el-col :span="12"></el-col>
          </el-row>
        </el-row>
      </el-row>

      <!--有数据的时候-->
      <el-row v-show="!(all_team_order.length===0)" v-if="all_team_order">
        <el-row v-for="(item,index) in all_team_order" :key="index">
          <el-row class="tableHeader tableList" :style="{'background': (index%2==0 ? 'rgb(2,25,70)':'')}">
            <el-col :span="12">{{item.mobile}}</el-col>
            <el-col :span="12">{{item.self_result}}</el-col>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <!--    <div class="championFooter">-->
    <!--      <div class="footerBtn">查看更多</div>-->
    <!--    </div>-->
  </div>

</template>

<script>
export default {
  props: {
    order_list: Array,
    flag: Boolean,
    all_team_order: Array
  },
  created () {
    console.log(this.order_list)
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>
<style>
.tableWarp {
  width: 810px;
}
.tableHeader {
  height: 38px;
  background: rgba(139, 105, 68, 0.43);
  display: flex;
  line-height: 38px;
  text-align: center;
}
.tableHeader .el-col {
  font-size: 19px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    0deg,
    rgba(247, 207, 141, 1) 0%,
    rgba(238, 234, 207, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tableList {
  height: 45px;
  background: rgba(4, 31, 87, 1);
  opacity: 0.9;
}
.tableListBg {
  background: rgb(2, 25, 70);
}
.championFooter {
  background: rgb(2, 25, 70);
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footerBtn {
  width: 235px;
  height: 40px;
  background: linear-gradient(
    0deg,
    rgba(247, 207, 141, 1),
    rgba(238, 234, 207, 1)
  );
  border-radius: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(2, 24, 70, 1);
}
/*td,th.is-leaf{*/
/*  border-bottom: 0px solid #EBEEF5;*/
/*}*/
/*.el-table tr {*/
/*  background: rgba(2,25,70,1)*/
/*}*/
/*.el-table th{*/
/*  background: rgba(61,60,69,1)!important;*/
/*}*/
/*.el-table--enable-row-hover .el-table__body tr:hover>td{*/
/*  background: rgba(2,25,70,1);*/
/*}*/
/*.el-table--striped .el-table__body tr.el-table__row--striped td{*/
/*  background: rgba(4,31,87,1)*/
/*}*/
/*.el-table::before {*/
/*  height: 0;*/
/*}*/
</style>
