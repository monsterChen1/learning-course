// 权限判断
let token = localStorage.getItem('token');
if(!token){
    toastBox.innerHTML = '请先登录!';
    toast.show();
    setTimeout(() => {
        location.href = './login.html';
    }, 200);
}

// 显示当前用户的用户名
let userSpan = document.querySelector('#userSpan');
userSpan.innerHTML = localStorage.getItem('username');

// 退出登录
let logoutBtn = document.querySelector('#logout');
logoutBtn.addEventListener('click', (e) => {
    localStorage.clear();
    location.href = './login.html';
});

// 数据加载
document.addEventListener('DOMContentLoaded', async (e) => {
   let res = await axios({
        url: '/dashboard'
   }); 

   let { data, message } = res;
   
   for(let key in data.overview){
        document.querySelector(`span[name='${key}']`).innerHTML = data.overview[key];
   }

   

   console.log(res);
});