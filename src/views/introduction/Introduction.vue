<template>
  <div style="margin-left: 20%;margin-right: 20%">
    <h3><i class="el-icon-s-comment" ></i> &nbsp;实验室简介</h3>
    <hr>
    <p v-for="introduction in this.introductionList" :key="introduction.id">
      {{introduction.content}}
      <img :src="introduction.photo">
    </p>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data () {
    return {
      introductionList: ''
    }
  },
  created () {
    this.getIntroductionList()
  },
  methods: {
    getIntroductionList () {
      this.$http.get('/introduction/get/all?pageNum=1&pageSize=1000').then(res => {
        if (res.data.code === 200) {
          this.introductionList = res.data.data.list
        } else {
          this.$message.error('加载失败')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
