// number methods

var a="324";
var num = Number(a);
document.write(num +"<br>");

var b= 40.45;
var num = parseInt(b);
document.write(num +"<br>");

var b= 40.45;
var num = parseFloat(b);
document.write(num +"<br>");

var b= 40.45;
var num = isFinite(b);
document.write(num +"<br>");

var b= 40.45;
var num = Number.isInteger(b);
document.write(num +"<br>");

var b= 40.45666;
var num =b.toFixed(2);
document.write(num +"<br>");

// math methods

var c=Math.ceil(3.45);
document.write(c +"<br>");

var c=Math.floor(3.45);
document.write(c +"<br>");

var c=Math.round(3.45);
document.write(c +"<br>");

var c=Math.trunc(3.45);
document.write(c +"<br>");

var c=Math.max(3, 5 ,7 ,89);
document.write(c +"<br>");

var c=Math.min(3, 5 ,7 ,89);
document.write(c +"<br>");

var c=Math.sqrt(25);
document.write(c +"<br>");

var c=Math.cbrt(125);
document.write(c +"<br>");

var c=Math.pow(5,3);
document.write(c +"<br>");

var c=Math.random();
document.write(c +"<br>");

var c=Math.abs(5.45);
document.write(c +"<br>");

var c=Math.PI;
document.write(c +"<br>");

// animation

var ani =0;
var id = setInterval(flow,1000);
function flow(){
    ani = ani+10;
    if(a==100){
        clearInterval(id);
    }
    else{
        var target = document.getElementById("div");
        target.style.width=ani +"%";
    }
}