<template>
  <div>
    <div class="container" v-show="!flag">
      <div class="card err_msg" v-if="err">信息填写错误!</div>
      <div class="card actor" v-if="!err">{{keyword}}</div>
      <div class="btn_box">
        <div class="hide_btn card" @click="hide">点击隐藏身份</div>
        <div class="exit_btn card" @click="exit">退出游戏</div>
      </div>
    </div>
    <div class="hide" v-show="flag">
      <div class="playerNo_box">
        <div class="title">PLAYER | 玩家编号</div>
        <div class="playerNo">NO.{{playerNo}}</div>
        <div class="title subtitle">ROOM | 房间编号：{{roomId}}</div>
      </div>
      <div class="show_btn" @click="hide">点击查看身份</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomId: this.$store.state.roomId,
      playerNo: this.$store.state.playerNo,
      keyword: "",
      flag: false, //是否开启遮蔽层
      err: false //错误信息
    };
  },
  mounted() {
    this.getKeyword();
  },
  methods: {
    getKeyword() {
      this.$http
        .get(
          "getKeyword" + "?roomId=" + this.roomId + "&playerNo=" + this.playerNo
        )
        .then(res => {
          if (res.data.err) {
            this.err = true;
          } else {
            this.keyword = res.data;
          }
        });
    },
    hide() {
      this.flag = !this.flag;
    },
    exit() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.err_msg {
  font-size: 2rem;
  text-align: center;
  line-height: 20rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
}
.actor {
  line-height: 15rem;
  font-size: 2rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5rem;
  text-indent: 0.5rem;
  margin-bottom: 5rem;
  .btn_box{
    position: absolute;
    bottom: 0px;
  }
}
.hide_btn {
  font-size: 2rem;
  text-align: center;
  color: white;
  background-color: #263238;
  line-height: 5rem;
  font-weight: 100;
  margin-top: 2rem;
}
.exit_btn {
  font-size: 2rem;
  text-align: center;
  color: white;
  background-color: #f44336;
  line-height: 5rem;
  font-weight: 100;
  margin-top: 2rem;
}
.hide {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #263238;
  top: 0;
  color: white;
  .playerNo_box {
    padding: 0 20px;
    margin-top: 2rem;
    .title {
      font-size: 1.2rem;
      font-weight: 100;
      margin-top: -10px;
      color: #cfd8dc;
    }
    .subtitle {
      margin-top: 8px;
      color: #cfd8dc;
    }
    .playerNo {
      font-size: 7rem;
      margin-left: -8px;
    }
  }
  .show_btn {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    line-height: 10rem;
    background: #202a30;
  }
}
</style>
