<template>
  <el-main style="width: 100%;">
    <el-row style="width:300px;height:150px;margin:80px auto;align:center;font-weight: 600;font-size: 24px;" >
      <h1>提交成功，{{seconds}}秒后关闭界面</h1>
    </el-row>
  </el-main>
</template>

<script>
export default {
  data: function () {
    return {
      seconds: 5
    }
  },
  metaInfo () {
  },
  methods: {
    timer () {
      var _this = this
      var time = window.setInterval(function () {
        if (_this.seconds === 0) {
          _this.seconds = 0
          window.clearInterval(time)
          window.location.href = 'about:blank'
        } else {
          _this.seconds -= 1
        }
      }, 1000)
    }
  },
  mounted () {
  },
  created () {
    var userAgent = navigator.userAgent
    console.log(userAgent)
    this.timer()
  }
}
</script>

<style scoped>

</style>
