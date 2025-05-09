let registerForm = document.querySelector('#register-form');
let registerBtn = document.querySelector('#btn-register');
registerBtn.addEventListener('click', async (e) => {
    let formObj = serialize(registerForm, { hash: true });
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
            url: '/register',
            method: 'POST',
            data: formObj
        });

        let { data, message } = res;
        toastBox.innerHTML = message;
        toast.show();
    }catch(e){
        let { response: { status, data: { message } } } = e;

        if(status == 409){
            toastBox.innerHTML = message;
            toast.show();
        }
    }
});