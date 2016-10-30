/**
 * Created by Shin on 30/10/2016.
 */

module.exports = function countdown(tick) {
    let count = 10;
    let timer = setInterval(_ => {
        tick(count--);
        console.log('count ' , count);
        if(count === 0){
            clearInterval(timer);
        }
    }, 1000);
};