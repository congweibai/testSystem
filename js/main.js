var username = document.getElementById("username"),
password = document.getElementById("password"),
repassword = document.getElementById("repassword"),
userIDname = document.getElementById("userIDname"),
idSelector = document.getElementById("idSelector"),
IDnumber = document.getElementById("IDnumber"),
emailAddress = document.getElementById("emailAddress"),
phoneNum = document.getElementById("phoneNum"),
items = document.querySelectorAll(".container_form_body_reminder");

test1 =false;
test2 = false;
test3 = false;
test4 = false;
test5 =false;
test6 = false;
test7 =false;

username.onfocus = function(){
    items[0].innerHTML = "6-30 letters，nums or apo";
    items[0].style.color = "orange";
}

username.onblur = function(){
    var reg = /^\w{6,30}$/;
    if(this.value == ""){
        items[0].innerHTML = "Please input your user name！";
        items[0].style.color = "red"; 
    }else{
        if(!reg.exec(username.value)){
            items[0].innerHTML = "letters，nums or apo";
            items[0].style.color = "red";
        }else{
            items[0].innerHTML = "Correct";
            items[0].style.color = "green"; 
            test1 = true;
        }
    }
}

password.onfocus = function(){
    items[1].innerHTML = "6-30 letters，nums or apo";
    items[1].style.color = "orange";
}

password.onblur =function(){
    var regHigh = /^[\w.,!?><@#$%^&*\(\):"\{\}\|~\/]{6,20}$/;
    var regMed = /^[a-zA-Z0-9]{6,20}$/;
    var regNum = /^\d{6,20}$/;

    if(this.value ==""){
        items[1].innerHTML = "Please input your password！";
        items[1].style.color = "red";  
    }else{
        if(regNum.exec(this.value)){
            items[1].innerHTML = "<span class='container_pass_box_active'></span><span class='container_pass_box'></span><span class='container_pass_box'></span>";
            test2 = true; 
        }else if(regMed.exec(this.value)){
            items[1].innerHTML = "<span class='container_pass_box_orange'></span><span class='container_pass_box_orange'></span><span class='container_pass_box'></span>";  
            test2 = true;
        }else if(regHigh.exec(this.value)){
            items[1].innerHTML = "<span class='container_pass_box_green'></span><span class='container_pass_box_green'></span><span class='container_pass_box_green'></span>";
            test2 = true;  
        }else{
            items[1].innerHTML = "6-20 letters，nums or apo！";
            items[1].style.color = "red";   
        }
    }
}

repassword.onfocus = function(){
    items[2].innerHTML = "Please input your password again";
    items[2].style.color = "orange";
}

repassword.onblur = function(){
    if(test2){
        if(this.value ==""){
            items[2].innerHTML = "请确认两次密码相同！";
            items[2].style.color = "red";  
        }else{
            if(this.value != password.value){
                items[2].innerHTML = "两次密码不相同！";
                items[2].style.color = "red";   
            }else{
                items[2].innerHTML = "";
                items[2].style.color = "green";
                test3 = true;  
            }
        }
    }else{
        items[2].innerHTML = "Please input correct password";
        items[2].style.color = "red"; 
    }
}

userIDname.onfocus = function(){
    items[3].innerHTML = "Please input your name";
    items[3].style.color = "orange";
}

userIDname.onblur = function(){
    var reg = /\D{2,10}$/;
    if(this.value ==""){
        items[3].innerHTML = "Please input your name！";
        items[3].style.color = "red";  
    }else{
        if(!reg.exec(this.value)){
            items[3].innerHTML = "Please input 2-10 letters！";
            items[3].style.color = "red";   
        }else{
            items[3].innerHTML = "Correct";
            items[3].style.color = "green";
            test4 = true;    
        }
    }
}

IDnumber.onfocus = function(){
    items[5].innerHTML = "Please input your ID number";
    items[5].style.color = "orange"; 
}

IDnumber.onblur = function(){
    var regIDcard = /^\d{17}[0-9x]$/;
    if(this.value ==""){
        items[5].innerHTML = "Please input your ID number！";
        items[5].style.color = "red";   
    }else{
        if(idSelector.value == "chinaID"){
            if(!regIDcard.exec(this.value)){
                items[5].innerHTML = "Valid ID is 18 length number！";
                items[5].style.color = "red";   
            }else{
                items[5].innerHTML = "Correct";
                items[5].style.color = "green";
                test5 = true;    
            }
        }
    }
}

emailAddress.onfocus = function(){
    items[6].innerHTML = "Please input your Email";
    items[6].style.color = "orange";  
}

emailAddress.onblur = function(){
    var reg = /^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
    if(this.value==""){
        items[6].innerHTML = "Please input your Email！";
        items[6].style.color = "red";    
    }else{
        if(!reg.exec(this.value)){
            items[6].innerHTML = "Please input valid Email！";
            items[6].style.color = "red";  
        }else{
            items[6].innerHTML = "Correct";
            items[6].style.color = "green";
            test6 = true;  
        }
    }
}

phoneNum.onfocus = function(){
    items[7].innerHTML = "Please input your Mobile";
    items[7].style.color = "orange";  
}

phoneNum.onblur = function(){
    var reg = /\d{10}/;
    if(this.value==""){
        items[7].innerHTML = "Please input your Mobile！";
        items[7].style.color = "red";    
    }else{
        if(!reg.exec(this.value)){
            items[7].innerHTML = "Please input 10 length num of yourMobile！";
            items[7].style.color = "red";  
        }else{
            items[7].innerHTML = "Correct";
            items[7].style.color = "green";
            test7 = true;  
        }
    }
}