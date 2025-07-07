import './css/index.css';

let str = '';
for(let i = 0; i < 10; i++){
    str += `<li>这是第${i + 1}个li</li>`;
}
document.querySelector('#myUL').innerHTML = str;