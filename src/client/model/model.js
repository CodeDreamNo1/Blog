let config = require('./config');
const host = "http://" + config.baseURL;
const api = {
  login: '/login',//获取微信一系列参数
  submitFeedback: '/wx/backend/api/wechat/commitComment',//提交意见表单
  updataImg: '/wx/backend/api/wechat/addImg',//上传图片
  deleteImg: '/wx/backend/api/wechat/deleteImg',
  login: '/wx/backend/api/wechat/loginCheck',
  getInformation: '/wx/backend/api/wechat/detail',//获取故障详情
}
export default {
    login: () => {
      return host + api.login;
    },
    deleteImg: () => {
      return host + api.deleteImg;
    },
    submitFeedback: () => {
      return host + api.submitFeedback;
    },
    login: () => {
      return host + api.login;
    },
    getInformation: () => {
      return host + api.getInformation;
    }
}