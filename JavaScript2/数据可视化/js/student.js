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
    loadOption(selectProv, provinceList.data);
});

// 省市区联动
selectProv.addEventListener('change', async (e) => {
    const cityList = await axios({
        url: '/api/city',
        params: {
            pname: e.target.value
        }
    });
    console.log(cityList);
    loadOption(selectCity, cityList.data);
});
selectCity.addEventListener('change', async (e) => {
    const areaList = await axios({
        url: '/api/area',
        params: {
            pname: selectProv.value,
            cname: e.target.value
        }
    });
    loadOption(selectArea, areaList.data);
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
                    <td>${item.province+item.city+item.area}</td>
                    <td data-id="${item.id}">
                        <a href="javascript:;" class="text-success mr-3"><i class="bi bi-pen"></i></a>
                        <a href="javascript:;" class="text-danger"><i class="bi bi-trash"></i></a>
                    </td>
                </tr>`;
    });
    tableList.innerHTML = strArr.join(' ');
}

// 选择框加载数据
function loadOption(node, data){
    node.innerHTML = data.map(item => {
        return `<option value="${item}">${item}</option>`
    }).join(' ');
}

// 删除学生
tableList.addEventListener('click', async (e) => {
    let classList = e.target.classList;
    if(classList.contains('bi-pen')){
        // 编辑
        let stuId = e.target.parentNode.parentNode.dataset['id'];
        modal.show();
        console.log('pen');
    }else if(classList.contains('bi-trash')){
        // 删除
        let stuId = e.target.parentNode.parentNode.dataset['id'];
        try{
            let res = await axios({
                url: `/students/${stuId}`,
                method: 'DELETE'
            });
            e.target.parentNode.parentNode.parentNode.remove();
            toastBox.innerHTML = `学生(${stuId})删除成功`;
            toast.show();
        }catch(e){
            toastBox.innerHTML = `学生(${stuId})删除失败`;
            toast.show();
        }
    }
    return false;
});

// 添加学生
openModal.addEventListener('click', async (e) => {
    modal.show();
});