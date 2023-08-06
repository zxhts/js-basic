// 节流
// 单位时间只触发一次

/**
 * 通用的节流函数
 */
function throttle(func, duration = 500){
    let flag = true;
    return function(...args){
        if(!flag) return;
        flag = false;
        setTimeout(() => {
            func.apply(this, args);
            flag = true;
        }, duration)
    }
}

// 测试节流
/**
 * 真正执行的函数
 * @param {*} name 
 */
function clickFun(name){
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    console.log(`${name}被点击了`, currentHour + ":" + currentMinute + ":" + currentSecond);
}

// 返回值赋给新函数
const testFuc = throttle(clickFun, 1000);

// 执行
setInterval(() => {
    testFuc('节流按钮')
}, 100)