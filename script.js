function convert(){

let temp=document.getElementById("temp").value;
let unit=document.getElementById("unit").value;
let result=document.getElementById("result");
let error=document.getElementById("error");

error.innerHTML="";
result.value="";

if(temp==="" || isNaN(temp)){
error.innerHTML="Please enter a valid number.";
return;
}

temp=parseFloat(temp);

if(unit==="c"){

if(temp<-273.15){
error.innerHTML="Temperature cannot be below absolute zero!";
return;
}

let f=(temp*9/5)+32;
result.value=f.toFixed(2)+" °F";
}

else if(unit==="f"){

let c=(temp-32)*5/9;

if(c<-273.15){
error.innerHTML="Temperature cannot be below absolute zero!";
return;
}

result.value=c.toFixed(2)+" °C";
}

else{

if(temp<0){
error.innerHTML="Temperature cannot be below absolute zero!";
return;
}

let c=temp-273.15;
result.value=c.toFixed(2)+" °C";
}

}