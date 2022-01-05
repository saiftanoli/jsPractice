/*
const a=3;
const b=4;
const c= a+b;
document.write(c);
*/

var a = 2
var b = 4
var c = a + b
document.write(c)
document.write("<br>");

let x, y, z;    
x = 5;          
y = 6;          
z = x + y;   
document.write(z)
document.write("<br>");

var fitrstName = "saif";
var lastName = "ullah";
var fullName = fitrstName + lastName;
document.write(fullName)
document.write("<br>");

var carNaumber =112;
var carName= "Honda Civic";
var carInfo = carNaumber + carName;
document.write(carInfo)
document.write("<br>");

//functions
function parametrized(a,b){
    var c=a*b;
    document.write(c +"<br>")
}
parametrized(3,9)

function simpleFunction(){
    var a="yourName"
    document.write(a +"<br>");
}
simpleFunction();

//return statement
function sum (math,eng,phy){
    var s=math+eng+phy;
    return s;
}
var total = sum(33,56,78);
document.write(total +"<br>")

var a =9;
if(a==0){
    document.write("sunday")
}
else if(a==1){
    document.write("monday")
}
else if(a==2){
    document.write("tuesday")
}
else if(a==3){
    document.write("wednesday")
}
else if(a==4){
    document.write("thrusday")
}
else if(a==5){
    document.write("friday")
}
else if(a==6){
    document.write("saturday")
}
else{
    document.write("invalid option.<br>write between 1 to 7")
    document.write("<br>");
}

//while loop

var i=1;
while(i<10){
    document.write(i);
    document.write("<br>");
    i++;
}

//do while loop

var i=1;
do{
    document.write(i);
    document.write("<br>");
    i++;
}while(i<10);

// for loop

for(var i=1; i<20;i++){
    document.write(i+"<br>");
}
document.write("--------------------")
// nested loop
for (var a=1; a<=10; a++){
    for(var b=1; b<=a; b++){
        document.write(b +" ");
    }
    document.write("<br>")
}
document.write("--------------------")
//break
for(var i=1; i<20;i++){
    if(i==15){
        break;
    }
    document.write(i);
}

//continue
for(var i=0; i<=20;i++){
    if(i%5==0){
        continue
    }
    document.write(i);
}

//even
for(var a=1; a<=10; a++){
    if(a % 2 == 0){
        document.write(a+"<br>");
    }
}

//odd
for(var a=1; a<=10; a++){
    if(a % 2 !== 0){
        document.write(a+"<br>");
    }
}

// arrays

var array=[21,"car",34,"busses"];
document.write(array+"<br>")

// arrays length
var array1=[21,"car",34,"busses"];
document.write(array1.length+"<br>")

// switch statement

var day=1;
switch (day) {
  case 0:
    document.write ("Sunday") 
    break;
  case 1:
    document.write ("Monday")
    break;
  case 2:
    document.write ("Tuesday")
    break;
  case 3:
    document.write ("Wednesday")
    break;
  case 4:
    document.write ("Thursday")
    break;
  case 5:
    document.write ("Friday")
    break;
  case  6:
    document.write ("Saturday")
}

//loop for
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for (let i = 0; i < cars.length; i++) {
  document.write(cars[i] + "<br>")
}

// objects

var ID={name : "saifullah", rolln0 : 23, city : "mansehra"};
document.write(ID.city+"<br>")

// sort and reverse method
var a=["saifullah","kamran","asad","faizan"]
document.write(a+"<br>")
a.sort();
document.write(a+"<br>");
a.reverse();
document.write(a+"<br>");

//date method
var now= new Date();
document.write(now +"<br>");

// bollean
var cal=Boolean(3>5);
document.write(cal +"<br>")

//map method
var ary=[12,23,4,555,6];
var cal=ary.map(test);
document.write(cal);
function test(x){
    return x* 10;
}

//events

function hello(){
    document.write("hello everyone")
}

document.getElementById("heading").onclick = click;
function click(){
    document.getElementById("heading").style.color="red";
}

// add events listener methods
document.getElementById("heading-2").addEventListener("click",click)
function click(){
    document.getElementById("heading-2").style.color="brown";
}

//multidimension array

var ary2 = [
    ["saif",12,"male","BS"],
    ["saif",12,"male","BS"],
    ["saif",12,"male","BS"],
    ["saif",12,"male","BS"]
];
for (var a=0; a<4; a++){
    document.write(ary2[a]+"<br>")
}

// array methods
var exe=["sunny","zeeshan",45,"amir"];
exe.sort();
document.write(exe +"<br>");

exe.reverse();
document.write(exe+"<br>");

exe.pop();
document.write(exe+"<br>");

exe.push("its me");
document.write(exe+"<br>");

exe.shift();
document.write(exe+"<br>");

exe.unshift("its me");
document.write(exe+"<br>");

var exe1=["sunny","zeeshan",45,"amir"];
var exe2=["sunny","zeeshan"];
var exe3= exe1.concat(exe2);
document.write(exe3 +"<br>");

var exe1=["sunny","zeeshan",45,"amir"];
var exe2=["sunny","zeeshan"];
var exe3= exe1.join(exe2);
document.write(exe3 +"<br><br>")

var exe1=["sunny","zeeshan",45,"amir"];
var exe3= exe1.slice(1,3);
document.write(exe3 +"<br><br>")

var exe4=["sunny","zeeshan",45,"amir"];
exe4.splice(2,1,"any","both");
document.write(exe4 +"<br><br>")

// for in loop
var obj = {
    name : "saif",
    city : "mansehra",
    rollNo : 324
}
for (var b in obj){
    document.write(b +" : "+obj[b]+"<br>")
}

// for each loop
var obj = [ "saif","mansehra", 324];
obj.forEach(function(value){
    document.write(value +"<br>")
})
    
