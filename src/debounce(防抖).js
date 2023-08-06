// 防抖函数的使用条件
// 1. 频繁调用某个函数
// 2. 造成效率问题
// 3. 需要的结果以最后一次调用为准

/**
 * 通用的防抖函数
 */
function debounce(func, duration = 500) {
    let timerId;
    return function (...args) {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            // 改变this的指向，希望参数透传进来
            func.apply(this, args)
        }, duration);
    };
}


// 测试防抖
/**
 * 真正执行的函数
 * @param {*} name 
 */
function clickFun(name){
    console.log(`${name}被点击了`)
}

// 返回值赋给新函数
const testFuc = debounce(clickFun, 1000);

// 执行
for(let i = 0; i < 5; i++){
    testFuc('按钮');
}
