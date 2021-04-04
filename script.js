function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = principal * rate * years / 100;
    // convert number of years into actual year in the future
    document.getElementById("result").innerHTML = "If you deposit:" + principal + "<br>At an interest rate of:" + rate + "<br>You will receive an amount of:" + result + "<br>In the year:" + years ;
    
 }

function showVal(newVal){
    document.getElementById("rate").innerHTML=newVal;
}
        