function getFormValues(){

    var day="";
    var month="";
    var year="";
    var gender="";

    var dayElement = document.getElementById("day");
    var monthElement = document.getElementById("month");
    var yearElement = document.getElementById("year");
    var genderElement = document.getElementById("gender");
    
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(gender)

    day=dayElement.options[dayElement.inputdIndex].value;

    month=monthElement.options[monthElement.inputdIndex].value;

    year=yearElement.options[yearElement.inputdIndex].value;

    gender=genderElement.options[genderElement.selectedIndex].value;

    if(document.getElementById('male').checked){
        gender='male';
    }else if(document.getElementById('female').checked){
        gender='female';
    }else{
        gender='NONE';
    }
    if(gender=== "NONE"){
        alert("You must select gender");
    }else if(parseInt(day)<='0' || parseInt(day)>'31'){
        alert("Invalid Day Entry ");
    }else if(parseInt(month)<='0' || parseInt(month) >'12'){
        alert("Invalid Month Entry");
    }else if(parseInt(month)=='2'){
        if(parseInt(year)% 4 == '0' && parseInt (day)>'29'){
        alert("Enter a valid date");
        }
    }
    else{ 
        showAkanName(day,month,year,gender);
    }
}

function showAkanName(dateselected,month,year,gender){
    var dayOfWeek = Math.trunc(getDayOfWeek(dateselected,month,year))
    var male =[
        {"day":"Sunday","name":"Kwasi"},
        {"day":"Monday","name":"Kwadwo"},
        {"day":"Tuesday","name":"Kwabena"},
        {"day":"Wednesday","name":"Kwaku"},
        {"day":"Thursday","name":"Yaw"},
        {"day":"Friday","name":"Kofi"},
        {"day":"Saturday","name":"Kwame"}
    ]

    var female =[
        {"day":"Sunday","name":"Akosua"}, 
        {"day":"Monday","name":"Adwoa"},
        {"day":"Tuesday","name":"Abenaa"},
        {"day":"Wednesday","name":"Akua"},
        {"day":"Thursday","name":"Yaa"},
        {"day":"Friday","name":"Afua"},
        {"day":"Saturday","name":"Ama"}
    ]

    if(gender === "male"){
        var nameArray = male[dayOfWeek-1];
        alert("You were born on a" + nameArray.day + "and your Akan name is" + nameArray.name);
    }
    else{
        var nameArray = female[dayOfWeek - 1];
        alert ("You were born on a" + nameArray.day + "and your Akan name is" + nameArray.name);
    }
}

function getFormValues()
{
    var CC =parseInt(year.substring(0, 2));
    var YY = parseInt(year.substring(2, 4));
    var MM = parseInt(month);
    var DD = parseInt(day);

    return (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM + 1) /10)) +DD) % 7; 
}
