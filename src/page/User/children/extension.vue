<template>
  <div>
    <y-shelf title="我的推广" style="margin-bottom: 10px;"></y-shelf>
    <el-main style="padding-top: 0px">
      <!--头部背景-->
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="invite-banner">
              <div class="banner-txt">
                <div class="banner-slogon">邀请奖励滚滚而来</div>
                <div class="sub-slogon">超优套餐送好友，雷猫积分返佣拿不停</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <!--邀请人数-->
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <div class="info-title">
              <div class="info-title__item"><span class="total-title">累计返佣金额</span>
                <mallki class-name="mallki-text" :text=add_up_coin class="rubik-medium" style="padding: 0;margin-bottom: -7px;"/>
                <span class="unit">雷猫积分</span>
              </div>
              <div class="info-title__item"><span>累计邀请人数</span>
                <mallki class-name="mallki-text" :text=direct_number class="rubik-medium" style="padding: 0;margin-bottom: -7px;"/>
                <el-button type="primary"  @click="tab">点击查看详情</el-button>
              </div>
              <div class="info-title__item info-title__item--current"><span>当前身份</span>
                <span class="measure-word rubik-medium">{{identity}}</span>
                <i class="el-icon-info" title="累计消费金额大于10万元即可升级为雷猫合伙人"></i>
              </div>
            </div>
          </div>
        </el-col>

      </el-row>

      <!--邀请链接-->
      <el-row style="background: #fafafa;">
        <el-col :span="19">
          <div class="my-link">
            <label style="font-size: 14px;">手机邀请链接(用手机打开)</label>
            <el-input v-model="inputMobile" placeholder="请输入内容" class="main-link-input" disabled :value=inputMobile id="test"></el-input>
            <el-button type="primary" @click="copyText(inputMobile)">复制</el-button>
          </div>
          <div class="my-link">
            <label style="font-size: 14px;">电脑邀请链接(用电脑打开)</label>
            <el-input v-model="inputPC" placeholder="请输入内容" class="main-link-input" disabled :value=inputPC id="test"></el-input>
            <el-button type="primary" @click="copyText(inputPC)">复制</el-button>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="main-link-img">
            <el-image
              style="width: 100px; height: 100px"
              :src="QRCodeUrl"
              fit="fill"></el-image>
          </div>
        </el-col>
      </el-row>

      <!--规则-->
<!--      <el-row style="background: #fafafa;">-->
<!--        <el-col :span="24">-->
<!--          <div class="intro">-->
<!--            <h3 class="rubik-medium">详细规则：</h3>-->
<!--            <p>被邀请者的使用邀请者链接成功注册并下单，邀请者可获得被邀请者首单算力费金额的百分比返佣，比例由邀请者的等级决定，每次返佣金额最高为$1000</p>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->

      <!--佣金-->
      <el-row class="withdraw-info">
        <el-col :span="12" class="withdraw-num">
          <div class="withdraw-num">
            <div class="invite-text hit-value">
              <label>可用雷猫积分：</label>
                <mallki class-name="mallki-text" :text=available class="rubik-medium" style="padding: 0;margin-bottom: -7px;"/>
            </div>
          </div>
        </el-col>
        <el-col :span="12" class="withdraw-num">
          <div class="inv-tips withdraw-btn">
            <el-button type="info" @click="clickTransferBtn">申请转账</el-button>
            <i class="el-icon-info" title="请确认转账人信息"></i>
          </div>
<!--          <div class="withdraw-right">-->
<!--            <label class="address-label">提币地址</label>-->
<!--            <el-button type="primary">+ 添加</el-button>-->
<!--          </div>-->
        </el-col>
      </el-row>

      <!--转账表格-->
      <el-dialog title="转账" :visible.sync="TransferAccounts" style="margin: 0 auto;text-align: center;width:70% ">
        <el-form :model="TransferAccountsArr" ref="TransferAccountsArr" class="demo-ruleForm">
          <!--总币-->
          <el-form-item label="总积分">
            <el-row style="font-size: 20px;color: #32374a;">{{TransferAccountsArr.totalB}}</el-row>
          </el-form-item>
          <!--不可转账积分-->
          <el-form-item label="不可转账积分">
            <el-row style="font-size: 20px;color: #32374a;">{{TransferAccountsArr.noUseB}}</el-row>
          </el-form-item>
          <!--转账手续费-->
          <el-form-item label="转账手续费">
            <el-row style="font-size: 20px;color: #32374a;">{{TransferAccountsArr.shouXuFei}}%</el-row>
          </el-form-item>
          <!-- 转账账户-->
          <el-form-item label="转账账户">
            <el-input v-model="TransferAccountsArr.account"></el-input>
          </el-form-item>
          <!-- 转账数量-->
          <el-form-item label="转账积分数量">
            <el-input v-model="TransferAccountsArr.number"></el-input>
          </el-form-item>
          <!--验证码-->
          <el-form-item label="验证码">
              <el-input v-model="TransferAccountsArr.qrCode" placeholder="请输入验证码" style="width:50%;" autocomplete="off"></el-input>
              <el-button type="info" @click="sendForgetCode" :disabled="sendCodeFlag === true" style="margin-left: 30px">{{sendCodeText}}</el-button>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer" style="text-align: center;">
          <el-button @click="TransferAccounts = false">取 消</el-button>
          <el-button type="primary"  @click="_transfer">确定转账</el-button>
        </div>
      </el-dialog>

      <!--返佣记录-->
      <el-row class="detail-list-container">
        <el-col :span="24">
          <el-tabs v-model="activeName">
            <!--返佣记录-->
            <el-tab-pane name="first">
              <span slot="label">返佣记录<i class="el-icon-info"></i></span>
              <RakeBackDataList :bonus_record=bonus_record></RakeBackDataList>
            </el-tab-pane>

            <!--转账记录-->
