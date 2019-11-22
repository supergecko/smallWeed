<template>
  <div class="bottom">
    <div class="content">
      <el-col :span="5">
        <div class="name">Thunder Cat</div>
        <div class="copyright">Copyright © 2019 Thunder Cat All Rights Reserved</div>
        <div class="iconLink">
          <a class="iconfont icon-qq-copy-copy"></a>
          <a class="iconfont icon-logo-wechat"></a>
        </div>
      </el-col>
      <el-col :span="10">
        <el-col :span="6">
          <div class="title">产品</div>
          <div class="link">
            <span>
              <router-link class="router-link" to="/crowdFunding">矿机购买</router-link>
            </span>
          </div>
          <div class="link">
            <span>
              <router-link class="router-link" to="/Calculator">收益计算器</router-link>
            </span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="title">信息</div>
          <div class="link">
            <!---->
            <span href="#"
                  class>
              <router-link to="/aboutUs">关于我们</router-link>
            </span>
          </div>
          <div class="link">
            <!---->
            <span href="#"
                  class>
              <router-link to="/news">新闻</router-link>
            </span>
          </div>
        </el-col>
        <el-col :span="6">
        <div class="title">支持</div>
        <div class="link">
          <!---->
          <span href="#"
                class>
              <router-link to="/aboutUs">商务合作</router-link>
            </span>
        </div>
        <div class="link">
          <!---->
          <span href="/#"
                class>
              <router-link to="/privacyAgreement">隐私条款</router-link>
            </span>
        </div>
        <div class="link">
          <!---->
          <span href="#"
                class>
              <router-link to="/userAgreement">用户条款</router-link>
            </span>
        </div>
      </el-col>
        <el-col :span="6">
          <div class="title">友情链接</div>
          <div class="link">
            <!---->
            <span >
              <a href="https://www.f2pool.com/">鱼池</a>
            </span>
          </div>
          <div class="link">
            <!---->
            <span >
              <a href="https://www.bitmain.com/">比特大陆</a>
            </span>
          </div>
          <div class="link">
            <!---->
            <span  class>
              <a href="https://www.8btc.com/">巴比特</a>
            </span>
          </div>
        </el-col>
      </el-col>
      <el-col class="rate" :span="9">
        <el-col :span="3">
          &nbsp;
        </el-col>
        <el-col :span="21">
          <div class="el-row bottom-r">
            <div class="title rubik-medium">主要汇率</div>
            <div class="list">
              <span v-for="(item, i) in footerRate"
                    :key="i">1{{item.title}} = {{item.amount}}美元</span>
            </div>
          </div>
        </el-col>
      </el-col>



      <el-dialog
        title="雷猫商城APP下载"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
        :lock-scroll="false">
        <div class="downModel">
          <div class="mobile">
            <div class="down1"></div>
            <br/>
            <p>
              <span><img src="/static/svg/iOS.svg"/> </span>&nbsp;<strong>IOS</strong>&nbsp;&nbsp;|&nbsp;&nbsp;
              <span><img src="/static/svg/android.svg"/> </span>&nbsp;<strong>Android</strong>
            </p>
          </div>
          <div></div>
<!--          <div class="mobile">-->
<!--            <div class="down2"></div>-->
<!--            <br/>-->
<!--            <p><span><img src="/static/svg/android.svg"/> </span>&nbsp;<strong>Android</strong></p>-->
<!--          </div>-->
        </div>
        <span slot="footer" class="dialog-footer">
<!--          <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
        </span>
      </el-dialog>

      <!--  联系我们-->
      <div class="connectUs" ref="connectUs">
        <div class="llgWX" @mouseenter="enter(2)" @mouseleave="leave(0)" ref="llgWX"></div>
        <div class="llgTel" @mouseenter="enter(3)" @mouseleave="leave(0)" ref="llgWX"></div>
        <div class="llgLmApp" type="button" @click="dialogVisible = true"></div>
      </div>
<!--      二维码-->
      <div class="llgQR" v-if="qrType == 2"  style="background-image: url('/static/images/lmkf.jpg');background-size:100%;"></div>
      <div class="llgTelInfo" v-if="qrType == 3"  >
        181 - 4405 - 5176  林经理
      </div>
    </div>
  </div>

