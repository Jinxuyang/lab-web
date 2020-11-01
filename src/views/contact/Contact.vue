<template>
  <div style="margin-left: 20%;margin-right: 20%">
    <h3><i class="el-icon-s-comment" ></i> &nbsp;联系方式</h3>
    <hr>
    <h2 v-for="contact in this.contactList" :key="contact.id">
      <span>邮箱：</span><a :href="'mailto:'+contact.email">{{contact.email}}</a>
      <br>
      {{"地址：" + contact.address}}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      contactList: ''
    }
  },
  created () {
    this.getContactList()
  },
  methods: {
    getContactList () {
      this.$http.get('/contact/get/all?pageNum=1&pageSize=1000').then(res => {
        if (res.data.code === 200) {
          this.contactList = res.data.data.list
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
