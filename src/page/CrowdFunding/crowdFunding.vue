<template>
    <el-main>
      <el-row class="crowdWarp" v-for="(item, i) in goodsList" :key="i">
        <el-row class="lmbWarp">
          <el-col :span="17" class="lmbLeftItem">
            <div class="grid-content bg-purple middleHeaderLeft">
              <div class="contentHeader">
                  <div>
                    <div class="contentHeaderBtn">{{item.title}}</div>
                    <span>预计开始挖矿时间</span>
                    <el-tag type="warning">{{item.dig_time}}</el-tag>
                  </div>
                  <div class="downTime" style="font-size:30px;right:80px;top:60px;" v-if="item.status===2">
                    团购结束
                  </div>
                  <div class="downTime" v-else>
                    <div class="downTime_title">
                      距离本轮团购结束时间还有
                    </div>
<!--                    <div class="downDate">-->
<!--                      <span style="font-size: 6em;">{{item.rest_day}}</span><span>天</span>-->
<!--                    </div>-->
                    <div class="daojishi">
                      <span>{{item.rest_day}}</span>天
                      <span>{{h}}</span>时
                      <span>{{m}}</span>分
                      <span>{{s}}</span>秒
                    </div>
                  </div>
              </div>
              <div class="contentMiddle">
                <div class="middleItem1">
                  <span>最低算力</span>
                  <el-tooltip content="该专区最低算力机型" placement="top">
                    <span class="el-icon-info"></span>
                  </el-tooltip>
                  <div>
                    <span>{{item.minimum_hashrate}}</span>TH / S
                  </div>
                </div>
                <div class="middleItem2">
                  <span>电费</span>
                  <el-tooltip content="根据设备功耗计算每日电费 " placement="top">
                    <span class="el-icon-info"></span>
                  </el-tooltip>
                  <div>
                    <span>{{item.electricity_cost}}</span> 元 / 天
                  </div>
                </div>
                <div class="middleItem3">
                  <el-tag>BTC</el-tag>
                  <span>来自BTC.com的理论收益</span>
                  <div>
                    <span>{{item.income}}</span> BTC / 月
                  </div>
                </div>
              </div>
              <div class="contentFooter">
                <i class="el-icon-star-on"></i>
                <span>每日净挖矿所得等于每日挖矿产出减去算力费和电费。</span>
              </div>
            </div>
          </el-col>
          <el-col :span="7" class="lmbRightItem">
            <div class="grid-content bg-purple-light middleHeaderRight">
<!--              <el-image-->
<!--                style="width: 300px; height: 180px"-->
<!--                src="../../../static/lmbImg/img20.png"-->
<!--                fit="fill"></el-image>-->
<!--              <div class="rightHeader">-->
<!--                <div style="font-size:80px">3</div>-->
<!--                <div class="rightHeaderItem">-->
<!--                  <div style="font-size:28px;margin-top:8px;">世代</div>-->
<!--                  <div style="font-size:20px;margin-bottom:16px;">矿机</div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div>- 蚂蚁矿机 L3++ <i class="el-icon-warning"></i>-</div>-->
            </div>
          </el-col>
        </el-row>
        <el-row v-if=item.goods class="lmbGoodsWarp">
          <el-col :span="6" class="goodsWarp" v-for="(item1, j) in item.goods" :key="j">
            <div class="goodItem">
              <div class="goodItemHead">
                <div style="padding-bottom: 13px">{{item1.description}}</div>
                <div style="font-size: 14px;">算力:{{item1.hashrate}} Th / s</div>
                <div class="hotBTn" :style="{'display':item1.on_sale===1 ? 'none':'block'}">抢光了</div>
              </div>
              <div>功耗:{{item1.electricity_consumption}} W</div>
              <div class="goodItemMiddle" style="font-size: 14px;">
                月化收益:{{item1.income}} BTC
              </div>
