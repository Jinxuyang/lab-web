<template>
  <div style="margin-left: 20%;margin-right: 20%;">
    <div class="block">
      <el-carousel height="400px" style="margin-right: 30%;margin-left: 30%" width="500px">
        <el-carousel-item v-for="news in this.homeNews" :key="news.id">
          <div style="text-align: center">
            <a :href="news.url">
              <img :src="news.photo">
            </a>
          </div>
          <span>{{news.name}}</span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="margin-top: 20px">
      <el-row>
        <el-col :span="8">
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span>实验室带头人</span>
              <a href="/member" style="float: right; padding: 3px 0;font-size: 3px" >查看更多</a>
            </div>
            <el-row>
              <el-col :span="12" >
                <img :src="this.leader.photo" width="160px" height="180px">
              </el-col>
              <el-col :span="12">
                <h3>{{this.leader.name}}</h3>
                <p>{{this.leader.introduction}}</p>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span>实验室简介</span>
              <a href="/introduction" style="float: right; padding: 3px 0;font-size: 3px" >查看更多</a>
            </div>
            <p>{{this.introduction.content}}</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix" >
              <span>联系我们</span>
              <a href="/contact" style="float: right; padding: 3px 0;font-size: 3px" >查看更多</a>
            </div>
            <p>{{this.contact.email}}</p>
            <p>{{this.contact.address}}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px;text-align: center">
      <el-carousel :interval="4000" type="card" height="270px">
        <el-carousel-item v-for="member in this.memberList" :key="member.id">
          <img :src="member.photo" width="160px" height="180px">
          <h3>{{member.name+' '}}{{member.position}}</h3>
          <h3></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index.vue',
  data () {
    return {
      cardHeight: 300,
      homeNews: '',
      leader: '',
      introduction: '',
      contact: '',
      memberList: ''
    }
  },
  created () {
    this.getHomePage()
  },
  methods: {
    getHomePage () {
      this.$http.get('/web/index').then(res => {
        if (res.data.code === 200) {
          console.log(res)
          this.homeNews = res.data.data.homeNewsList
          this.leader = res.data.data.leader
          this.introduction = res.data.data.introduction
          this.contact = res.data.data.contact
          this.memberList = res.data.data.memberList
        } else {
          console.log('失败')
        }
      }).catch(res => {
        console.log('失败')
      })
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.box-card {
  height: 280px;
  margin-left: 1px;
  margin-left: 1px;
}
</style>
