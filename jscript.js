function validateForm() {
    var fname = document.getElementById('fname').value;
    var msg = document.getElementById('msg').value;
    var email = document.getElementById('email').value;

    var fnameError = document.getElementById('fnameError');
    var msgError = document.getElementById('msgError');
    var emailError = document.getElementById('emailError');
 
    fnameError.textContent = "";
    msgError.textContent = "";
    emailError.textContent = "";

    var isValid = true;

        if (fname.trim() === "") {
            fnameError.textContent = "Name is required";
            isValid = false;
        }else if (!isValidName(fname)) {
            fnameError.textContent = "Invalid Name";
            isValid = false;
        }
        if (email.trim() === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!isValidEmail(email)) {
            emailError.textContent = "Invalid email address";
            isValid = false;
        }
        return isValid;
}

        function isValidEmail(email) {
 
            var re =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.\.-]+\.[a-zA-Z]{2,4}$/;
            return re.test(email);
        }
        function isValidName(fname) {
 
            var re =  /^[a-zA-Z]{1,}$/;
            return re.test(fname);
        }
        function onSubmitSuccess() {
            alert("Message sent successfully!");
        }
        function showPopup() {
            alert("Still working on this project! 😊");
        }
        
