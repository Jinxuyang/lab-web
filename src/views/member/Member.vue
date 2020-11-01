<template>
<div style="margin-left: 20%;margin-right: 20%">
  <el-row>
    <el-col :span="4" v-for="member in this.memberList" :key="member.id">
        <img :src="member.photo" height="180" width="160" >
        <p style="text-align: center">{{member.name +' '+ member.position}}</p>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'Member',
  data () {
    return {
      memberList: []
    }
  },
  created () {
    this.getMemberList()
  },
  methods: {
    getMemberList () {
      this.$http.get('/member/get/all?pageNum=1&pageSize=1000').then(res => {
        if (res.data.code === 200) {
          this.memberList = res.data.data.list
          console.log(this.memberList)
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
