<template>
  <el-row>
    <el-table v-if="!(bonus_record.length===0)"
      :data="bonus_record"
      style="width: 100%"
      height="400">
      <el-table-column
        prop="order_sn"
        label="订单号"
        sortable
        width="200">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="bonus_type_str"
        label="返佣类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="thundercat_coin"
        label="返佣积分"
        width="180">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="时间"
        sortable
        width="180">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="order_status"-->
<!--        label="订单状态"-->
<!--        width="180"-->
<!--        :filters="[-->
<!--      { text: '已成功', value: '已成功' },-->
<!--      { text: '已失败', value: '已失败' },-->
<!--      { text: '未付款', value: '未付款' },-->
<!--      ]"-->
<!--        :filter-method="filterTag"-->
<!--        filter-placement="bottom-end">-->
<!--        <template slot-scope="scope">-->
<!--          <el-tag-->
<!--            :type="scope.row.order_status === '已失败' ? 'danger' :-->
<!--           scope.row.order_status === '已成功' ? 'success':-->
<!--           scope.row.order_status === '未付款' ? 'info':''"-->
<!--            close-transition>{{scope.row.order_status}}</el-tag>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
    <el-row class="main-info-wrap" v-else>
      <img src="../assets/img/data.png" alt />
      <div class="txt">暂无数据...</div>
    </el-row>
  </el-row>
</template>

<script>
  export default {
    props: [
      'bonus_record'
    ],
    data () {
      return {
        orderId: this.bonus_record.type === 0 ? this.bonus_record.order_sn : this.bonus_record.ele_sn
      }
    },
    methods: {
      formatter (row, column) {
        return row.actual_price
      },
      filterTag (value, row) {
        return row.order_status === value
      }
    }
  }
</script>
<style scoped>
  .main-info-wrap {
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
