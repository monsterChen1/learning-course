import './css/index.css';
import './less/index.less';
import './assets/image/avator.jpeg';
import * as echarts from 'echarts';
import imgUrl from './assets/image/avator.jpeg';

let thir = document.querySelector('#thir');
thir.style.height = '100px';
thir.style.backgroundImage = `url(${imgUrl})`;

let main = document.querySelector('#main');
let demo = echarts.init(main);
let option = {
    xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

demo.setOption(option);