<!--活动代码-->
<!--              <div class="goodItemMiddle" style="font-size: 15px;text-decoration:line-through;" v-if="i == 0">-->
<!--                <span>团购价格:</span>-->
<!--                <span>24999.00</span>-->
<!--                <span>元</span>-->
<!--              </div>-->
<!--              <div class="goodItemMiddle" style="font-size: 15px;text-decoration:line-through;" v-if="i == 1">-->
<!--                <span>团购价格:</span>-->
<!--                <span>16560.00</span>-->
<!--                <span>元</span>-->
<!--              </div>-->
<!--              <div class="goodItemMiddle" style="font-size: 15px;text-decoration:line-through;" v-if="i == 2">-->
<!--                <span>团购价格:</span>-->
<!--                <span>13714.00</span>-->
<!--                <span>元</span>-->
<!--              </div>-->
<!--              <div class="goodItemMiddle" style="font-size: 15px;text-decoration:line-through;" v-if="i == 3">-->
<!--                <span>团购价格:</span>-->
<!--                <span>4516.00</span>-->
<!--                <span>元</span>-->
<!--              </div>-->
<!--活动代码-->
              <div class="goodItemMiddle" style="font-size: 14px;">
                <span v-if="item1.on_sale===1" style="color:red;font-weight:bold;font-size: 14px;">团购价格:</span>
                <span v-if="item1.on_sale===1" style="color:red;font-weight:bold;font-size: 20px;">{{item1.shop_price}}</span>
                <span v-if="item1.on_sale===1" style="color:red;font-weight:bold;font-size: 14px;">元<br></span>
                <span v-if="item1.on_sale!=1">团购价格:<span style="color:red;font-weight:bold">{{item1.shop_price}}</span>元</span>
              </div>
              <div class="goodItemFooter">
                <br>
                <el-progress :percentage=item1.rate  :format="format" style="width:182px"></el-progress>
                <el-button type="primary" :disabled="item1.on_sale===1? false: true" style="width:214px;margin-top:16px;" @click="openOrderList(item.share_activity_id, item1.goods_id)">
                  {{item1.on_sale===0? '即将补货': item1.on_sale===1?'立即抢购':'抢购结束'}}
                </el-button>
                <div class="goodItemFooterText">— {{item1.goods_name}} —</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-row>
    </el-main>
</template>

<script>
  import { goodsList, indexSEO } from '/api'

  export default {
    data () {
      return {
        goodsList: [], // 商品详情列表
        seoTitle: '',
        seoMateName: '',
        seoMateContent1: '',
        seoMateContent2: '',
        d: '',
        h: '',
        m: '',
        s: ''
      }
    },
    metaInfo () {
      return {
        title: this.seoTitle,
        meta: [{
          name: 'keyWords',
          content: this.seoMateContent1
        }, {
          name: 'description',
          content: this.seoMateContent2
        }]
      }
    },
    methods: {
      _indexSEO () {
        const scene = 2
        let params = {scene}
        const loading = this.$loading({
          text: '加载中',
          background: 'rgba(0, 0, 0, 0.7)',
          fullscreen: true,
          target: '.wrapper'
        })
        indexSEO(params).then(res => {
          loading.close()
          console.log(res)
          if (res.status === 200 && res.data.code === 1) {
            this.seoTitle = res.data.data.title
            this.seoMateContent1 = res.data.data.keywords
            this.seoMateContent2 = res.data.data.description
          } else {
            this.$message.error('网络赛车啦')
          }
        })
      },
      openOrderList (share_activity_id, goods_id) {
        this.$router.push({
          path: '/orderList',
          query: {
            share_activity_id: share_activity_id,
            goods_id: goods_id
          }
        })
      },
      format (percentage) {
        return percentage === 100 ? '售磐' : `已售${percentage}%`
      },
      _goodsList () {
        const loading = this.$loading({
          text: '加载中',
          background: 'rgba(0, 0, 0, 0.7)',
          fullscreen: true
        })
        const page = 1
        let params = {page}
        goodsList(params).then(res => {
          this._indexSEO()
          loading.close()
          if (res.status === 200 && res.data.code === 1) {
            this.goodsList = res.data.data
          } else {
            this.$message.error(res.data.msg)
          }
        })
      },
      countTime () {
        var date = new Date()//
        var now = date.getTime()
        var endDate = new Date('2100-1-1 23:59:59')
        var end = endDate.getTime()
        var leftTime = end - now
        if (leftTime >= 0) {
          this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
          this.m = Math.floor((leftTime / 1000 / 60) % 60)
          this.s = Math.floor((leftTime / 1000) % 60)
        }
        setTimeout(this.countTime, 1000)
      }
    },
    mounted () {
      this._goodsList()
      this.countTime()
    },
    created () {

    }
  }
