import moment from "moment";

// const date = new Date();
// console.log(moment(date).format('YYYY-MM-DD HH:mm:ss'));

setInterval(() => {
    const now = new Date();
    console.log(moment(now).format('YYYY-MM-DD HH:mm:ss'));
}, 1000);