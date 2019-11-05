<template>
    <el-row class="PromotionRulesWarp">
      <el-row>
        <el-image
          style="width: 1220px; height: 1159px;"
          src="../../../static/extension/head.png"
          fit="fill"></el-image>
      </el-row>

      <el-row style="display: flex;flex-direction: column;align-items: center;margin-top: -157px;box-sizing: border-box;">
        <el-image
          style="width: 626px; height: 102px;z-index: 2"
          src="../../../static/extension/bt1.png"
          fit="fill"></el-image>
        <el-row class="bt1Warp">
          <el-row class="bt1Text1Warp" style="margin-top: 111px;">
            <el-row class="bt1TextCommon" style="margin-bottom: 29px">普通用户权益：</el-row>
            <el-row style="margin-bottom: 19px">1、可获得直接通过用户专属注册链接注册的用户订单金额分佣，分佣比例如下：</el-row>
            <el-row style="margin-bottom: 13px">① 矿机设备订单金额的<span style="color: #FE3E30">5%</span></el-row>
            <el-row>② 电费缴纳订单金额的<span style="color: #FE3E30">1%</span></el-row>
          </el-row>
          <el-row class="bt1Text1Warp" style="margin-top: 56px;">
            <el-row class="bt1TextCommon" style="margin-bottom: 29px">雷猫合伙人权益：</el-row>
            <el-row style="margin-bottom: 19px">1、可获得直接通过合伙人专属注册链接注册的用户订单金额分佣，分佣比例如下：</el-row>
            <el-row style="margin-bottom: 13px">① 矿机设备订单金额的<span style="color: #FE3E30">10%</span></el-row>
            <el-row>② 电费缴纳订单金额的<span style="color: #FE3E30">5%</span></el-row>

            <el-row style="margin-bottom: 19px;margin-top: 38px">2、可获得通过名下用户及合伙人的专属注册链接注册的用户订单金额分佣，分佣比例如下：</el-row>
            <el-row style="margin-bottom: 13px">① 矿机设备订单金额的<span style="color: #FE3E30">2%</span></el-row>
            <el-row>② 电费缴纳订单金额的<span style="color: #FE3E30">2%</span></el-row>
          </el-row>
          <el-row>
            <el-row style="display: flex;justify-content: center;align-items: center;position: relative;margin-top: 70px">
              <el-image
                style="width: 702px; height: 348px"
                src="../../../static/extension/fy1.png"
                fit="fill"></el-image>
              <el-row class="or1t">设备订单 10%</el-row>
              <el-row class="or2t">设备订单 2%</el-row>
              <el-row class="or3t">设备订单 5%</el-row>
            </el-row>
            <el-row style="display: flex;justify-content: center;align-items: center;position: relative;margin-top: 85px">
              <el-image
                style="width: 702px; height: 348px"
                src="../../../static/extension/fy2.png"
                fit="fill"></el-image>
              <el-row class="or1t">电费订单 5%</el-row>
              <el-row class="or2t">电费订单 2%</el-row>
              <el-row class="or3t">电费订单 1%</el-row>
            </el-row>
          </el-row>
        </el-row>

        <el-row style="display: flex;flex-direction: column;align-items: center;box-sizing: border-box;margin-top: 69px">
          <el-image
            style="width: 626px; height: 102px;z-index: 2"
            src="../../../static/extension/bt2.png"
            fit="fill"></el-image>
          <el-row class="bt2Warp">
            <el-row class="bt2TitleCommen">累计个人矿机设备订单金额<span style="color: #FFDB00">≥10W</span></el-row>
            <el-row>
              <el-row style="display: flex;align-items: center;margin-top: 62px;margin-bottom: 26px">
                <el-row class="titleYellow"></el-row>
                <el-row class="bt2TitleCommen">普通用户业绩量计算标准：</el-row>
              </el-row>
              <el-row>个人订单金额×100%＋通过用户专属注册链接注册的用户订单金额×100%</el-row>
            </el-row>

            <el-row>
              <el-row style="display: flex;align-items: center;margin-top: 62px;margin-bottom: 26px">
                <el-row class="titleYellow"></el-row>
                <el-row class="bt2TitleCommen">合伙人业绩量计算标准：</el-row>
              </el-row>
              <el-row style="width: 884px">个人订单金额×100%＋通过合伙人专属注册链接注册的用户订单金额×100%＋通过名下用户及合伙人的专属注册链接注册的用户订单金额×100%＋名下其他用户订单金额×10%</el-row>
            </el-row>

            <el-row style="height: 235px;display: flex;flex-direction: column;justify-content: space-between;margin-top: 50px">
              <el-row>例:</el-row>
              <el-row>A合伙人邀请B用户注册</el-row>
              <el-row>B用户邀请C用户注册</el-row>
              <el-row>C用户邀请D用户注册</el-row>
              <el-row>D用户邀请F用户注册</el-row>
              <el-row>则A合伙人的业绩量＝A的订单金额×100%＋B的订单金额×100%＋C的订单金额×100%＋D的订单</el-row>
              <el-row>金额×10%＋F的订单金额×10%......以此类推</el-row>
            </el-row>
          </el-row>
        </el-row>

        <el-row style="display: flex;flex-direction: column;align-items: center;box-sizing: border-box;margin-top: 64px">
          <el-image
            style="width: 626px; height: 102px;z-index: 2"
            src="../../../static/extension/bt3.png"
            fit="fill"></el-image>
          <el-row class="bt3Warp">
            <el-row style="font-size:26px;font-family:Source Han Sans CN;font-weight:bold;color:rgba(68,63,107,1);margin-bottom: 44px">普通用户权益：</el-row>
            <el-row>
              <el-row style="display: flex;align-items: flex-end;margin-bottom: 36px">
                <el-row class="blueNumber">1.</el-row>
                <el-row>雷猫商城全部成交金额的1%会注入奖池；</el-row>
              </el-row>
              <el-row style="display: flex;align-items: flex-end;margin-bottom: 36px">
                <el-row class="blueNumber">2.</el-row>
                <el-row>雷猫商城合伙人有权参与奖池瓜分</el-row>
              </el-row>
              <el-row style="display: flex;align-items: flex-end;margin-bottom: 36px">
                <el-row class="blueNumber">3.</el-row>
                <el-row>达成分阶段目标，即可享受阶段目标对应比例的奖池分红</el-row>
              </el-row>
              <el-row style="display: flex;align-items: flex-end;margin-bottom: 36px">
                <el-row class="blueNumber">4.</el-row>
                <el-row>完成更高阶段目标的合伙人，同样参与低阶段目标奖池分红</el-row>
              </el-row>
              <el-row style="display: flex;align-items: flex-end;">
                <el-row class="blueNumber">5.</el-row>
                <el-row>若分阶段目标无人达成，则该阶段对应奖池金额累计至下期活动</el-row>
              </el-row>
            </el-row>

            <el-row style="margin-top: 112px">
              <el-image
                style="width: 646px; height:502px;z-index: 2;margin-left: 202px"
                src="../../../static/extension/jzt2.png"
                fit="fill"></el-image>
              <el-row style="text-align: center;margin-left: -72px;margin-top: 28px;font-size:18px;
                    font-family:Source Han Sans CN;
                    font-weight:bold;
                    color:rgba(68,63,107,1);">总奖池=商城总营业额*1%</el-row>
              <el-row style="text-align: center;margin-left: -72px;font-size:18px;
                    font-family:Source Han Sans CN;
                    font-weight:bold;
                    color:rgba(68,63,107,1);">分阶段标准达成，即可享受奖池阶段分红</el-row>
            </el-row>


            <el-row style="margin-top: 108px;position: relative">
              <el-image
                style="width: 790px; height:526px;z-index: 2;margin-left:76px"
                src="../../../static/extension/jzt1.png"
                fit="fill"></el-image>
              <el-row style="text-align: center;margin-left: -72px;margin-top: 28px;font-size:18px;
                    font-family:Source Han Sans CN;
                    font-weight:bold;
                    color:rgba(68,63,107,1);">若A用户，活动期间业绩量为50W,商城总营业额为1000w,则奖池总金额为1000w*1%=10w</el-row>
              <el-row style="text-align: center;margin-left: -72px;font-size:18px;
                    font-family:Source Han Sans CN;
                    font-weight:bold;
                    color:rgba(68,63,107,1);">该用户可获得的奖池分红为：</el-row>
              <el-row style="text-align: center;margin-left: -72px;font-size:18px;
                    font-family:Source Han Sans CN;
                    font-weight:bold;
                    color:rgba(68,63,107,1);">（10w*20%÷1）+（10w*20%÷5）+（10w*20%÷10）+（10w*20%÷15）+（10w*20%÷20）≈2.8w</el-row>
              <el-row style="font-size:26px;font-family:Source Han Sans CN;font-weight:bold;color:rgba(10,158,254,1);
                    position: absolute;top: 0px;">例:</el-row>
            </el-row>
          </el-row>
        </el-row>

        <!--底部-->
        <el-row style="display: flex;flex-direction: column;align-items: center;box-sizing: border-box;margin-top: 64px">
          <el-image
            style="width: 626px; height: 102px;z-index: 2"
            src="../../../static/extension/bt4.png"
            fit="fill"></el-image>
          <el-row class="bt4Warp">
            <el-row class="bottomTextWarp">
              <el-row><span style="color: #FFDA00"> 1. </span>预缴本商城出售设备的电费</el-row>
              <el-row><span style="color: #FFDA00"> 2. </span>购买本商城的设备</el-row>
              <el-row><span style="color: #FFDA00"> 3. </span>转让给其他商城用户</el-row>
            </el-row>
            <el-image
              style="width: 148px; height: 210px;z-index: 2;margin: 0 auto;display: flex;margin-top: 149px;"
              src="../../../static/extension/kf.png"
              fit="fill"></el-image>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
