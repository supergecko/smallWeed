<template>
  <div class="content">
    <div class="introduce">
        <div class="introduce_pic title">
          产 品 介 绍
        </div>
        <div class="introduce_txt">
          随着比特币价格上升。比特币"挖矿"行业被公众知晓。简单来说。"挖矿"就是通过专业的设备为比特币网络提供服务，
          设备持有人会获得一定的比特币作为奖励，通过此方法获得比特币的成本比直接从市面上采购的比特币成本更低。因此"挖矿"项目被市场所青睐。
        </div>
    </div>
    <div class="discount">
      <div class="title">
        优 惠
      </div>
      <div class="discount_con" >
        <el-row>
          <div class="con_1" style="float: left;margin-left: 109px;margin-top: 80px;">
            <img src="/static/partner/shaomiao.png">
            <br/>
            <p>
              扫描二维码<br/>
              即送200元
            </p>
          </div>
          <div class="con_2" style="float: left;margin-left: 210px;margin-top: 80px;">
            <img src="/static/partner/kf.png">
            <br/>
            <br/>
            <p>
              雷猫商城专属客服
            </p>
          </div>
          <div class="con_3" style="float: left;margin-left: 230px;margin-top: 80px;">
            <img src="/static/partner/kefu.png">
            <br/>
            <p>
              咨询客服<br/>
              立抢试用名额
            </p>
          </div>
        </el-row>
        <el-row style="width:1000px;height:300px;margin: 100px auto;">
          <img src="/static/partner/contant_us.png" style="width: 392px;height:394px;float: left;" >

          <el-form style="width: 400px;height:200px;float: left;margin-left: 100px;margin-top: 30px;" :model="form">
            <p>合伙人咨询者请留联系方式</p>
            <el-input style="margin-top: 30px;" type="text" placeholder="请输入您的名字" v-model="form.name" :min="1" :max="20"></el-input>
            <el-input style="margin-top: 30px;" type="text" placeholder="请输入您的电话号码" v-model="form.mobile" :min="1" :max="20"></el-input>
            <el-button @click="submit" style="margin-top: 30px;">提交</el-button>
          </el-form>
        </el-row>
      </div>
    </div>
    <div class="famous">
      <div class="famous_pic title">
        大 咖 说
      </div>
      <div class="famous_con">
        <div class="famous_1 famous_people">
          <img src="/static/partner/ghc.png">
          <div class="people_txt">
            <p>郭宏才</p>
            <p style="font-size: 16px;color: #306BC3;">比特天使投资人</p>
            <br/><br/>
            <p>比特币挖矿是普通用户参与区块链最稳健切收益高的项目</p>
          </div>
        </div>
        <div class="famous_2 famous_people">
          <img src="/static/partner/dj.png">
          <div class="people_txt">
            <p>杜军</p>
            <p style="font-size: 16px;color: #306BC3;">节点资本创始合伙人</p>
            <br/><br/>
            <p>始于挖矿<br>
              不止挖矿<br>
              数字经济的基石
            </p>
          </div>
        </div>
        <div class="famous_3 famous_people">
          <img src="/static/partner/wjh.png">
          <div class="people_txt">
            <p>吴忌寒</p>
            <p style="font-size: 16px;color: #306BC3;">比特大陆创始人</p>
            <br/><br/>
            <p>挖矿起家，创建比特大陆目前比特大陆成为区块链最挣钱的公司之一
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="htd">
      <div class="title">
        怎 么 做
      </div>
      <div class="htd_con">
        <img src="/static/partner/register.png">
        <span>1、进行注册</span>
      </div>
      <div class="htd_con">
        <span>2、选择矿机型号</span>
        <img src="/static/partner/choose.png" style="float: right;">
      </div>
      <div class="htd_con">
        <img src="/static/partner/sy.png">
        <span>3、收益情况</span>
      </div>
    </div>
    <div class="reward">
      <div class="title">
        推 荐 奖 励
      </div>
      <div class="reward_dev">
        <div style="float: left;position: relative;left: 100px;">
          <img src="/static/partner/dev_pic.png">
        </div>
        <div class="dev_txt">
          <p style="font-size: 24px;">高达</p>
          <p style="font-size: 36px;color: yellow;">12%</p>
          <p style="font-size: 20px;">设备推荐奖励</p>
        </div>
      </div>
      <div class="reward_ele">
        <div class="ele_txt">
          <p style="font-size: 24px;">高达</p>
          <p style="font-size: 36px;color: yellow;">7%</p>
          <p style="font-size: 20px;">电费缴纳奖励</p>
        </div>
        <div style="float: right;position: relative;right: 100px;">
          <img src="/static/partner/dev_pic.png">
        </div>
      </div>
    </div>
    <div class="feedback">
      <div class="title">
        用 户 反 馈
      </div>
      <div class="feedback_con">
        <div class="toolBanner">
          <div style="background:rgba(248,94,94,1);"></div>
          <div style="background:rgba(67,177,85,1);"></div>
          <div style="background:rgba(239,194,55,1);"></div>
        </div>
        <div class="message">
          <div class="line_1">
            <img src="/static/partner/aa.jpg">
            <span class="name">安安</span>
            <span class="status">稳定性</span>
          </div>
          <div class="line_2">
            <p>最近区块链特别火，因为朋友介绍投了几个项目，全部都亏完了，还是挖矿好，安心稳健</p>
          </div>
        </div>
        <div class="message">
          <div class="line_1">
            <img src="/static/partner/ll.jpg">
            <span class="name">林良</span>
            <span class="status">收益高</span>
          </div>
          <div class="line_2">
            <p>第一次了解到比特币挖矿，收益率竟然这么高，比我做传统的投资要好多了。</p>
          </div>
        </div>
        <div class="message">
          <div class="line_1">
            <img src="/static/partner/ly.jpg">
            <span class="name">林奕</span>
            <span class="status">服务好</span>
          </div>
          <div class="line_2">
            <p>雷猫商城确实是很用心在服务，以前在其他矿场托管，脾气差得很，出了问题也不给解决。雷猫商城服务态度非常好，非常满意，给点个赞。</p>
          </div>
        </div>
        <div class="message">
          <div class="line_1">
            <img src="/static/partner/cf.jpg">
            <span class="name">陈飞</span>
            <span class="status">有意义</span>
          </div>
          <div class="line_2">
            <p>真的不是托！我在互联网投资做了很多，有挣过钱，但是大部分都亏完了。之前的很多人脉全部都没了，和领鹿谷他们公司合作很久了，这个项目稳健养人脉。收益非常可观！</p>
          </div>
        </div>
      </div>
    </div>
    <div class="advantage">
      <div class="title">
        优 势
      </div>
      <div class="advantage_pic">
      </div>
      <div class="address">
        <div class="address_icon">
          <span><img src="/static/partner/dz.png"></span>
        </div>
        <div class="address_info">
          福建省福州市鼓楼区国家863软件
          专业孵化器基地5楼512(领鹿谷）
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { indexSEO } from '/api/index'
import {joinPartner} from '/api'

export default {
  data: function () {
    return {
      bannerImg: [
        '../../../static/imgs/banner.png'
      ],
      seoTitle: '',
      seoMateName: '',
      seoMateContent1: '',
      seoMateContent2: '',
      form: {
        name: '',
        mobile: ''
      }
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
      const scene = 7
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
    //  用户信息提交
    submit () {
      const mobile = this.form.mobile
      if (!(/^1[34578]\d{9}$/.test(mobile))) {
        this.$message({
          message: '手机号码填写错误，请重新输入',
          type: 'warning'
        })
        return
      }

      // var jsonF = JSON.stringify(this.form)
      joinPartner(this.form.name, mobile).then(res => {
        if (res.data.code === 1) {
          this.form.name = ''
          this.form.mobile = ''
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        } else {
          this.$message.error('系统错误')
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
  .content {
    width: 100%;
    margin: 0 auto;
    background: url("/static/partner/bg.jpg");
    background-size:100%;
  }
  .title{
    width: 456px;
    height:90px;
    background: url("/static/partner/title.png") no-repeat;
    margin: 0 auto;
    color:#ffffff;
    font-size:3rem;
    text-align: center;
    line-height: 90px;
  }
  .introduce{
    width: 100%;
    height:250px;
    margin-top: 900px;
  }
  .introduce_txt{
    width: 80%;
    margin: 10px auto;
    font-size:20px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    margin-top: 50px;
  }
  .famous{
    width: 100%;
    height:600px;
  }
  .famous_con{
    width: 1900px;
  }
  .famous_people{
    float: left;
    width: 304px;
    height: 312px;
    border: 1px solid yellow;
    margin-left: 250px;
    margin-top:100px;
    color: #000000;
    text-align: center;
    font-size: 20px;
    background-color: #ffffff;
    border-radius: 14px;
    padding: 30px;
    font-family:Microsoft YaHei;
  }
  .famous_people img{
    position: relative;
    top:-85px;
  }
  .people_txt{
    position: relative;
    top:-70px;
  }
  .htd{
     width: 100%;
   }
  .htd_con{
    width: 1330px;
    height:600px;
    margin: 5px auto;
    position: relative;
    top:100px;
  }
  .htd img{
    float: left;
  }
  .htd span{
    width:156px;
    height:23px;
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: relative;
    top:200px;
    left:100px;
  }
  .reward{
    width: 100%;
  }
  .reward_dev{
    width: 1300px;
    height:400px;
    margin: 0 auto;
    margin-top: 30px;
  }
  .reward_ele{
    width: 1300px;
    height:400px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .dev_txt{
    width:130px;
    height:107px;
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(233,223,251,1);
    line-height:42px;
    float: right;
    position: relative;
    top:80px;
    right:200px;
  }
  .ele_txt{
    width:130px;
    height:107px;
    font-size:24px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(233,223,251,1);
    line-height:42px;
    float: left;
    position: relative;
    top:60px;
    left:200px;
  }
  .feedback{
    width: 100%;
  }
  .feedback_con{
    width:960px;
    height:736px;
    background:rgba(255,255,255,1);
    border-radius:20px;
    margin: 113px auto;
  }
  .toolBanner{
    width:130px;
    height:25px;
    float: right;
    position: relative;
    top:15px;
    right:47px;
  }
  .toolBanner div{
    width: 24px;
    height: 24px;
    border-radius:50%;
    float: left;
    margin-left: 17px;
  }
  .message{
    width: 80%;
    position: relative;
    top:60px;
    left: 93px;
    margin-top: 35px;
  }
  .message img{
    width:70px;
    height:70px;
    float: left;
    border-radius: 50%;
  }
  .line_1{
    width:800px;
    height:70px;
  }
  .name{
    width:42px;
    height:20px;
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(60,58,60,1);
    line-height:30px;
    position: relative;
    top:20px;
    left:20px;
  }
  .status{
    width:56px;
    height:19px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(17,98,220,1);
    line-height:30px;
    float: right;
    position: relative;
    top:20px;
  }
  .line_2{
    width:708px;
    height:47px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:28px;
    position: relative;
    left:90px;
  }
  .advantage{
    width: 70%;
    height:900px;
    margin: 30px auto;
  }
  .advantage_pic{
    width: 840px;
    height:700px;
    margin: 0 auto;
    background: url("/static/partner/M.png");
    background-size:100%;
    margin-top: 50px;
  }
  .address{
    width:330px;
    height:44px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:300;
    color:rgba(240,243,247,1);
    line-height:25px;
    float: right;
    position: relative;
    right:210px;
  }
  .address_icon{
    width: 32px;
    height:32px;
    float: left;
  }
  .address_info{
    width: 270px;
    float: left;
    line-height:25px;
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:300;
    color:rgba(240,243,247,1);
  }
  .discount{
    width: 100%;
  }
  .discount_con{
    width: 1330px;
    height:967px;
    background:rgba(146,89,250,0.3);
    border-radius:18px;
    margin: 86px auto;
    font-size:22px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:32px;
  }
  .discount_con img{
    width: 174px;
    height: 174px;
  }
  .con_1{
    width: 200px;
    position: relative;
    text-align: center;
  }
  .con_2{
    width: 206px;
    position: relative;
    text-align: center;
  }
  .con_3{
    width: 200px;
    position: relative;
    text-align: center;
  }
  .llg{
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:28px;
  }
  .qrCode{
    width:226px;
    height:226px;
    border:1px solid rgba(181,194,252,1);
    border-radius:14px;
    margin: 120px auto;
    padding:10px;
  }
</style>
