const clock = document.getElementById('clock');
// here instead of hetElementById , you can use querySelector as well...
// const clock = document.querySelector('#clock');


setInterval(function(){
    let date = new Date();
clock.innerHTML = date.toLocaleTimeString();

},1000);




