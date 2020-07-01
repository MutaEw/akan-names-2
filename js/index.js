function getFormValues(){

    Var day="";
    var month="";
    var year="";
    var gender="";

    var dayElement = document.getElementById("day");
    var monthElement = document.getElementById("month");
    var yearElement = document.getElementById("year");

    day=dayElement.options[dayElement.selectedIndex].value;

    month=monthElement.options[monthElement.selectedIndex].value;

    year=yearElement.options[yearElement.selectedIndex].value;

    if(document.getElementById('male').checked){
        gender='male';
    }else if(document.getElementById('female').checked){
        gender='female';
    }else{
        gender='NONE';
    }
    if(gender=== "NONE"){
        alert("You must select gender");
    }else if(parseInt(day)<=0 || parseInt(day) >31){
        alert("Enter correct day of the month");
    }else if(parseInt(month)<=0 || parseInt(month) >12){
        alert("Enter correct value of the month");
    }else if(parseInt(month)==2){
        if(parseInt(year)% 4 == 0 && parseInt (day)>29){
        alert("Enter a valid date");
        }
    }
}else{
    showAkanName(day,month,year,gender);
}

}

function showAkanName(datesected,month,year,gender){
    var dayOfWeek = Math.trunc(getDayOfWeek(datesected,month,year))
    var male =[
        {"day":"Sunday","name":"Kwasi"} 
        <li>Monday : Kwadwo</li>
        <li>Tuesday : Kwabena</li>
        <li>Wednesday : Kwaku</li>
        <li>Thursday : Yaw</li>
        <li>Friday : Kofi</li>
        <li>Saturday : Kwame</li>
    ]
}