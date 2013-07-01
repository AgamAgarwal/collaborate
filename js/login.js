function sendCreds(){
var user = document.getElementById("id").value;
var pass = document.getElementById("pass").value;

if(user=="" || pass==""){
  document.getElementById("errorMsg").innerHTML = "Error! Please Check your Username or(and) Password";
  document.getElementById("id").style.borderColor = "Red";
  document.getElementById("pass").style.borderColor = "Red";
  document.getElementById("id").value = "";
  document.getElementById("pass").value = "";
}
else{
  document.getElementById("id").style.borderColor = "";
  document.getElementById("pass").style.borderColor = "";
  document.getElementById("errorMsg").innerHTML = "";
  var validate=new XMLHttpRequest();
  validate.onreadystatechange=function(){
    if (validate.readyState==4 && validate.status==200 && validate.responseText == 'OK'){
      window.open("test.html","_parent",true);
    }
    else if(validate.responseText == 'DENY'){
      document.getElementById("errorMsg").innerHTML = "Error! Please Check your Username or(and) Password";
      document.getElementById("id").style.borderColor = "Red";
      document.getElementById("pass").style.borderColor = "Red";
      document.getElementById("id").value = "";
      document.getElementById("pass").value = "";
    }
  }
    
  params="user="+encodeURIComponent(user)+"&pass="+encodeURIComponent(pass);
  validate.open("POST","accounts/validate.php",true);
  validate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  validate.send(params);	
}

}
