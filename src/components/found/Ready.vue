<template>
  <div class="container">
    <div class="card title_box">
      <div class="big_title">
        <span class="mdi mdi-check-circle-outline"></span>SUCCESS
      </div>
      <div class="big_subtitle">建立成功，以下是房间ID</div>
    </div>
    <div class="card roomId_card">
      <div class="title">ROOM ID</div>
      <div class="roomId">{{$store.state.roomId}}</div>
      <div class="note">告诉您的小伙伴您所创建的房间ID，即可进入您的房间并获取个人的身份牌。</div>
    </div>
    <div class="card roomId_card">
      <div class="title">PLAYER NO.</div>
      <div class="roomId">1</div>
      <div class="note">您的玩家序号是1，游戏顺序将从您开始</div>
    </div>
    <div class="start_btn card" @click="startGame">获取关键词，并开始游戏</div>
  </div>
</template>

<script>
export default {
  methods: {
    startGame(){
      this.$router.push('/join/Playing');
    }
  },
};
</script>

<style lang="scss" scoped>
.title_box {
  .big_title {
    color: white;
    background-color: #4caf50;
    padding: 0;
    line-height: 80px;
    span {
      margin-right: 10px;
      font-size: 2.4rem;
      position: relative;
      top: 3px;
    }
  }
  .big_subtitle {
    margin: 0;
    padding: 0;
    border: none;
    line-height: 30px;
  }
}
.roomId_card {
  .title {
    font-size: 1.2rem;
    text-align: center;
    line-height: 3rem;
    color: rgba(0, 0, 0, 0.5);
  }
  .roomId {
    text-align: center;
    font-size: 5rem;
    color: rgba(0, 0, 0, 0.4);
    font-weight: bold;
    margin-top: -1rem;
  }
  .note {
    font-size: .9rem;
    line-height: 1.5rem;
    text-align: center;
    padding: 20px;
    color: rgba(0, 0, 0, 0.7);
  }
}
.start_btn{
  text-align: center;
  line-height: 5rem;
  color: white;
  background-color: #4caf50;
  font-size: 1.2rem;
}
</style>
