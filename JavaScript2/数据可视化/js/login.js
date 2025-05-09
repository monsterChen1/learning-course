let loginForm = document.querySelector('#login-form');
let loginBtn = document.querySelector('#btn-login');
loginBtn.addEventListener('click', async (e) => {
    let formObj = serialize(loginForm, { hash: true });
    let { username = '', password = '' } = formObj;
    
    if(username.length < 2 || username.length > 30){
        toastBox.innerHTML = "用户名字符数2-30之间";
        toast.show();
        return false;
    }else if(password.length < 2 || password.length > 60){
        toastBox.innerHTML = "密码字符数2-60之间";
        toast.show();
        return false;
    }

    try{
        let res = await axios({
            url: '/login',
            method: 'POST',
            data: formObj
        });

        let { data: info, message } = res;
        toastBox.innerHTML = message;
        toast.show();

        localStorage.setItem('username', info.username);
        localStorage.setItem('token', info.token);

        setTimeout(() => {
            location.href = './index.html';
        }, 200);
    }catch(e){
        let { response: { status, data: { message } } } = e;

        if(status == 409){
            toastBox.innerHTML = message;
            toast.show();
        }
    }
});