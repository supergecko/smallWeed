<template>
  <el-row class="CalculatorWarp">
    <el-row class="TitleCommon">Bitcoin（BTC） 挖矿收益计算器</el-row>
    <!--全网数据-->
    <el-row :gutter="15" style="width: 1220px;margin: 0 auto">
      <el-row class="TitleCommon" style="text-align: left;margin-left: 10px;margin-bottom: 35px;">全网数据</el-row>

      <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
        <div style="border: 1px solid #2c3e50;border-radius: 4px;">
          <el-row class="input1Header">全网算力</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="Bitcoin.nethash" :disabled="true">
              <template slot="append">PH/s</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
        <div style="border: 1px solid #2c3e50;border-radius: 4px;">
          <el-row class="input1Header">当前难度</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="Bitcoin.difficulty" :disabled="true">
              <template slot="append">GH</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
        <div style="border: 1px solid #2c3e50;border-radius: 4px;">
          <el-row class="input1Header">出块时间</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="Bitcoin.block_time" :disabled="true">
              <template slot="append">秒</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
        <div style="border: 1px solid #2c3e50;border-radius: 4px;">
          <el-row class="input1Header">区块奖励</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="Bitcoin.block_reward" :disabled="true">
              <template slot="append">BTC</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
        <div style="border: 1px solid #18bc9c;border-radius: 4px;">
          <el-row class="input1Header" style="background-color: #18bc9c;border-color: #18bc9c;">参考币价</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="getBTCPrice">
              <template slot="prepend">￥</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4">
        <div style="border: 1px solid #18bc9c;border-radius: 4px;">
          <el-row class="input1Header" style="background-color: #18bc9c;border-color: #18bc9c;">矿池费率</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="Bitcoin.pool_rate">
              <template slot="append">％</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <!--我的数据-->
    <el-row :gutter="15" style="width: 1220px;margin: 0 auto">
      <el-row class="TitleCommon" style="text-align: left;margin-left: 10px;margin-bottom: 35px;">我的数据</el-row>

      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div style="border: 1px solid #3498db;border-radius:4px;">
          <el-row class="input1Header" style="background-color: #3498db;border-color: #3498db;">我的算力</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="my_hashrate">
              <template slot="append">TH/s</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div style="border: 1px solid #3498db;border-radius: 4px;">
          <el-row class="input1Header" style="background-color: #3498db;border-color: #3498db;">我的功耗</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="my_power">
              <template slot="append">W</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div style="border: 1px solid #3498db;border-radius: 4px;">
          <el-row class="input1Header" style="background-color: #3498db;border-color: #3498db;">每度电价</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="power_price">
              <template slot="prepend">￥</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
        <div style="border: 1px solid #3498db;border-radius: 4px;">
          <el-row class="input1Header" style="background-color: #3498db;border-color: #3498db;">设备成本</el-row>
          <el-row style="padding: 15px;background: #ffffff">
            <el-input placeholder="请输入内容" v-model="device_price">
              <template slot="prepend">￥</template>
            </el-input>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <el-row class="resultWarp">
      <el-row>
        <el-row class="TitleCommon" style="text-align: left;margin-left: 10px;margin-bottom: 35px;display: inline-block">计算结果</el-row>
        <el-row style="display: inline-block;float: right;margin-top: 63px;font-weight: bold;">回本时间：{{formayDay(MyCoverTime())}}</el-row>
      </el-row>

      <el-row style="margin-bottom:100px">
        <table style="width: 100%;text-align: center;" cellspacing="0">
          <thead>
          <th></th>
          <th>总收益（币）</th>
          <th>总收益（￥）</th>
          <th>耗电量（度）</th>
          <th>电费（￥）</th>
          <th>净收益（￥）</th>
          </thead>

          <tbody>
          <tr style="background-color: #f9f9f9;">
            <td><b>每日</b></td>
            <td>{{MyAwardDay(1)}}</td>
            <td>￥{{(parseFloat(MyAwardDay(1) ) * getBTCPrice).toFixed(2)}}</td>
            <td>{{parseFloat(MyPowerDay(1)).toFixed(2)}}°</td>
            <td>￥{{(parseFloat(MyPowerDay(1)) * power_price).toFixed(2)}}</td>
            <td>￥{{MyProfitDay(1).toFixed(2)}}</td>
          </tr>
          <tr>
            <td><b>每周</b></td>
            <td>{{MyAwardDay(7)}}</td>
            <td>￥{{(parseFloat(MyAwardDay(7) ) * getBTCPrice).toFixed(2)}}</td>
            <td>{{parseFloat(MyPowerDay(7)).toFixed(2)}}°</td>
            <td>￥{{(parseFloat(MyPowerDay(7)) * power_price).toFixed(2)}}</td>
            <td>￥{{MyProfitDay(7).toFixed(2)}}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td><b>每月</b></td>
            <td>{{MyAwardDay(30)}}</td>
            <td>￥{{(parseFloat(MyAwardDay(30) ) * getBTCPrice).toFixed(2)}}</td>
            <td>{{parseFloat(MyPowerDay(30)).toFixed(2)}}°</td>
            <td>￥{{(parseFloat(MyPowerDay(30)) * power_price).toFixed(2)}}</td>
            <td>￥{{MyProfitDay(30).toFixed(2)}}</td>
          </tr>
          <tr>
            <td><b>每年</b></td>
            <td>{{MyAwardDay(365)}}</td>
            <td>￥{{(parseFloat(MyAwardDay(365) ) * getBTCPrice).toFixed(2)}}</td>
            <td>{{parseFloat(MyPowerDay(365)).toFixed(2)}}°</td>
            <td>￥{{(parseFloat(MyPowerDay(365)) * power_price).toFixed(2)}}</td>
            <td>￥{{MyProfitDay(365).toFixed(2)}}</td>
          </tr>
          </tbody>
        </table>
      </el-row>


    </el-row>
  </el-row>

