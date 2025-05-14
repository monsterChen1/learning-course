let token = localStorage.getItem('token');
if(!token){
    localStorage.clear();
    location.href = './login.html';
}

// 获取标签
let tableList = document.querySelector('.list');
let bTotal = document.querySelector('.total');
let openModal = document.querySelector('#openModal');
let selectProv = document.querySelector("select[name='province']");
let selectCity = document.querySelector("select[name='city']");
let selectArea = document.querySelector("select[name='area']");
let submitBtn = document.querySelector("#submit");
let cancelBtn = document.querySelector('#cancel');
let form = document.querySelector('#form');
const fields = [
    'name',
    'age',
    'gender',
    'province',
    'city',
    'area',
    'hope_salary',
    'salary',
    'group'
];
let editID = 0;

// modal
const modal = new bootstrap.Modal(document.querySelector('#modal'), {
    keyboard: false
});

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', async (e) => {
    loadData();

    //加载省份列表
    const provinceList = await axios({
        url: '/api/province'
    });
    loadOption('province', selectProv, provinceList.data);
});

// 省市区联动
selectProv.addEventListener('change', async (e) => {
    if(!e.target.value){
        loadOption('city', selectCity, []);
        loadOption('area', selectArea, []);
        return false;
    }

    const cityList = await axios({
        url: '/api/city',
        params: {
            pname: e.target.value
        }
    });
    loadOption('city', selectCity, cityList.data);
});
selectCity.addEventListener('change', async (e) => {
    if(!e.target.value){
        loadOption('area', selectArea, []);
        return false;
    }

    const areaList = await axios({
        url: '/api/area',
        params: {
            pname: selectProv.value,
            cname: e.target.value
        }
    });
    loadOption('area', selectArea, areaList.data);
    // selectArea.value = areaList.data[0];
});

// 获取数据
async function loadData(){
    // 加载学员列表
    const data = await axios({
        url: '/students'
    });
    let { data: list, message } = data;
    
    // 学生数量
    let count = list.length;
    bTotal.innerHTML = count;

    // 学生列表
    let strArr = list.map(item => {
        return `<tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.gender === 0 ? '男' : '女'}</td>
                    <td>第${item.group}组</td>
                    <td>${item.hope_salary}</td>
                    <td>${item.salary}</td>
                    <td>${item.province + ' ' + item.city + ' ' + item.area}</td>
                    <td data-id="${item.id}">
                        <a href="javascript:;" class="text-success mr-3"><i class="bi bi-pen"></i></a>
                        <a href="javascript:;" class="text-danger"><i class="bi bi-trash"></i></a>
                    </td>
                </tr>`;
    });
    tableList.innerHTML = strArr.join(' ');
}

// 选择框加载数据
function loadOption(type, node, data){
    let str = '';
    if(type === 'province'){
        str += `<option value="">--省份--</option>`;
    }else if(type === 'city'){
        str += `<option value="">--城市--</option>`;
    }else{
        str += `<option value="">--地区--</option>`;
    }
    str += data.map(item => {
        return `<option value="${item}">${item}</option>`
    }).join(' ');
    node.innerHTML = str;
}

// 编辑和删除学生
tableList.addEventListener('click', async (e) => {
    let classList = e.target.classList;
    if(classList.contains('bi-pen')){
        modal.show();
        document.querySelector('.modal-title').innerHTML = '修改学员';

        // 编辑
        let stuId = e.target.parentNode.parentNode.dataset['id'];
        editID = stuId;
        let { data: info, message } = await axios({
            url: `/students/${stuId}`
        });
        loadFormData(info);
    }else if(classList.contains('bi-trash')){
        // 删除
        let stuId = e.target.parentNode.parentNode.dataset['id'];
        try{
            let res = await axios({
                url: `/students/${stuId}`,
                method: 'DELETE'
            });
            toastBox.innerHTML = `学生(${stuId})删除成功`;
            toast.show();

            loadData();
        }catch(e){
            toastBox.innerHTML = `学生(${stuId})删除失败`;
            toast.show();
        }
    }
    return false;
});

// 添加学生弹出框
openModal.addEventListener('click', async (e) => {
    modal.show();
    editID = 0;
    document.querySelector('.modal-title').innerHTML = '添加学员';
    cancelFormDate();
});

// 关闭弹框
cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cancelFormDate();
    modal.hide();
});

// 提交学生信息
submitBtn.addEventListener('click', async (e) => {
    // 阻止默认行为
    e.preventDefault();

    // 数据校验
    let formData = serialize(form, { hash: true });
    let { name = '', age = 0, gender, province = '', city = '', area = '', hope_salary = 0, salary = 0, group = 0} = formData;
    age = parseInt(age);
    gender = parseInt(gender);
    hope_salary = parseInt(hope_salary);
    salary = parseInt(salary);
    group= parseInt(group);
    if(name.length < 1 || name.length > 30){
        toastBox.innerHTML = "学生名字字符数在1-30之间!";
        toast.show();
        return false;
    }else if(!age){
        toastBox.innerHTML = "请填写年龄!";
        toast.show();
        return false;
    }else if(!province || !city || !area){
        toastBox.innerHTML = "请填写完整的籍贯!";
        toast.show();
        return false;
    }else if(!hope_salary){
        toastBox.innerHTML = "请填写期望薪资!";
        toast.show();
        return false;
    }else if(!salary){
        toastBox.innerHTML = "请填写薪资!";
        toast.show();
        return false;
    }else if(group < 1 || group > 8){
        toastBox.innerHTML = "分组在1-8之间!";
        toast.show();
        return false;
    }

    try{
        if(editID){
            let res = await axios({
                url: `/students/${editID}`,
                method: 'PUT',
                data: {
                    name,
                    age,
                    gender,
                    province,
                    city,
                    area,
                    hope_salary,
                    salary,
                    group
                }
            });
            console.log(res);

            if(res.data.id){
                toastBox.innerHTML = res.message;
                toast.show();

                modal.hide();
                loadData();
            }
        }else{
            let res = await axios({
                url: '/students',
                method: 'POST',
                data: {
                    name,
                    age,
                    gender,
                    province,
                    city,
                    area,
                    hope_salary,
                    salary,
                    group
                }
            });

            if(res.data.id){
                toastBox.innerHTML = res.message;
                toast.show();

                modal.hide();
                loadData();
            }
        }
    }catch(e){
        toastBox.innerHTML = "添加失败";
        toast.show();
    }
});

// 表单赋值
async function loadFormData(data){
    const cityList = await axios({
        url: '/api/city',
        params: {
            pname: data.province
        }
    });
    loadOption('city', selectCity, cityList.data);
    const areaList = await axios({
        url: '/api/area',
        params: {
            pname: data.province,
            cname: data.city
        }
    });
    loadOption('area', selectArea, areaList.data);


    fields.forEach(key => {
        if(key === 'gender'){
            form.querySelector(`[id="cb0${data[key] + 1}"]`).checked = true;
        }else{
            form.querySelector(`[name="${key}"]`).value = data[key];
        }
    });
}

// 清空表单信息
function cancelFormDate(){
    fields.forEach(key => {
        form.querySelector(`[name="${key}"]`).value = ''
    });
}