</template>

<script>
    import { indexSEO } from '/api'
    export default {
      data () {
        return {
          seoTitle: '',
          seoMateName: '',
          seoMateContent1: '',
          seoMateContent2: ''
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
          const scene = 4
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
        }
      },
      mounted () {
        this._indexSEO()
      },
      created () {
        this._indexSEO()
      }
    }
</script>

<style scoped>
  .bottomTextWarp{
    height: 128px;
    width: 240px;
    margin: 0 auto;
    margin-top: 141px;
    font-size:18px;
    font-family: SourceHanSansCN-Bold;
    font-weight:bold;
    font-style:italic;
    color:#E4E0FF;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .blueNumber{
    font-size:20px;
    font-family:Impact;
    font-weight:bold;
    font-style:italic;
    color:rgba(10,158,254,1);
    margin-right: 15px;
  }
  .bt4Warp{
    width:1040px;
    height:658px;
    background: url("../../../static/extension/bg2.png");
    background-size: 100% 100%;
    margin-top: -50px;

  }
  .bt3Warp{
    width:1040px;
    height:1968px;
    background:rgba(255,255,255,1);
    border-radius:30px;
    margin-top: -51px;
    padding-left: 72px;
    padding-top: 119px;
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(68,63,107,1);
  }
  .or1t{
    position: absolute;
    width:70px;
    height:34px;
    font-size:17px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(68,63,107,1);
    left: 257px;
    text-align: center;
    top: 89px;
  }
  .or2t{
    position: absolute;
    width:70px;
    height:34px;
    font-size:17px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(68,63,107,1);
    right: 161px;
    text-align: center;
    top: 126px;
  }
  .or3t{
    position: absolute;
    width:70px;
    height:34px;
    font-size:17px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(68,63,107,1);
    left: 116px;
    text-align: center;
    bottom: 71px;
  }
  .bt2Warp{
    width:1050px;
    height:954px;
    background: url("../../../static/extension/bg1.png");
    background-size: 100% 100%;
    margin-top: -55px;
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(228,224,255,1);
    padding-left: 81px;
    padding-top: 118px;
  }
  .titleYellow{
    width:6px;
    height:22px;
    background:rgba(255,219,0,1);
    display: inline-block;
    margin-right: 6px;
  }
  .bt2TitleCommen{
    font-size:26px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(254,254,254,1);
  }
  .bt2TitleCommen{
    font-size:24px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(228,224,255,1);
  }
  .PromotionRulesWarp{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 6633px;
    background: rgb(75,56,216);
  }
  .bt1Warp{
    width:1040px;
    height:1586px;
    background:rgba(255,255,255,1);
    border-radius:30px;
    margin-top: -51px;
    font-size:20px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(68,63,107,1);
    box-sizing: border-box;
  }
  .bt1Text1Warp{
    padding-left: 73px;
  }
  .bt1TextCommon{
    font-size:26px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(68,63,107,1);
  }
</style>