</template>

<script>
  import { calculator } from '/api/index'
  const HashDefine = ['H', 'KH', 'MH', 'GH', 'TH', 'PH']
  export default {
    data () {
      return {
        Bitcoin: {}, // BTC相关信息
        getBTCPrice: 0,
        GPUDevices: [], //
        hashrate: 0, // 算力值
        my_hashrate_kspan: 0,
        my_hashrate: 0, // 我的算力
        my_power: 0, // 我的功耗
        power_price: 0, // 我的电费
        device_price: 2, // 设备成本
        ReturnTime: 0 // 回本时间
      }
    },
    methods: {
      // 加载计算器相关信息
      _calculator () {
        let params = {}
        const loading = this.$loading({
          text: '加载中',
          background: 'rgba(0, 0, 0, 0.7)',
          fullscreen: true,
          target: '.wrapper'
        })
        calculator(params).then(res => {
          if (res.status === 200 && res.data.code === 1) {
            this.hashrate = res.data.data.GPUDevices[0]['SHA-256_h']
            this.my_hashrate = this.formatHashRate1(this.hashrate)
            this.my_hashrate_kspan = this.calcKSpan(this.hashrate)
            this.my_power = res.data.data.GPUDevices[0]['SHA-256_p']
            this.power_price = res.data.data.power_price // 电费
            this.device_price = res.data.data.GPUDevices[0].price
            this.Bitcoin = res.data.data.Bitcoin
            this.getBTCPrice = res.data.data.cny_price
            loading.close()
          } else {
            loading.close()
            this.$message.error('网络赛车啦')
          }
        })
      },
      formayDay (day) {
        const month = parseInt(day / 30)
        day = parseInt(day % 30)
        if (month === 0) {
          return day + '天'
        } else {
          return month + '月' + day + '天'
        }
      },
      // 当日收益算法(币)
      MyAwardDay (day) {
        const coinInfo = this.Bitcoin
        const awardDay = (coinInfo.block_reward / coinInfo.block_time) * 3600 * 24
        return ((awardDay * this.my_hashrate * Math.pow(10, this.my_hashrate_kspan * 3)) / coinInfo.nethash * day * (100 - coinInfo.pool_rate) / 100).toFixed(6)
      },
      calcKSpan (h) {
        let k = 0
        while (h > 10000) {
          k++
          h = parseInt(h / 1000)
        }
        return k
      },
      formatHashRate1 (h, c) {
        if (!h) {
          return
        }
        h = parseFloat(h)
        if (c === undefined) {
          c = 0
        }
        let k = 0
        while (h > 10000) {
          k++
          h = h / 1000
          if (!(HashDefine[k + 1])) {
            break
          }
        }
        return h.toFixed(c)
      },
      MyCoverTime () {
        if (this.device_price === '') {
          return 0
        }
        if (this.MyProfitDay(1) === 0) {
          return 0
        }
        return (parseFloat(this.device_price) / parseFloat(this.MyProfitDay(1)))
      },
      MyProfitDay (day) {
        if (this.power_price === '' || this.getBTCPrice === '') {
          return 0
        }
        if (this.power_price === '') {
          return parseFloat(this.MyAwardDay(day)) * parseFloat(this.getBTCPrice) - parseFloat(this.MyPowerDay(day)) * 0
        }
        if (this.getBTCPrice === '') {
          return parseFloat(this.MyAwardDay(day)) * 0 - parseFloat(this.MyPowerDay(day)) * parseFloat(this.power_price)
        }
        return parseFloat(this.MyAwardDay(day)) * parseFloat(this.getBTCPrice) - parseFloat(this.MyPowerDay(day)) * parseFloat(this.power_price)
      },
      MyPowerDay (day) {
        if (this.my_power === '') {
          return 0
        }
        return parseFloat(this.my_power) * 24 / 1000 * day
      }
    },
    mounted () {
      this._calculator()
    },
    created () {
      this._calculator()
    }
  }
</script>
<style>
  .el-input.is-disabled .el-input__inner {
    color: black;
  }
</style>
<style scoped>
  .resultWarp{
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
    color: #2c3e50;
    width: 1220px;
    margin: 0 auto;
  }
  .CalculatorWarp{
    background: #ffffff;
  }
  .TitleCommon{
    font-size: 32px;
    margin-top: 63px;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    color: inherit;
    text-align: center;
  }
  .input1Header{
    color: #ffffff;
    background-color: #2c3e50;
    border-color: #2c3e50;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    font-size: 17px;
  }
  table > thead > th,table > tbody > tr > td{
    padding: 8px;
    vertical-align: top;
    border: none;
  }
</style>
