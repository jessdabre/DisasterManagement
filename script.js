
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.toggle-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const description = this.nextElementSibling;

            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });
});

function clearErrors(){

    errors=document.getElementsByClassName('fromerror');
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function seterror(id,error){
//sets error inside tag of id
element=document.getElementById(id);
element.getElementsByClassName('fromerror')[0].innerHTML=error;
}
function validateForm(){
var returnval=true;
clearErrors();
var name=document.forms['myform']["fname"].value;
var namePattern = /^[^0-9]+$/;

    if (!namePattern.test(name)) {
        setError("name", "Name cannot have numbers");
    returnval=false;

}

if(name.length==0){
    seterror("name","Enter your name");
    returnval=false;
}

var phone1=document.forms['myform']["fphone1"].value;
if(phone1.length!=10){
seterror("phone1","enter valid phone number");
returnval=false;
}

var phone2=document.forms['myform']["fphone2"].value;
if(phone2.length!=10){
seterror("phone2","enter valid phone number");
returnval=false;
}

if(phone2.value<0){
    seterror("phone2","enter valid phone number");
    returnval=false;
    }


var bg=document.forms['myform']["fbg"].value;
var bloodGroupPattern = /^(A|B|AB|O|a|b|ab|o)[\+|-]$/;

    if (!bloodGroupPattern.test(bg)) {
seterror("bg","enter valid blood group");
returnval=false;
}
return returnval;
}


