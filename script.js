function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    result = principal * years * rate / 100;

    // convert number of years into actual year in the future
    document.getElementById("result").innerHTML = result;
    document.getElementById("principal_").value = "principal"
    document.getElementById("rate_").value = "rate"
    document.getElementById("years_").value = "years"
}

function showVal(newVal){
    document.getElementById("rate").innerHTML=newVal;
}
        