function suijishu(m,n) {
    return Math.ceil(Math.random()* (n-m+1))+m-1;
}
function zhongjianglv(x) {
   var num = suijishu(1,100);

    if(num < x ){
         console.log('恭喜中奖!')
    }else {
        console.log('非常遗憾!')
    }
    return x+'%'
}
// module.exports = zhongjianglv;


//调用zhongjianglv(); x表示中奖率