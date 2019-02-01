// 入口文件
// 导入js
import Vue from 'vue';
import app from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'; // 异步加载库
import Vuex from 'vuex';

// 导入css
// import './lib/mui/css/mui.min.css'
// import './lib/mui/css/icons-extra.css'
import './lib/global/main.css'
import './lib/md-icon/css/materialdesignicons.min.css'

// 导入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 使用路由
Vue.use(VueRouter);
import router from './router.js';

// 使用Vue-resource
Vue.use(VueResource);
// 设置请求的根路径
// Vue.http.options.root = "http://localhost:8080/api/spy"
Vue.http.options.root = "https://www.esunr.xyz:8080/api/spy"
// 设置表单提交的编码类型：可以免除用Vue-resource的Post指令专递数据时的第三个编码类型的参数
Vue.http.options.emulateHTTP = true;

// 使用Vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    roomId: 21,
    playerNo: 1
  },
  mutations: {
    setRoomId(state, id) {
      state.roomId = id;
    },
    setPlayerNo(state, playerNo){
      state.playerNo = playerNo;
    }
  }
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router: router,
  store: store
});










