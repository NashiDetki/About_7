const time = document.querySelector('.header-time');
console.log(time);
let counter = setInterval(function(){
    let date = new Date();
    time.innerHTML = date.getHours() + ':' + date.getMinutes();
}, 1000);
const dateObj = document.querySelector('.header-date');
const date = new Date();
dateObj.innerHTML = date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear();
console.log(dateObj);
