import axios from "axios";

// response time
axios.defaults.timeout = 20000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = '/'; //Base URL

// axios.interceptors.request.use((config) => {
//   //before send
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data, {
//       arrayFormat: 'repeat'
//     });
//   }
//   return config;
// }, (error) => {
//   this.$message.error('Oops, this is a error.');
//   return Promise.reject(error);
// });

axios.interceptors.response.use((res) => {
  if (res.status != 200) {
    // _.toast(res.data.msg);
    return Promise.reject(res);
    // var exception = new CommonException('HTTP Error', 1);
    // throw exception;
  }
  return res;
}, (error) => {
  console.log(error.status);
  if (error.response) {
    if (error.response.status == 401) {
      this.$message.error('Oops, this is a error.');
      return;
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  return reject(error);
});
//return Promise
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        if (response) resolve(response.data);
      }, err => {
        console.log(err);
      })
      .catch((error) => {
        console.log(error);
        reject(error)
      })
  })
}
