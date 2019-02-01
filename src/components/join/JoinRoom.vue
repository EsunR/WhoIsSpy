<template>
  <div class="container">
    <div class="card">
      <div class="big_title">加入游戏</div>
      <div class="big_subtitle">输入房间ID和您的玩家编号即可进入游戏</div>
    </div>
    <div class="card">
      <mt-field label="Room ID" placeholder="请输入房间ID" v-model="roomId"></mt-field>
      <mt-field label="Player No" placeholder="请输入玩家序号" v-model="playerNo"></mt-field>
    </div>

    <mt-button type="primary" size="large" @click="enterGame" class="enter">进入游戏</mt-button>
    <mt-button type="danger" size="large" @click="gotoHomeMenu">返回首页</mt-button>

    <div class="card tag">
      <div class="title" @click="flag=!flag">什么是玩家序号？</div>
    </div>
    <transition name="my">
      <div v-if="flag" class="card tag_img">
        <img class="rule_img" src="http://img.cdn.esunr.xyz/RULE.jpg" alt>
        <div class="rule_text">玩家序号即为游戏的比赛顺序。房间创立者的序号为1，以房间创立者为起点，按逆时针方向为顺序，对玩家依次进行编号。</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomId: "",
      playerNo: "",
      flag: false
    };
  },
  methods: {
    gotoHomeMenu(){
      this.$router.push('/home')
    },
    enterGame(){
      this.$store.commit("setRoomId", this.roomId);
      this.$store.commit("setPlayerNo", this.playerNo);
      this.$router.push('/join/Playing');
    }
  }
};
</script>

<style lang="scss" scoped>
.my-enter,
.my-leave-to {
  opacity: 0;
  transform: translateY(150px);
}

.my-enter-active,
.my-leave-active {
  transition: all 1s ease;
}

.tag {
  text-align: center;
  font-size: 1rem;
  .title {
    line-height: 2.6rem;
    background-color: #90a4ae;
    color: white;
    font-size: 18px;
  }
  margin-top: 1rem;
}
.tag_img {
  .rule_img {
    width: 100%;
  }
  .rule_text {
    text-indent: 2em;
    text-align: justify;
    padding: 20px;
    line-height: 1.5rem;
    color: white;
    background-color: #90a4ae;
  }
}
.enter {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
</style>
