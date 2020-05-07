<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <div class="logo"></div>
        <el-menu
          ref='mymenu'
          :default-active='current'
          :router="true"
          :unique-opened="true"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="user">
            <span slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </span>
            <el-menu-item index="user_list">
              <i class="el-icon-location"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="post">
            <span slot="title">
              <i class="el-icon-location"></i>
              <span>文章管理</span>
            </span>
            <el-menu-item index="post_list">
              <i class="el-icon-location"></i>
              <span>文章列表</span>
            </el-menu-item>
            <el-menu-item index="post_publish">
              <i class="el-icon-location"></i>
              <span>文章发布</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="cate">
            <span slot="title">
              <i class="el-icon-location"></i>
              <span>栏目管理</span>
            </span>
            <el-menu-item index="cate_list">
              <i class="el-icon-location"></i>
              <span>栏目列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span class="icon-paragraph-justify toggle-btn"></span>
          <span class="system-title">后台管理系统</span>
          <div class="welcome">
            <span>欢迎你:xxx</span> &nbsp;&nbsp;&nbsp;
            <span>退出</span>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: ''
    }
  },
  watch: {
    '$route' (to, from) {
      let rname = to.path.substring(to.path.lastIndexOf('/') + 1)
      let oldname = from.path.substring(from.path.lastIndexOf('/') + 1)
      console.log(rname, oldname)
      if (rname === 'welcome') {
        this.current = ''
        this.$refs.mymenu.close(oldname.substring(0, oldname.indexOf('_')))
      } else {
        this.current = rname
      }
    }
  },
  mounted () {
    // 1.获取当前路由--嵌套路由
    let rname = this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1)
    // 2.直接设置menu的default-actvie属性为当前的路由名称
    this.current = rname
  }
}
</script>

<style lang='less' scoped>
.index {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #fff;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
  }
}
</style>
