import axios from 'axios';

axios({
    url: 'http://ajax-api.itheima.net/api/books'
}).then(({ data: res }) => {
    if(res.data.length == 0) alert('No data found');

    document.querySelector('#myUL').innerHTML = res.data.map(book => {
        return `<li>${book.name} - ${book.author}</li>`;
    });
});