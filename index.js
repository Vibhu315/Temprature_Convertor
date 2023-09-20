let c = document.getElementById("Celsius");
let f = document.getElementById("Fahrenheit");
let k = document.getElementById("Kelvin");

 c.addEventListener("input",function(){
    fer.value=parseFloat((c.value)*9/5)+32;
    kel.value=parseFloat(c.value)+273.15;
 })
 f.addEventListener("input",function(){
    cel.value=parseFloat((f.value-32)*5/9);
    kel.value=parseFloat((f.value-32)*5/9+273.15);
 })
 k.addEventListener("input",function(){
    fer.value=parseFloat((k.value-273.15)*9/5)+32;
    cel.value=parseFloat(k.value)-273.15;
 })

function agian() {
c.value = "";
f.value = "";
k.value = "";
}
