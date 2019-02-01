<template>
  <div class="container">
    <div class="card">
      <div class="big_title">创建房间</div>
      <div class="big_subtitle">请填写游玩参数</div>
    </div>
    <div class="card select_player_num">
      <div class="title">选择玩家人数</div>
      <!-- 自定义属性要加修饰符@或者: -->
      <mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount="3"></mt-picker>
    </div>
    <div class="card note">
      <table cellspacing="0">
        <tr>
          <th>游戏人数</th>
          <th>卧底数量</th>
        </tr>
        <tr>
          <td>5~8人</td>
          <td>1人</td>
        </tr>
        <tr>
          <td>9~14人</td>
          <td>2人</td>
        </tr>
        <tr>
          <td>15~20人</td>
          <td>3人</td>
        </tr>
      </table>
    </div>
    <div class="card btn_box">
      <mt-button class="primary" type="primary" size="large" @click="postRoomInfo">确定创建</mt-button>
      <mt-button class="danger" type="danger" size="large" @click="backToHome">取消创建</mt-button>
    </div>
  </div>
</template>

<script>
import { Picker } from "mint-ui";
export default {
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          className: "slot1"
        }
      ],
      player_num: 6,
      rule: {}
    };
  },
  mounted() {
    // this.getRule();
  },
  methods: {
    onValuesChange(picker, values) {
      if (picker.getSlotValue(0) == null) {
        this.player_num = 6;
      } else {
        this.player_num = picker.getSlotValue(0);
      }
    },
    // 确定建立房间
    postRoomInfo() {
      this.$http
        .post("postRoomInfo", { playerNum: this.player_num })
        .then(res => {
          // console.log(res.body);
          // 在vuex中记录房间ID
          this.$store.commit("setRoomId", res.body);
          this.$store.commit("setPlayerNo", 1);
          this.$router.push("/found/Ready");
        });
    },
    // 返回首页
    backToHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.select_player_num {
  .title {
    text-align: center;
    padding: 1rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }
}
.note{
  table{
    text-align: center;
    width: 80%;
    margin: 1.5rem auto;
    border-radius: 10px;
    overflow: hidden;
    th{
      background-color: #26A2FF;
      line-height: 2rem;
      color: white;
      font-weight: 400;
    }
    td{
      line-height: 2.5rem;
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
.btn_box {
  padding: 20px;
  .primary {
    margin-bottom: 1.5rem;
  }
}
</style>
