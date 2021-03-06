const baseUrl = '/api1'
import { ypost } from './public'
// 登陆1
export const userLogin = (params) => {
  return ypost(`${baseUrl}/home/user/do_login`, params)
}
// 退出登陆1
export const loginOut = (params) => {
  return ypost(`${baseUrl}/home/user/logout`, params)
}
// 首页接口1
export const homePage = (params) => {
  return ypost(`${baseUrl}/home/index/new_index`, params)
}
// 注册账号1
export const register = (params) => {
  return ypost(`${baseUrl}/home/user/reg`, params)
}
// 上传图片
export const upload = (params) => {
  return ypost(`${baseUrl}/users/upload`, params)
}
// 修改头像
export const updateheadimage = (params) => {
  return ypost(`${baseUrl}/users/updateheadimage`, params)
}
// 商品列表接口1
export const goodsList = (params) => {
  return ypost(`${baseUrl}/home/goods/index`, params)
}
// 短信接口1
export const sendCode = (params) => {
  return ypost(`${baseUrl}/home/api/send_validate_code`, params)
}
// 商品详情接口1
export const goodsInfo = (params) => {
  return ypost(`${baseUrl}/home/goods/goodsInfo`, params)
}
// 保存电子钱包地址接口1
export const saveWallet = (params) => {
  return ypost(`${baseUrl}/home/user/save_wallet`, params)
}
// 获取电子钱包地址接口1
export const getWallet = (params) => {
  return ypost(`${baseUrl}/home/user/getWallet`, params)
}
// 购买矿机+电费接口1
export const buyNow = (params) => {
  return ypost(`${baseUrl}/home/order/buy_now`, params)
}
// 保存用户线下收货地址接口1
export const saveAddress = (params) => {
  return ypost(`${baseUrl}/home/user/save_address`, params)
}
// 订单详情接口1
export const orderDataList = (params) => {
  return ypost(`${baseUrl}/home/order/orderList`, params)
}
// 我的礼券接口1
export const myCoupon = (params) => {
  return ypost(`${baseUrl}/home/panel/myCoupon`, params)
}
// 我的团队接口1
export const polularizeDetail = (params) => {
  return ypost(`${baseUrl}/home/panel/popularizeDetail`, params)
}
// 新闻列表1
export const newsLlist = (params) => {
  return ypost(`${baseUrl}/home/article/articleList`, params)
}
// 新闻详情1
export const newsDetails = (params) => {
  return ypost(`${baseUrl}/home/article/detail`, params)
}
// 我的推广1
export const myPopularize = (params) => {
  return ypost(`${baseUrl}/home/panel/myPopularize`, params)
}
// 控制面板1
export const controlPanel = (params) => {
  return ypost(`${baseUrl}/home/panel/index`, params)
}
// 公告
export const marquee = (params) => {
  return ypost(`${baseUrl}/home/article/hot`, params)
}
// 获取用户收货地址1
export const getUserAddress = (params) => {
  return ypost(`${baseUrl}/home/user/userAddress`, params)
}
// 修改电子钱包地址1
export const editWallet = (params) => {
  return ypost(`${baseUrl}/home/user/editwallet`, params)
}
// 修改收货地址接口
export const editAddress = (params) => {
  return ypost(`${baseUrl}/home/user/editAddress`, params)
}
// 是否绑定矿池
export const isBindMine = (params) => {
  return ypost(`${baseUrl}/home/panel/isBindMine`, params)
}
// 绑定矿池
export const bindMine = (params) => {
  return ypost(`${baseUrl}/home/panel/bindMine`, params)
}
// 订单详情
export const orderDetail = (params) => {
  return ypost(`${baseUrl}/home/order/orderDetail`, params)
}
// 奖池列表
export const jackpotIndex = (params) => {
  return ypost(`${baseUrl}/home/jackpot/index`, params)
}
// 删除用户收货地址
export const deleteUserAddress = (params) => {
  return ypost(`${baseUrl}/home/user/deleteUserAddress`, params)
}
// 删除钱包地址
export const deleteWalletAddress = (params) => {
  return ypost(`${baseUrl}/home/user/delete_wallet_address`, params)
}
// 确认收货
export const shouhuo = (params) => {
  return ypost(`${baseUrl}/home/order/orderFinished`, params)
}
// 电费订单充值/详情接口
export const buyElectricityDetail = (params) => {
  return ypost(`${baseUrl}/home/order/buyElectricityDetail`, params)
}
// 电费购买接口
export const buyElectricityCost = (params) => {
  return ypost(`${baseUrl}/home/order/buyElectricityCost`, params)
}
// 上传身份信息
export const identityAuthentication = (params) => {
  return ypost(`${baseUrl}/home/user/identityAuthentication`, params)
}
// 用户是否实名验证
export const identityAuthenticationExist = (params) => {
  return ypost(`${baseUrl}/home/user/identityAuthenticationExist`, params)
}

// 页面SEO
export const indexSEO = (params) => {
  return ypost(`${baseUrl}/home/seo/index`, params)
}

// 重置密码
export const resetPassword = (params) => {
  return ypost(`${baseUrl}/home/user/resetPassword`, params)
}
// 修改矿池账户
export const modifyMine = (params) => {
  return ypost(`${baseUrl}/home/panel/modifyMine`, params)
}
// 转账手续费配置
export const transferConfig = (params) => {
  return ypost(`${baseUrl}/home/panel/transfer_config`, params)
}
// 转账
export const transfer = (params) => {
  return ypost(`${baseUrl}/home/panel/transfer`, params)
}
// 取消订单
export const cancelGoodOrder = (params) => {
  return ypost(`${baseUrl}/home/order/cancelGoodsOrder`, params)
}
// 计算器相关算法参数
export const calculator = (params) => {
  return ypost(`${baseUrl}/home/index/calculator`, params)
}
// 合伙人信息输入
export const joinPartner = (name, mobile) => {
  // return ypost(`${baseUrl}/api/AlipayResult/getContact?name=` + params.name + '&mobile=' + params.phone, params)
  return ypost(`${baseUrl}/api/AlipayResult/getContact?name=` + name + `&mobile=` + mobile)
}