</script>
<style>
  .el-progress__text{
    font-size: 12px!important;
    margin-left: 6px;
    text-align: center;
  }
</style>
<style scoped>
  /*众筹样式开始*/
  .crowdWarp{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 52px;
  }
  .lmbWarp{
    background-image: url("../../../static/lmbImg/LMBgoodsBg.png");
    background-size: 100% 100%;
    height: 200px;
    color: #ffffff;
    width: 1220px;
  }
  .lmbLeftItem{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .lmbRightItem{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .el-tag{
    height: auto;
    line-height: normal;
  }
  .middleHeaderLeft{

  }
  .middleItem1{
    padding-left: 5px;
    border-left:3px solid #ff5502;

  }
  .middleItem2{
    padding-left: 5px;
    border-left:3px solid #fcc676;
  }
  .middleItem3{
    padding-left: 5px;
    border-left:3px solid #29c07e;
  }
  .contentMiddle{
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .contentMiddle >div{
    width: 270px;
  }

  .middleHeaderRight{
    display: flex;
    flex-direction: column;
    align-items: center;
    color:rgba(60,58,60,1);
  }
  .rightHeader{
    display: flex;
  }
  .rightHeaderItem{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .contentHeader{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .contentHeaderBtn{
    width:50px;
    height:30px;
    background:rgba(255,255,255,1);
    border-radius:2px;
    display: inline-block;
    font-size:12px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(15,120,219,1);
    text-align: center;
    line-height: 30px;
  }
  .downTime{
    width:360px;
    height:200px;
    position: absolute;
    top:0px;
    right: 0px;
    color: black;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    padding: 10px;
  }
  .downTime_title{
    text-align: left;
    margin-top: 45px;
    margin-left: 20px;
    color: #2E6CB6;
  }
  .downTime span{
    display: inline-block;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 4px;
    color: red;
    font-size: 35px;
  }
  .downDate{
    margin-top: 45px;
  }
  .daojishi{
    width: 100%;
    height:35px;
    margin-top: 20px;
    color : #2E6CB6;
    font-size: 17px;
    color:#2E6CB6;
  }
  .daojishi span{
    width:45px;
    height: 35px;
    border-radius: 10px;
    background-color: #2E6CB6;
    color: #ffffff;
    line-height: 35px;
  }
  .lmbGoodsWarp{
    margin-top: 22px;
    width: 1220px;
  }
  .goodsWarp{
    display: flex;
    justify-content: center;
  }
  .goodItem{
    width:274px;
    height:320px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
  }
  .goodItemHead{
    height: 92px;
    width: 198px;
    /*border-bottom: 1px solid rgba(244,244,244,1);*/
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size:22px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(60,58,60,1);
    position: relative;
  }
  .hotBTn{
    width:80px;
    height:32px;
    background:rgba(245,84,84,1);
    opacity:0.94;
    font-size:14px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: 32px;
    padding-left: 16px;
    position: absolute;
    top: 13px;
    left: -50px;
  }
  .goodItemMiddle{
    width: 198px;
    height: 33px;
    /*border-bottom: 1px solid rgba(244,244,244,1);*/
    text-align: center;
    line-height: 66px;
    font-size:16px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(136,136,136,1);
  }
  .goodItemFooter{
    height: 147px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .el-progress-bar {
    padding-right: 65px;
    margin-right: -68px;
  }
  .goodItemFooterBtn{
    width:214px;
    height:42px;
    background:rgba(105,168,244,1);
    opacity:0.62;
    border-radius:2px;
    color: #ffffff;
    text-align: center;
    line-height: 42px;
    margin-top: 16px;
  }
  .goodItemFooterText{
    font-size:12px;
    font-family:PingFang SC;
    font-weight:300;
    color:rgba(153,153,153,1);
    margin-top: 19px;
  }
</style>
