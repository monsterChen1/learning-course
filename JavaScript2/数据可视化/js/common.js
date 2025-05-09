document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('sidenav-pinned');
        document.body.classList.add('ready');
    }, 200);
});

// 统一配置请求链接前缀
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
        if(err.response.status === 401){
            localStorage.clear();
            location.href = './login.html';
        }

        return Promise.reject(err);
    }
)