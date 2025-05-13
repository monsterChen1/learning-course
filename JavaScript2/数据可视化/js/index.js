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

   // 数据概览栏
   for(let key in data.overview){
        document.querySelector(`span[name='${key}']`).innerHTML = data.overview[key];
   }

   // 薪资折线图
   const tableLine = echarts.init(document.querySelector('#line'));
   tableLine.setOption({
    title: {
        text: '2021全学科薪资走势',
        textStyle: {
            fontSize: 16,
        },
        left: 10,
        top: 15,
    },
    xAxis: {
        data: data.year.map(item => item.month),
        axisLine: {
            lineStyle: {
                color: '#ccc',
                type: 'dashed'
            }
        },
        axisLable: {
            color: '#999'
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        top: '20%'
    },
    series: [
        {
            type: 'line',
            data: data.year.map(item => item.salary),
            smooth: true,
            symbolSize: 10,
            lineStyle: {
                width: 6,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#499FEE' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#5D75F0' // 100% 处的颜色
                    }],
                    global: false
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#499FEE' // 0% 处的颜色
                    }, {
                        offset: 0.8, color: 'rgba(255, 255, 255, 0.2)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255, 255, 255, 0)' // 100% 处的颜色
                    }],
                    global: false
                }
            },
            // labelLine: {
            //     lineStyle: {
            //         type: 'dashed'
            //     }
            // }
        }
    ]
   });

   // 薪资分布图
   const tableSalary = echarts.init(document.querySelector('#salary'));
   let salaryData = data.salaryData.map(item => ({name: item.label, value: item.g_count + item.b_count}));
   tableSalary.setOption({
    title:{
        text: '班级薪资分布',
        top: 15,
        left: 10,
        textStyle: {
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom: '6%',
        left: 'center'
    },
    color: ['#FDA224', '#5097FF', '#3ABCFA', '#34D39A'],
    series: [
        {
            name: '薪资分布',
            type: 'pie',
            radius: ['50%', '64%'],
            center: ['50%', '45%'],
            padAngle: 10,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },
            data: salaryData
        }
    ]
   });

   // 班级每组薪资柱状图
   const divBtns = document.querySelector('#btns');
   const tableLines = echarts.init(document.querySelector('#lines'));
   divBtns.addEventListener('click', (e) => {
        // 只处理按钮事件
        if(e.target.nodeName !== 'BUTTON') return false;
        // 当前分组不做处理
        // if(e.target.className.indexOf('btn-blue') > 0) return false;

        // 样式处理
        divBtns.querySelector('.btn-blue').classList.remove('btn-blue');
        e.target.classList.add('btn-blue');
        // e.target.className += ' btn-blue';
        let groupNum = parseInt(e.target.innerHTML);
        let groupData = data.groupData[groupNum];
        let groupXName = groupData.map(obj => obj.name);
        let groupYHop = groupData.map(obj => obj.hope_salary);
        let groupYSa = groupData.map(obj => obj.salary);

        tableLines.setOption({
            grid: {
                left: 70,
                top: 30,
                right: 30,
                bottom: 50
            },
            tooltip: {
                trigger: 'item'
            },
            xAxis: {
                type: 'category',
                data: groupXName,
                axisLine: {
                    lineStyle: {
                        color: '#ccc',
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            series: [
                {
                    name: '期望薪资',
                    type: 'bar',
                    data: groupYHop,
                },
                {
                    name: '实际薪资',
                    type: 'bar',
                    data: groupYSa
                }
            ],
            color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#34D39A' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(52, 211, 154, 0.2)' // 100% 处的颜色
                    }],
                    global: false
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#499FEE' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(73, 159, 238, 0.2)' // 100% 处的颜色
                    }],
                    global: false
                }
            ]
        });
   });
   divBtns.querySelector('.btn-blue').click();

   // 男女薪资饼状图
   const tableGender = echarts.init(document.querySelector('#gender'));
   let manData = data.salaryData.map(obj => ({name: obj.label, value: obj.b_count}));
   let womanData = data.salaryData.map(obj => ({name: obj.label, value: obj.g_count}));
   tableGender.setOption({
    title: [
        {
            text: '男女薪资分布',
            left: 10,
            top: 10,
            textStyle: {
                fontSize: 16,
            }
        },
        {
            text: '男生',
            left: '50%',
            top: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: 12,
            }
        },
        {
            text: '女生',
            left: '50%',
            top: '85%',
            textAlign: 'center',
            textStyle: {
                fontSize: 12,
            }
        },
    ],
    tooltip: {
        trigger: 'item'
    },
    color: ['#FDA224', '#5097FF', '#3ABCFA', '#34D39A'],
    series: [
        {
            name: '男生',
            type: 'pie',
            radius: 50,
            radius: ['20%', '30%'],
            center: ['50%', '30%'],
            datasetIndex: 1,
            label: {
                show: true,
            },
            data: manData
        },
        {
            name: '女生',
            type: 'pie',
            radius: 50,
            radius: ['20%', '30%'],
            center: ['50%', '70%'],
            datasetIndex: 2,
            label: {
                show: true,
            },
            data: womanData
        }
    ]
   });

   // 籍贯分布
   const tableMap = echarts.init(document.querySelector('#map'));
   const dataList = [
    {name: '南海诸岛', value: 0},
    {name: '北京', value: 0},
    {name: '天津', value: 0},
    {name: '上海', value: 0},
    {name: '重庆', value: 0},
    {name: '河北', value: 0},
    {name: '河南', value: 0},
    {name: '云南', value: 0},
    {name: '辽宁', value: 0},
    {name: '黑龙江', value: 0},
    {name: '湖南', value: 0},
    {name: '安徽', value: 0},
    {name: '山东', value: 0},
    {name: '新疆', value: 0},
    {name: '江苏', value: 0},
    {name: '浙江', value: 0},
    {name: '江西', value: 0},
    {name: '湖北', value: 0},
    {name: '广西', value: 0},
    {name: '甘肃', value: 0},
    {name: '山西', value: 0},
    {name: '内蒙古', value: 0},
    {name: '陕西', value: 0},
    {name: '吉林', value: 0},
    {name: '福建', value: 0},
    {name: '贵州', value: 0},
    {name: '广东', value: 0},
    {name: '青海', value: 0},
    {name: '西藏', value: 0},
    {name: '四川', value: 0},
    {name: '宁夏', value: 0},
    {name: '海南', value: 0},
    {name: '台湾', value: 0},
    {name: '澳门', value: 0},
   ];
   let arr = data.provinceData.map(obj => {
    return {
        name: obj.name.replace(/省|自治区|壮族|回族|维吾尔/g, ''),
        value: obj.value
    }
   });

   tableMap.setOption({
    title:{
        text: '籍贯分布',
        top: 10,
        left: 10,
        textStyle: {
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} 位学员',
        borderColor: 'transparent',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 6,
        left: 'left',
        bottom: '20',
        text: ['6', '0'],
        inRange: {
            color: ['#ffffff', '#0075F0']
        },
        show: true,
        left: 40
    },
    geo: {
        map: 'china',
        roam: false,
        zoom: 1.0,
        label: {
            normal: {
                show: true,
                fontSize: '10',
                color: 'rgba(0, 0, 0, 0.7)'
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)',
                color: '#e0ffff'
            },
            emphasis: {
                areaColor: '#34D39A',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series: [
        {
            name: '籍贯分布',
            type: 'map',
            geoIndex: 0,
            data: dataList.concat(arr)
        }
    ]
   });
});