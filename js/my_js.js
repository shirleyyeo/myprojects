// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email1').value == "" || document.getElementById('msg').value == "") {
alert("Please Fill in the fields! !");
} else {
document.getElementById('form').submit();
alert("Message Submitted Successfully...");
save();
reset();

}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
document.getElementById('popup').style.display ="none";

}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
document.getElementById('popup').style.display = "block";
hide();

}

function save(){
  
  var username = document.getElementById('name').value;
  localStorage.setItem("name", username);
  
  var useremail = document.getElementById('email1').value;
  localStorage.setItem("email1", useremail);
  
  var usermsg = document.getElementById('msg').value;
  localStorage.setItem("msg", usermsg);
 }
function reset() {
    document.getElementById("form").reset();
}