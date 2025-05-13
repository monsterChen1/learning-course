document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("sidenav-pinned");
    document.body.classList.add("ready");
  }, 200);

  // 显示当前用户的用户名
  let userSpan = document.querySelector('#userSpan');
  if(userSpan){
    userSpan.innerHTML = localStorage.getItem('username');
  }

  // 退出登录
  let logoutBtn = document.querySelector('#logout');
  if(logoutBtn){
    logoutBtn.addEventListener('click', (e) => {
        localStorage.clear();
        location.href = './login.html';
    });
  }
});

// toast弹窗
let toastBox = document.querySelector("#myToast");
const toast = new bootstrap.Toast(toastBox, {
    animate: true,
    autohide: true,
    delay: 3000
});

// 请求的链接的前缀地址
axios.defaults.baseURL = 'http://ajax-api.itheima.net';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
      let token = localStorage.getItem('token');
      if(token){
          config.headers.Authorization = token;
      }

      return config;
  },
  (err) => Promise.reject(err)
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => response.data,
  (err) => {
      // 权限拦截
      if(err.response.status === 401){
          localStorage.clear();
          location.href = './login.html';
      }

      return Promise.reject(err);
  }
)