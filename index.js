let c = document.getElementById("Celsius");
let f = document.getElementById("Fahrenheit");
let k = document.getElementById("Kelvin");
function convert(){
    let cinput = parseFloat(c.value);
    let  finput=(cinput * 9 / 5) + 32;
    let kinput=cinput + 273.15;
        f.value=finput;
        k.value=kinput;

}
