<template>
  <el-container style="display:flex;align-items:center;padding-top: 20px;background: #1a1a1a">
    <el-header style="height: 450px">
      <el-image style="width: 1220px; height: 450px"
                src="../../../static/images/jackpotBg.png"
                fit="fill"></el-image>
    </el-header>
    <el-main class="JackoptContent">
      <el-row class="JackpotTitle">
        <el-row>
          <el-col :span="10">
            <div class="grid-content bg-purple leftContent">
              <div class="titleLeft">
                <div class="leftItem1"><span class="titleNumber">{{jackpot_thundercat_coin}}</span>万</div>
                <div class="leftItem1">雷猫积分</div>
              </div>
              <div class="leftItem2">奖池积分</div>
              <div class="leftItem3">
                <el-image style="width: 14px; height: 14px"
                          src="../../../static/images/icon-info.png"
                          fit="fill"></el-image>
                雷猫积分使用规则
              </div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple-light rightContent">
              <div class="rightItem1">
                <span style="webkit-text-fill-color: transparent;">奖池规则介绍</span>
              </div>
              <div>
                <div style="display: flex;margin-top: 28px">
                  <span class="rightNumber">1</span>
                  <span style="webkit-text-fill-color: transparent;">雷猫商城全部成交金额的1%会注入奖池</span>
                </div>
                <div style="display: flex;margin-top: 28px">
                  <span class="rightNumber">2</span>
                  <span style="webkit-text-fill-color: transparent;">雷猫商城合伙人有权参与奖池瓜分</span>
                </div>
                <div style="display: flex;margin-top: 28px">
                  <span class="rightNumber">3</span>
                  <span style="webkit-text-fill-color: transparent;">达成分阶段目标，即可享受阶段目标对应比例的奖池分红</span>
                </div>
                <div style="display: flex;margin-top: 28px">
                  <span class="rightNumber">4</span>
                  <span style="webkit-text-fill-color: transparent;">完成更高阶段目标的合伙人，同样参与低阶段目标奖池分红</span>
                </div>
                <div style="display: flex;margin-top: 28px">
                  <span class="rightNumber">5</span>
                  <span style="webkit-text-fill-color: transparent;">若分阶段目标无人达成，则该阶段对应奖池金额累计至下期活动</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="footerWarp">
          <div class="footerBtn">
            <router-link to="/user/extension">立即邀请好友</router-link>
          </div>
        </el-row>
      </el-row>

      <el-row style="margin-top: 84px">
        <el-row style="margin-bottom: 24px">
          <div style="display: flex;align-items: center;justify-content: center;">
            <el-image style="width: 40px; height: 32px"
                      src="../../../static/images/champion.png"
                      fit="fill"></el-image>
            <p class="championTitle">贡献排行榜</p>
          </div>
        </el-row>
		<el-row style="display: flex;justify-content: center;align-items: center;">
			<jackpot-data-list :order_list=rankList :flag=true></jackpot-data-list>
		</el-row>
      </el-row>

      <el-row>
        <div class="middleTitle">累计奖池积分：<span>{{jackpot_thundercat_coin}}万</span>雷猫积分</div>
      </el-row>

      <el-row style="margin-top: 84px">
        <el-row style="margin-bottom: 24px">
          <div style="display: flex;align-items: center;justify-content: center;">
            <el-image style="width: 40px; height: 32px"
                      src="../../../static/images/champion.png"
                      fit="fill"></el-image>
            <p class="championTitle">我的贡献明细</p>
          </div>
        </el-row>
<!--        <el-row class="ratingWarp"v-loading="loading"
                element-loading-text="正在统计中敬请期待"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 1)"
                element-loading-custom-class="ratingWarpMaskText"> -->
		<el-row style="display: flex;justify-content: center;align-items: center;">
          <jackpot-data-list :all_team_order=all_team_order :flag=false></jackpot-data-list>
        </el-row>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { jackpotIndex, indexSEO } from '/api'
