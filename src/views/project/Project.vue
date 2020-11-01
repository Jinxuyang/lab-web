<template>
  <div style="margin-left: 20%;margin-right: 20%">
    <h3><i class="el-icon-s-comment" ></i> &nbsp;科研项目</h3>
    <hr>
    <p v-for="project in this.projectList" :key="project.id">
      {{"- " + project.name + "，项目号：" + project.number+ "，负责人：" + project.manager }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      projectList: ''
    }
  },
  created () {
    this.getProjectList()
  },
  methods: {
    getProjectList () {
      this.$http.get('/project/get/all?pageNum=1&pageSize=1000').then(res => {
        if (res.data.code === 200) {
          this.projectList = res.data.data.list
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
