/* Add your JavaScript to this file */
/* Add your JavaScript to this file */
function main() {
    window.onload = function () {
    var mail;
    var mess = document.getElementsByClassName("message")[0];
    var submit = document.getElementsByTagName("button")[0];
    submit.setAttribute("type", "button");
    submit.onclick = function () { mailSubmit() }
    
    function mailSubmit() {
    mail = document.getElementById("email").value;
    if (mail === "") {
    changed();
    }
    else {
    thanks();
    }
    
    function changed() {
    var email = document.getElementsByName("email")[0];
    email.value = '';
    email.placeholder = "Enter a valid email address";
    }
    
    function thanks() {
    if (!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    change();
    }
    else {
    mess.innerHTML = 'Thank You! Your email address ' + mail + ' has been added to our mailing list';
    mess.style.textAlign = 'in-line';
    var email2 = document.getElementsByName("email")[0];
    email2.value = '';
    email2.placeholder = "Enter your email";
    }
    }
    }
    }
    }
    main();
    