<!--            <el-tab-pane label="转账记录" name="second">-->
<!--              <RakeBackDataList></RakeBackDataList>-->
<!--            </el-tab-pane>-->
          </el-tabs>
        </el-col>

<!--        <el-col :span="24" class="main-info-wrap">-->
<!--          <img src="../../../assets/img/data.png" alt />-->
<!--          <div class="txt">暂无数据...</div>-->
<!--        </el-col>-->
      </el-row>
    </el-main>
  </div>
</template>

<script>
  import YShelf from '/components/shelf'
  import Mallki from '/components/Mallki'
  import RakeBackDataList from '/common/rakeBackDataList'
  import { myPopularize, transferConfig, transfer, sendCode } from '/api'
  import { getItem } from './../../../utils/newLocalStorage'

  export default {
    data () {
      return {
        sendCodeText: '获取验证码',
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        QRCodeUrl: '',
        activeName: 'first',
        inputPC: '', // PC端邀请链接
        inputMobile: '', // 移动端邀请链接
        identity: '',
        add_up_coin: 0, // 累计返佣雷猫积分
        direct_number: 0, // 累计邀请人数
        available: 0, // 可提佣金
        bonus_record: [], // 返佣记录
        TransferAccounts: false,
        // 转账
        TransferAccountsArr: {
          totalB: 0, // 总币
          noUseB: 0, // 不可转账币
          account: '', // 转账账户
          number: '', // 转账数量
          shouXuFei: 0, // 手续费
          qrCode: '' // 验证码
        },
        sendCodeFlag: false, // 发送验证码flag
        intervalId: 0 // 定时器
      }
    },
    methods: {
      // 发送转账短信
      sendForgetCode () {
        const mobile = parseInt(getItem('userIDPC'))
        const timestamp = Date.parse(new Date()) / 1000
        const scene = 9
        const sign = this.$md5(`${mobile}__${scene}__${timestamp}__elseleimaohasjer2860`)
        let params = {mobile, timestamp, scene, sign}
        const loading = this.$loading({
          text: '发送中',
          background: 'rgba(0, 0, 0, 0.7)',
          fullscreen: true,
          target: '.wrapper'
        })
        sendCode(params).then(res => {
          loading.close()
          if (res.status === 200 && res.data.code === 1) {
            this.sendCodeFlag = true
            this.sendCodeText = 60
            this.intervalId = setInterval(() => {
              this.sendCodeText--
            }, 1000)
            this.$message({
              message: '发送成功',
              type: 'success'
            })
          } else {
            this.$message.error(res.data.msg)
          }
        })
      },
      // 转账按钮点击
      clickTransferBtn () {
        this._transferConfig()
      },
      // 转账手续费配置
      _transferConfig () {
        const user_id = getItem('userIDPC')
        const timestamp = Date.parse(new Date()) / 1000
        const sign = this.$md5(`${user_id}__${timestamp}__elseleimaohasjer2860`)
        let params = {user_id, timestamp, sign}
        transferConfig(params).then(res => {
          if (res.status === 200 && res.data.code === 1) {
            this.TransferAccounts = true
            this.TransferAccountsArr.totalB = res.data.data.all_thundercat_coin
            this.TransferAccountsArr.noUseB = res.data.data.donot_transfer_thundercat_coin
            this.TransferAccountsArr.shouXuFei = res.data.data.transfer_fee
          } else {
            this.TransferAccounts = false
            this.$message.error(res.data.msg)
          }
        })
      },
      // 转账
      _transfer () {
        const user_id = getItem('userIDPC')
        const to_mobile = this.TransferAccountsArr.account
        const num = this.TransferAccountsArr.number
        const code = this.TransferAccountsArr.qrCode
        const timestamp = Date.parse(new Date()) / 1000
        const sign = this.$md5(`${user_id}__${to_mobile}__${num}__${code}__${timestamp}__elseleimaohasjer2860`)
        let params = {user_id, to_mobile, num, code, timestamp, sign}
        transfer(params).then(res => {
          if (res.status === 200 && res.data.code === 1) {
            console.log(res.data.data)
            this.$message({
              message: '转账成功',
              type: 'success'
            })
            this.TransferAccounts = false
            this._myPopularize()
          } else {
            this.$message.error(res.data.msg)
          }
        })
      },
      copyText (textValue) {
        const _this = this
        this.$copyText(textValue).then(function (e) {
          _this.$message({
            message: '复制成功',
            type: 'success'
          })
        }, function (e) {
          _this.$message.error('复制失败，请重试')
        })
      },
      _myPopularize () {
        const loading = this.$loading({
          text: '加载中',
          background: 'rgba(0, 0, 0, 0.7)',
          fullscreen: true
        })
        const user_id = getItem('userIDPC')
        const timestamp = Date.parse(new Date()) / 1000
        const sign = this.$md5(`${user_id}__${timestamp}__elseleimaohasjer2860`)
        let params = {user_id, timestamp, sign}
        myPopularize(params).then(res => {
          loading.close()
          if (res.status === 200 && res.data.code === 1) {
            console.log(res.data.data)
            this.inputPC = res.data.data.popularize_url_pc
            this.inputMobile = res.data.data.popularize_url_mobile
            this.QRCodeUrl = res.data.data.qr_code
            this.add_up_coin = res.data.data.add_up_coin === null ? 0 : res.data.data.add_up_coin
            this.direct_number = res.data.data.direct_number === null ? 0 : res.data.data.direct_number
            this.available = res.data.data.available === null ? 0 : res.data.data.available
            this.identity = res.data.data.identity
            this.bonus_record = res.data.data.bonus_record
          } else {
            this.$message.error(res.data.msg)
          }
        })
      },
      tab (e) {
        this.$router.push({path: '/user/myTeam'})
      }
    },
    mounted () {
      this._myPopularize()
    },
    created () {

    },
    watch: {
      sendCodeText (newName, oldName) {
        if (newName === 0) {
          clearInterval(this.intervalId)
          this.sendCodeText = '获取验证码'
          this.sendCodeFlag = false
        }
      }
    },
    components: {
      YShelf,
      Mallki,
      RakeBackDataList
    }
  }
