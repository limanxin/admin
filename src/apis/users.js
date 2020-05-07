import axios from '@/utils/myaxios.js'

// 1.登陆验证
export const userLogin = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}