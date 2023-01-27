<template>
  <div class="theme-container">
    <div class="theme-default-content error_404">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <div class="show-time-box">{{ count + 1 }} s 后将自动跳转到首页</div>

      <RouterLink to="/">
        Take me home.
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  data() {
    return {
      count: 0 ,//倒计时
    }
  },

  created() {
    this.threeGo()
  },

  methods: {
    //3秒后进入跳转页面
    threeGo() {
      const TIME_COUNT = 4;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            //跳转的页面写在此处
            this.$router.push({
              path: '/'
            });
          }
        }, 1000)
      }
    },
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
.show-time-box {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px ;
}
</style>