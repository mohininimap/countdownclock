// getTime() returns the number of milliseconds
var countDownDate=new Date("Feb 16, 2023 00:00:00").getTime();
var x=setInterval(function(){

    //get current date
    var now=new Date().getTime();
    var distance=countDownDate-now;

    // The Math.floor() method rounds a number down to the nearest integer.
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor(distance%(1000*60*60)/(1000*60));
    var seconds=Math.floor(distance%(1000*60)/1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

},1000);
