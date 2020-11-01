<template>
  <div style="margin-left: 20%;margin-right: 20%">
    <h3><i class="el-icon-s-flag" ></i> &nbsp;科研方向</h3>
    <hr>
    <div v-for="direction in this.directionList" :key="direction.id">
      <h3>{{direction.name}}</h3>
      <p>{{direction.introduction}}</p>
      <el-row v-for="photo in direction.photos" :key="photo">
        <el-col :span="8">
          <img :src="photo" >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Direction',
  data () {
    return {
      directionList: ''
    }
  },
  created () {
    this.getDirectionList()
  },
  methods: {
    getDirectionList () {
      this.$http.get('/direction/get/all?pageNum=1&pageSize=1000').then(res => {
        if (res.data.code === 200) {
          this.directionList = res.data.data.list
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