import JackpotDataList from '/common/jackpotDataList'
import { getItem } from './../../utils/newLocalStorage'
export default {
  data () {
    return {
      loading: true,
      jackpot_thundercat_coin: 0, // 奖池总LMB
      rankList: [], // 排行榜
      all_team_order: [], // 团队贡献
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
      const scene = 3
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
    _jackpotIndex () {
      const loading = this.$loading({
        text: '加载中',
        background: 'rgba(0, 0, 0, 0.7)',
        fullscreen: true
      })
      const page = 1
      const user_id = getItem('userIDPC')
      const timestamp = Date.parse(new Date()) / 1000
      const sign = this.$md5(`${user_id}__${page}__${timestamp}__elseleimaohasjer2860`)
      let params = { page, user_id, timestamp, sign }
      jackpotIndex(params).then(res => {
        this._indexSEO()
        loading.close()
        if (res.status === 200 && res.data.code === 1) {
          console.log(res.data.data)
          this.jackpot_thundercat_coin = res.data.data.jackpot_thundercat_coin
          this.rankList = res.data.data.rankList
          this.all_team_order = JSON.parse(res.data.data.all_team_order)
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  },
  mounted () {
    this._jackpotIndex()
  },
  created () {

  },
  components: {
    JackpotDataList
  }
}
</script>
<style>
  .ratingWarpMaskText{
    font-size: 42px;
    font-family: Source Han Sans CN;
    z-index: 0;
  }
  .ratingWarpMaskText .el-loading-spinner {
    top: 40%;
  }
  .ratingWarpMaskText .el-loading-text{
    font-size: 27px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    background: linear-gradient( 0deg, rgba(247, 207, 141, 1) 0%, rgba(238, 234, 207, 1) 100% );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .ratingWarpMaskText .el-loading-spinner i {
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    background: linear-gradient( 0deg, rgba(247, 207, 141, 1) 0%, rgba(238, 234, 207, 1) 100% );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
<style scoped>
.ratingWarpMask{
  width: 100%;
  height: 525px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.7);
}

.JackoptContent {
  padding-top: 60px;
  background: rgba(5, 5, 5, 1);
  width: 1220px;
}
.JackpotTitle {
  width: 846px;
  height: 399px;
  background: rgba(2, 24, 70);
  border: 2px solid rgba(161, 130, 96, 1);
  opacity: 0.9;
  box-sizing: border-box;
  margin: 0 auto;
}
.leftContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 273px;
  margin-top: 40px;
}
.titleLeft {
  width: 148px;
  height: 148px;
  background: linear-gradient(
    0deg,
    rgba(247, 207, 141, 1),
    rgba(238, 234, 207, 1)
  );
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 19px;
}
.titleNumber {
  font-size: 54px;
  font-family: Impact;
  font-weight: 400;
  color: rgba(2, 24, 70, 1);
  line-height: 50px;
}
.leftItem1 {
  font-size: 29px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(2, 24, 70, 1);
  line-height: 36px;
}
.leftItem2 {
  font-size: 18px;
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
  margin-bottom: 21px;
}
.leftItem3 {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(2, 24, 70, 1);
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    0deg,
    rgba(247, 207, 141, 1) 0%,
    rgba(238, 234, 207, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rightContent {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(
    0deg,
    rgba(247, 207, 141, 1) 0%,
    rgba(238, 234, 207, 1) 100%
  );
  -webkit-background-clip: text;
  /*-webkit-text-fill-color:transparent;*/
}
.rightItem1 {
  height: 79px;
  box-sizing: border-box;
  line-height: 79px;
  border-bottom: 2px solid rgba(161, 130, 96, 1);
  margin-right: 24px;
  font-size: 18px;
}
.rightNumber {
  width: 25px;
  height: 25px;
  background: linear-gradient(
    0deg,
    rgba(247, 207, 141, 1),
    rgba(238, 234, 207, 1)
  );
  border-radius: 50%;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(2, 24, 70, 1);
  text-align: center;
  margin-right: 14px;
}
.ratingWarp {
  width: 846px;
  margin: 0 auto;
  padding: 19px 15px 18px 17px;
  border: 2px solid rgba(161, 130, 96, 1);
  box-sizing: border-box;
}
.championTitle {
  font-size: 27px;
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
.footerWarp {
  height: 86px;
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
.footerBtn a {
  color: rgba(2, 24, 70, 1);
}
.middleTitle {
  font-size: 27px;
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
  margin-left: 165px;
  margin-top: 38px;
}
.middleTitle > span {
  font-size: 42px;
}
.grid-content {
  font-weight: 600;
}
</style>
