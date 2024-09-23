function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;
    var terms = document.getElementById("terms").checked;
  
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var countryError = document.getElementById("countryError");
    var termsError = document.getElementById("termsError");
  
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    countryError.innerHTML = "";
    termsError.innerHTML = "";
  
    var isValid = true;
  
    // Validating name
    if (name.trim() === "") {
      nameError.innerHTML = "Name must be inputted";
      isValid = false;
    }
  
    // Validating email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || !email.endsWith("@gmail.com")) {
      emailError.innerHTML = "Email must end with @gmail.com";
      isValid = false;
    }
  
    // Validating phone number
    var phonePattern = /^0\d+$/;
    if (!phonePattern.test(phone)) {
      phoneError.innerHTML = "Phone number must start with '0' and contain only numbers";
      isValid = false;
    }
  
    // Validating country
    if (country === "") {
      countryError.innerHTML = "Country must be selected";
      isValid = false;
    }
  
    // Validating terms and conditions
    if (!terms) {
      termsError.innerHTML = "Terms must be checked";
      isValid = false;
    }
  
    return isValid;
  }  