function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = principal * rate * years / 100;
    // convert number of years into actual year in the future
    year = parseInt(new Date().getFullYear()) + parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit: <mark>" + principal + "</mark><br>At an interest rate of: <mark>" + rate + "%</mark><br>You will receive an amount of: <mark>" + result + "</mark><br>In the year: <mark>" + year + "</mark>";
    
 }

function showVal(newVal){
    document.getElementById("rate").innerHTML=newVal;
}
        