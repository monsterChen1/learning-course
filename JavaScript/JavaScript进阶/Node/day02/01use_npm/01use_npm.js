// 导入axios模块
import axios from "axios";

axios({
    url: 'http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html'
}).then(res => {
    console.log(res.data);
});