</script>
<style>
  .el-form-item__content{
    display: flex;
  }
  .el-form-item__label{
    width: 120px;
  }
</style>
<style scoped>
  .invite-banner {
    background: #3c4156 url(//assets.bitdeer.cn/_nuxt/img/2f82b34.png) no-repeat;
    background-position: 133px -60px;
    height: 240px;
  }

  .invite-banner .banner-txt {
    margin-left: 30px;
    padding-top: 40px;
    max-width: 600px;
    color: #fff;
  }

  .invite-banner .banner-txt .banner-slogon {
    font-size: 32px;
    line-height: 50px;
  }

  .invite-banner .banner-txt .sub-slogon {
    font-size: 16px;
    margin-top: 20px;
    color: #b8bac0;
  }

  .info-title {
    height: 110px;
    line-height: 50px;
    padding: 30px 0;
    background: #fff;
    display: flex;
    align-items: center;
  }

  .info-title__item:first-child {
    padding-left: 30px;
    margin-right: 15px;
  }

  .info-title__item:nth-child(2) {
    width: 312px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    text-align: center;
  }

  .info-title__item:nth-child(3) {
    margin-left: 50px;
  }

  .total-title {
    margin-right: 10px;
  }

  .rubik-medium {
    font-size: 24px;
    font-weight: bold;
    padding: 0 18px;
    color: #000000;
  }
  .my-link{
    height: 80px;
    margin: 0 30px;
    /*border-bottom: 1px dotted #d8d8d8;*/
    display: flex;
    align-items: center;
  }
  label{
    font-size: 16px;
    color: #666;
  }
  .main-link-input{
    width: 448px;
    padding: 0 5px;
    margin: 0 5px;
  }
  .main-link-img{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
  }
  .intro{
    padding: 50px 30px;
    margin-bottom: 20px;
  }
  .intro h3{
    font-size: 16px;
    color: #3c4156;
    text-align: left;
    margin-bottom: 14px;
    font-weight: bold;
  }
  .withdraw-info{
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(4,4,4,.1);
    border-radius: 2px;
    padding: 30px;
    height: 98px;
    display: flex;
    margin-top: 20px;
  }
  .withdraw-num{
    display: flex;
    justify-content: center;
    align-items: center;
    /*border-right: 1px solid #d8d8d8;*/
  }
  .withdraw-right{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .detail-list-container{
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(4,4,4,.1);
    border-radius: 2px;
    margin-top: 20px;
    padding-left: 20px;
  }
  .main-info-wrap {
    min-height: 313px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
