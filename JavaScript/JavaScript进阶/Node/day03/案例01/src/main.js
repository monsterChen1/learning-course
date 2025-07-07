import $ from 'jquery';
import './css/index.css';
import './less/index.less';
import imgUrl from './assets/images/avator.jpeg';
import './assets/fonts/iconfont.css';

$(function() {
    $('#myUL>li:nth-child(2n+1)').css('color', 'red');
    $('#myUL>li:nth-child(2n)').css('color', 'green');
});

const theImg = document.createElement("img");
theImg.src = imgUrl;
document.body.appendChild(theImg);

const icon = document.createElement("i");
icon.className = "iconfont icon-yuqie";
document.body.appendChild(icon);

const fn = () => {
    console.log("Hello, Webpack!");
};
console.log(fn);