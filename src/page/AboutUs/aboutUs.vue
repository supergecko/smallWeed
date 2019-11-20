<template>
  <div class="about3">
    <div class="block">
<!--      <el-carousel height="894px"-->
<!--                   trigger="click">-->
<!--        <el-carousel-item v-for="(src,index) in bannerImg"-->
<!--                          :key="index">-->
<!--          <img src="../../../static/imgs/banner@2x.jpg"-->
<!--               alt width="100%" height="100%"/>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
      <img src="../../../static/imgs/banner@2x.jpg"
           alt width="100%" height="894px"/>
    </div>

    <div class="about">
      <div class="title">
        <h2 class="h2">雷猫矿机</h2>
        <div class="bottom-border"></div>
      </div>

      <div class="content">
        <p class="intro">雷猫商城团队经历3个月的精心打造，于2019年09月正式上线雷猫矿机交易平台。雷猫商城是基于区块链投资者的需求，矿圈内矿机的交易因没有担保规范机制，行业混乱，参差不齐的服务，雷猫商城希望能在行业里树立一个新的体系，完善生态服务。围绕矿业生态的矿场托管服务、增值服务，希望能过雷猫团队的努力，能为矿工们在挖矿的道路上得到品质交易及矿业生态的便捷服务！</p>
        <h3 class="h3">雷猫商城能为您做什么？</h3>
        <p class="intro">
          矿机购买、矿机使用、矿机托管业务、矿机售后保障，雷猫商城为您提供高效、便捷的矿机一站式解决方案，您的需求就是我们的目标。我们为您整合矿圈资源、新款矿机、矿场托管及独立专业运营团队。为您提供：矿机购买+矿机托管+售后保障+推广返佣等，一站式解决方案。
        </p>
        <h3 class="h3">矿机销售</h3>
        <p class="intro">
          矿机购买、矿机使用、矿机托管业务、矿机售后保障，雷猫商城为您提供高效、便捷的矿机一站式解决方案，您的需求就是我们的目标。我们为您整合矿圈资源、新款矿机、矿场托管及独立专业运营团队。为您提供：矿机购买+矿机托管+售后保障+推广返佣等，一站式解决方案。
        </p>
        <h3 class="h3">矿机托管</h3>
        <p class="intro">
          规模化部署-集约式管理-低廉电费-电价低廉+规模化管理+运行效率提升+完善的安防 。提供矿机托管服务，矿场按照枯水期额定发电量进行搭建，全年保障供电。雷猫商城三大矿场分别位于云南昭通、云南迪庆、湖南株洲。
        </p>
        <h3 class="h3">矿机买卖，优选雷猫商城</h3>
        <p class="intro">
          为你提供专业贴心的服务，以不断提高服务质量为己任。 雷猫矿机商城长期服务于比特币矿机相关领域，全力协助矿工与矿商打通销售渠道，并实现 共赢。开创分享、拼团、共赢的全新运营模式。<br/>
          雷猫矿机商城也许不能为您提供市场最低价，但能给您最好的服务。
        </p>
      </div>
    </div>
    <div class="picWall">
      <img src="/static/aboutUs/zpq.jpg"/>
    </div>
    <div class="relation">
      <div class="title">
        <h2 class="h2">联系方式</h2>
        <div class="bottom-border"></div>
      </div>
      <div class="relation-content">
        <img width="546" height="392" src="../../../static/imgs/relation.png" alt />
        <div class="num">
          <p class="p-num">
            <span class="way">联系电话</span>
            <br />18144055176(微信同号) &nbsp;&nbsp;林经理
          </p>
          <p class="p-num">
            <span class="way">联系邮箱</span>
            <br />lintingxin@linglu666.com
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="bottom">
      <ul class="wrap">
        <li><a href="javascript;">友情链接</a></li>
        <li><a href="javascript;">合作伙伴</a></li>
        <li><a href="javascript;">联络我们</a></li>
        <li><a href="javascript;">常见问题</a></li>
      </ul><br>
      <p>copy 2019领鹿谷网络科技有限公司 版权所有</p>
    </div> -->
  </div>
</template>

<script>
import { indexSEO } from '/api/index'
export default {
  data: function () {
    return {
      bannerImg: [
        // '../../../static/imgs/banner.png',
        // '../../../static/imgs/banner.png',
        '../../../static/imgs/banner.png'
      ],
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
  .about3 {
    width: 100%;
    margin: 0 auto;
  }
  /*.el-carousel__indicator--horizontal{*/
  /*    width: 16px;*/
  /*    height: 16px;*/
  /*    background: rgba(89, 126, 247, 1);*/
  /*    border-radius: 50%;*/
  /*  }*/
  /*  .el-carousel__button {*/
  /*    width: 16px;*/
  /*    height: 16px;*/
  /*    background: rgba(89, 126, 247, 1);*/
  /*    border-radius: 50%;*/
  /*  }*/
  .about,
  .relation {
    width: 100%;
    text-align: center;
  }
  .title {
    display: inline-block;
    margin: 103px auto 60px;
    text-align: center;
  }
  .bottom-border {
    width: 60px;
    height: 8px;
    background: rgba(81, 78, 81, 1);
    margin: 22px auto 0;
  }
  .h2 {
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(60, 58, 60, 1);
  }
  .content {
    width: 1056px;
    margin: 0 auto;
    text-align: left;
    line-height: 25px;
    font-family: Microsoft YaHei;
  }
  .content .intro{
    margin-bottom: 30px;
    font-size: 16px;
    color: rgba(60, 58, 60, .7);
  }
  .content .h3{
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bolder;
    color: rgba(60,58,60,1);
    margin: 5px 0;
  }
  .content .c-img{
    display: block;
    margin: 0 auto;
  }
  .relation-content{
    position: relative;
    width: 1056px;
    margin: 0 auto 139px;
    text-align: left;
  }
  .relation-content .num{
    position: absolute;
    top: 94px;
    left: 722px;
    font-size: 18px;
    line-height: 38px;
  }
  .num .p-num{
    margin-bottom: 36px;
  }
  .relation-content .num .way:before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 16px;
    margin-right: 5px;
    background-color: #659BF4FF;
  }
.picWall{
  width: 100%;
  height:900px;
}
</style>
