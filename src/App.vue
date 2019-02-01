<template>
  <div id="main">
    <div id="head">谁是卧底<span>α内测版</span></div>
    <!-- 中间的路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
#head{
  line-height: 3rem;
  background: #26A2FF;
  color: white;
  text-align: center;
  span{
    font-size: 15px;
    margin-left: 5px;
    background: #64B5F6;
    padding: 3px 5px;
    border-radius: 5px;
  }
}
</style>