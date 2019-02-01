<template>
  <div class="container">
    <div class="card note">注意：此应用为公共开源项目，您提交的词组会被直接提交到系统数据库中，请勿恶意提交词组，谢谢合作，同时感谢您对词库的贡献！</div>
    <div class="card form">
      <mt-field label="关键词 A" placeholder="请输入关键词" v-model="keyword_1"></mt-field>
      <mt-field label="关键词 B" placeholder="请输入关键词" v-model="keyword_2"></mt-field>
    </div>
    <mt-popup v-model="popupVisible" position="right" class="model">
      <div class="inner">
        <div class="show">
          <div class="title">您提交的词组是</div>
          <div class="subtitle">
            <p>{{keyword_1}}</p>
            <p>{{keyword_2}}</p>
          </div>
        </div>
        <mt-button type="primary" size="large" @click="commit" class="enter">确定提交</mt-button>
        <mt-button type="danger" size="large" @click="popupVisible=false">返回</mt-button>
      </div>
    </mt-popup>
    <mt-button type="primary" size="large" @click="showModal" class="enter">提交词组</mt-button>
    <mt-button type="danger" size="large" @click="gotoHomeMenu">返回首页</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      keyword_1: "",
      keyword_2: "",
      popupVisible: false
    };
  },
  methods: {
    gotoHomeMenu() {
      this.$router.push("/home");
    },
    commit() {
      this.$http
        .post("postKeyword", {
          keyword_1: this.keyword_1,
          keyword_2: this.keyword_2
        })
        .then(res => {
          if (res.err) {
            Toast({
              message: "提交出错",
              position: "bottom",
              duration: 1000
            });
          } else {
            Toast({
              message: "提交成功",
              position: "bottom",
              duration: 1000
            });
            this.popupVisible = false;
            this.keyword_1 = '';
            this.keyword_2 = '';
          }
        });
    },
    showModal() {
      if (this.keyword_1 != "" && this.keyword_2 != "") {
        this.popupVisible = true;
      } else {
        Toast({
          message: "请填写完整信息",
          position: "bottom",
          duration: 1000
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.note {
  padding: 1rem;
  line-height: 2rem;
  color: white;
  background-color: #ef5350;
}
.form {
  margin: 2rem 0;
}
.enter {
  margin-bottom: 1rem;
}
.model {
  width: 100%;
  height: 100%;
  .inner {
    width: 80%;
    height: 20rem;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    .show {
      .title {
        text-align: center;
        font-size: 1rem;
        border-bottom: 2px solid rgba($color: #000000, $alpha: 0.1);
        padding: 1rem;
        color: rgba($color: #000000, $alpha: 0.6);
      }
      .subtitle {
        text-align: center;
        font-size: 2rem;
        padding: 1rem;
        p{
          margin: .5rem;
        }
      }
      margin-bottom: .6rem;
    }
  }
}
</style>
