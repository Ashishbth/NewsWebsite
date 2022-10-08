const user = document.getElementById('name').value;
const email = document.getElementById('email').value;
const btn = document.getElementById('btn');

function validate(){
 if(user == ""){
    alert("Please Enter the required field")
 }
}


btn.addEventListener('click' , validate);