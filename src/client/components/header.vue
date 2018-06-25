<template>
<div class="headers">
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"></el-menu-item>
    <el-menu-item index="2">个人中心</el-menu-item>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-submenu index="4">
      <template slot="title">我的歌单</template>
      <el-menu-item index="2-1">本地歌单</el-menu-item>
      <el-menu-item index="2-2">我喜欢</el-menu-item>
      <el-menu-item index="2-3">我的收藏</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">下载清单</template>
        <el-menu-item index="2-4-1">正在下载（0）</el-menu-item>
        <el-menu-item index="2-4-2">下载完成（0）</el-menu-item>
        <el-menu-item index="2-4-3">下载失败（0）</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="5" class="noBorder">
        <el-input
            placeholder="请输入内容"
            v-model="input23">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </el-menu-item>
  </el-menu>
  <div class="line"></div>

</div>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>
    .headers{
       ul{
         padding: 0 100px !important;
       }
       ul>li{
          float:right !important;
       }
       .noBorder{
          border: none !important;
       }
    }
</style>