</template>
<script>
import { setItem, getItem } from '../utils/newLocalStorage'
import { homePage } from '/api'
export default {
  data () {
    return {
      footerRate: getItem('footRate'),
      qrType: 0,
      dialogVisible: false
    }
  },
  methods: {
    _homePage () {
      homePage().then(res => {
        if (res.status === 200 && res.data.code === 1) {
          setItem({
            name: 'footRate',
            value: res.data.data.rate,
            expires: 86400000,
            startTime: Date.parse(new Date())
          })
          this.footerRate = getItem('footRate')
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },

    enter (par) {
      if (par === 1) {
        this.$dialog.confirm('Please confirm to continue').then(function () {
          console.log('111111111111111')
        }).catch(function () {
          console.log('222222222222222')
        })
      }
      this.qrType = par
    },
    leave (par) {
      this.qrType = par
    }
  },
  created () {
    this._homePage()
  },
  handleClose (done) {
    this.$confirm('确认关闭?').then(_ => {
      done()
    }).catch(_ => {})
  }
}
</script>
<style scoped>
.bottom {
  width: 100%;
  min-width: 1250px;
  background: #31384a;
  display: flex;
  justify-content: center;
}
.content {
  width: 1250px;
  height: 296px;
  box-sizing: border-box;
  margin: 0 120px;
  padding: 70px 0 20px;
  background: #31384a;
  color: #fff;
}
.name {
  height: 18px;
  line-height: 18px;
  background-size: 105px 18px;
  font-size: 20px;
  font-weight: bold;
}
.copyright {
  width: 200px;
  font-size: 12px;
  padding: 20px 0 10px;
  color: #fff;
  opacity: 0.45;
}
.title {
  font-family: Rubik-Medium;
  margin-bottom: 5px;
}
.link {
  padding-top: 15px;
}
.link span {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  opacity: 0.45;
}
.link a {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  /* opacity: 0.45; */
}

.rate {
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.45);
  min-width: 350px;
}
.bottom-r {
  margin: 0 auto;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.title {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.list span {
  margin-top: 20px;
  /* margin-right: 10px; */
  width: 160px;
}
.iconfont {
  font-size: 25px;
  color: rgba(255, 255, 255, 0.45);
  margin-right: 10px;
  text-decoration: none;
}
.iconfont:hover {
  color: #fff;
  text-decoration: none;
}
.connectUs{
  width:60px;
  height: 180px;
  position: fixed;
  left: unset;
  right: 1%;
  top:unset;
  bottom: 42%;
  z-index: 2019;
  }
.llgWX{
  width: 80px;
  height:80px;
  background-image: url("/static/images/icon-Wx.png");
  background-size:100%;
}
.llgTel{
  width: 80px;
  height:80px;
  background-image: url("/static/images/icon-tel.png");
  background-size:100%;
}
.llgQR{
    width:200px;
    height:200px;
    position: fixed;
    left: unset;
    right: 4%;
    top:unset;
    bottom: 38%;
    z-index: 2019;
  }
.llgTelInfo{
  width:250px;
  height:65px;
  position: fixed;
  left: unset;
  right: 4.3%;
  top:unset;
  bottom: 45%;
  z-index: 2019;
  background: #FFFFFF;
  border-radius: 25px;
  font-size: 1.5em;
  text-align: center;
  line-height: 70px;
  color: #1a1a1a;
  box-shadow:darkgrey 2px 2px 2px 2px ;
}
.downModel{
  height: 250px;
  text-align: center;
}
.mobile{
  width: 100%;
  height:300px;
  float: left;
}
.down1{
  width: 200px;
  height:200px;
  background: url("/static/images/app.jpg") no-repeat;
  background-size: 100%;
  margin: 0px auto;
}
.mobile p{
  width: 100%;
  font-size: 20px;
  line-height: 40px;
}
.mobile img{
  width: 30px;
  height:30px;
  }
.llgLmApp{
    width: 80px;
    height:80px;
    background-image: url("/static/images/icon-app.png");
    background-size:100%;
  }
</style>
