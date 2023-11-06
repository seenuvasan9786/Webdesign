var Countdown = new Date("Oct 20, 2022 09:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = Countdown-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    function pad(n)
    {
        if(n<10)
        {
            return "0"+n;
        }
        else
        {
            return n;
        }
    }
    function valid(num)
    {
        if(num<0)
        {
            return 0;
        }
        else
        {
            return num;
        }
    }
    document.getElementById("day").innerText=valid(pad(days));
    document.getElementById("hour").innerText=valid(pad(hours));
    document.getElementById("min").innerText=valid(pad(minutes));
    document.getElementById("sec").innerText=valid(pad(seconds));
},1000);

var temp1=1;
function showposter(){
    if(temp1%2!=0)
    {
        document.getElementById("vname").innerText="Close Poster";
        document.getElementById("poster1").style.display="block";
        temp1++;
    }
    else{
        document.getElementById("vname").innerText="View Poster";
        document.getElementById("poster1").style.display="none";
        temp1++;
    }
    
}
function hideposter()
{
    document.getElementById("poster1").style.display="none";
    document.getElementById("vname").innerText="View Poster";
}
function ccursar(n)
{
    document.getElementById(n).style.cursor="pointer";
}

let w_width=window.innerWidth;
let w_height=window.innerHeight;
if(w_width<w_height)
{
    document.getElementById("fix").style.top="35%";
    document.getElementById("poster1").style.width="60%";
    document.getElementById("poster1").style.height="45%";
    document.getElementById("poster1").style.left="22%";
    document.getElementById("poster1").style.top="1%";
}
