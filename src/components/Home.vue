<template>
  <div>
    <!--NavBar-->
    <div>
      <div style="background-color: rgb(255,255,255);height: 99px">
        <div style="text-align: center">
          logo
        </div>
      </div>
      <el-menu default-active="/index" mode="horizontal" :router="true">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/introduction">实验室简介</el-menu-item>
        <el-menu-item index="/member">成员</el-menu-item>
        <el-menu-item index="/direction">科研方向</el-menu-item>
        <el-menu-item index="/project">科研项目</el-menu-item>
        <el-menu-item index="/contact">联系我们</el-menu-item>
      </el-menu>
    </div>
    <el-container>
      <el-main><router-view></router-view></el-main>
    </el-container>
    <el-footer>
      <div style="text-align: center">
        <hr>
        <h5>地址： 陕西省西安市未央区陕西科技大学   邮箱：abc@sust.edu.cn</h5>
        <h5>Copyright © 2020 xxxxxxxxxxxxxxxxxxx All Rights Reserved</h5>
      </div>
      </el-footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
