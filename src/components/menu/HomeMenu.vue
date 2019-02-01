<template>
  <div class="container">
    <img class="logo" src="../../img/logo.jpg" alt>
    <div class="btn_box">
      <mt-button @click="gotoJoinRoom" class="found_btn" size="large" type="primary">加入游戏</mt-button>
      <mt-button @click="gotoRoomInfo" class="join_btn" size="large" type="danger">创建游戏</mt-button>
      <mt-button @click="gotoAdd" class="join_btn" size="large">添加词组</mt-button>
    </div>
    <div class="message">版本：α内测版
      <br>Github：EsunR/WhoIsSpy
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gotoRoomInfo() {
      this.$router.push("/found/RoomInfo");
    },
    gotoJoinRoom() {
      this.$router.push("/join/JoinRoom");
    },
    gotoAdd() {
      this.$router.push("/Add");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 20px;
  .logo {
    display: block;
    margin: 50px auto;
    width: 250px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .btn_box {
    .join_btn {
      margin-top: 2rem;
    }
  }
  .message {
    text-align: center;
    margin-top: 7rem;
    font-size: 0.9rem;
    line-height: 2rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
