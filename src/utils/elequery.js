import axios from 'axios'

// const domain = 'http://192.168.1.104:8080'
const domain = 'https://eleme-mini.mejs-inc.com'

export const queryMethod = (url, params, success = () => {} ) => {
    // loading 开始
    axios.get(`${domain}/${url}`, { params })
    .then((response) => {
      // loading 结束
      success(response.data)
    })
    .catch((error) => {
      console.error(error)
      // Toast.fail('系统维护中，请稍后再试', 3);
    })
    .then(() => {
    });
}

export const queryUploadFile = (url, params, success = () => {} ) => {
  // loading 开始
  axios.get(`${domain}/${url}`, { params, responseType: 'blob' })
  .then((response) => {
    // loading 结束
    success(response.data)
  })
  .catch((error) => {
    console.error(error)
    // Toast.fail('系统维护中，请稍后再试', 3);
  })
  .then(() => {
  });
}