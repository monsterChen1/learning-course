function deepClone(newO, twoObj, map){
    if(!map){
        map = new Map();
    }
    for(let key in twoObj){
        let value = twoObj[key];
        if(value instanceof Array){
            newO[key] = [];
            deepClone(newO[key], value);
        }else if(value instanceof Object){
            newO[key] = {};
            if(!map.has(value)){
                map.set(value, 1);
                deepClone(newO[key], value, map);
            }
        }else{
            newO[key] = value;
        }
    }
}

export default {
    deepClone
}