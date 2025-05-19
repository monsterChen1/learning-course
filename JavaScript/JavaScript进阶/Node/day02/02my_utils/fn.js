// 防抖函数
function debounce(fn){
    let timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this)
        }, 1000);
    }
}

// 节流函数
function throttle(fn){
    return function() {
        if(fn.t) return;
        fn.t = setTimeout(() => {
            fn.call(this);
            fn.t = null;
        }, 500);
    }
}

export default {
    debounce,
    throttle
}