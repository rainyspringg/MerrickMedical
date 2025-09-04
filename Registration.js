
function validateUserData() {
	
    var error = 0;
	error = validateUserName(error);
	error = validateEmail(error);
	error = validatePass(error);
	error = validatePass2(error);
	error = validateFirstName(error);
	error = validateSurname(error);
	error = validateGender(error);
	error = validateAddress(error);
	error = validateSuburb(error);
	error = validatePcode(error);
	error = validateState(error);
	error = validatePhone(error);
	
	if(error == 0)
		return true;
	else
		return false;
 }
 
  function formReset() {
	  
  document.getElementById("form").reset();
  return errorFound;
}

 
 function validateEmail(errorFound) {
    var userdata = document.getElementById("email").value;
    var regExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (userdata == "") {
        document.getElementById("errorEmail").innerHTML = "* Email Address cannot be blank.";
          return ++errorFound;

      }
   else if(regExpression.test(userdata)) { // no error found
        document.getElementById("errorEmail").innerHTML = "*";
        return errorFound;  

    }
    else {
        document.getElementById("errorEmail").innerHTML = "* The email address is not valid";
        return ++errorFound;  
    }
}
 
 function validateUserName(errorFound) 
    {
      var userdata = document.getElementById("userName").value;
      var illegalChars = /\W/;


      if (userdata == "" || userdata.length < 6 || userdata.length > 20) 
      {
        document.getElementById("errorUserName").innerHTML = "* Please enter your Username between 6 to 20 characters.";
          return ++errorFound;
      }

        if (illegalChars.test(userdata)) 
        {
          //document.getElementById("errorUserName").innerHTML = "* Your username cannot contain any special characters";
            alert("Your username cannot contain any special characters")
              return ++errorFound;
        }

        else 
        {
          document.getElementById("errorUserName").innerHTML = "*";
          return errorFound;
        } 
    }
	
function validatePass(errorFound) {
          
    var userdata = document.getElementById("pass").value;

      if (userdata == "" || userdata.length < 8 || userdata.length > 12) 
      {
        document.getElementById("errorPass").innerHTML = "* Please enter your Password between 8 to 12 characters.";
          return ++errorFound;
      }

      else 
      {
        document.getElementById("errorPass").innerHTML = "*";
        return errorFound;


      }
    }
	
function validatePass2(errorFound) {
      var userdata = document.getElementById("pass").value;
      var userdata2 = document.getElementById("pass2").value
    
      if (userdata2 == "" || userdata2.length < 8 || userdata2.length > 12) 
      {
        document.getElementById("errorPass2").innerHTML = "* Please enter your Password between 8 to 12 characters.";
          return ++errorFound;
      }

      else if (userdata2 != userdata || userdata2 == "") 
      {
        document.getElementById("errorPass2").innerHTML = "* 'Password' and 'Confirm Password' are not matching.";
          return ++errorFound;
      }
      else 
      {
        document.getElementById("errorPass2").innerHTML = "*";
         return errorFound;
      }
    }

function validateFirstName(errorFound) 
    {
      var userdata = document.getElementById("firstName").value;
      var illegalChars = /\W/;
      var regExpression = /^[A-Za-z]+$/;
     

      if (userdata == "" || userdata.length < 3 || userdata.length > 20) 
      {
        document.getElementById("errorFirstName").innerHTML = "* Please enter your First Name between 3 to 20 characters.";
          return ++errorFound;
      }

      else if ((illegalChars.test(userdata)) || !(regExpression.test(userdata)))
        {
          document.getElementById("errorFirstName").innerHTML = "* Your First Name cannot contain any special characters or numbers";
              return ++errorFound;
        }

        else 
        {
          document.getElementById("errorFirstName").innerHTML = "*";
          return errorFound;
        } 
    }

function validateSurname(errorFound) 
    {
      var userdata = document.getElementById("surname").value;
      var illegalChars = /\W/;
      var regExpression = /^[A-Za-z]+$/;

      if (userdata == "" || userdata.length < 3 || userdata.length > 20) 
      {
        document.getElementById("errorSurname").innerHTML = "* Please enter your Surname between 3 to 20 characters.";
          return ++errorFound;
      }

        else if ((illegalChars.test(userdata)) || !(regExpression.test(userdata)))
        {
          document.getElementById("errorSurname").innerHTML = "* Your Surname cannot contain any special characters or numbers";
              return ++errorFound;
        }

        else 
        {
          document.getElementById("errorSurname").innerHTML = "*";
          return errorFound;
        } 
    }
	
function validateGender(errorFound) 
    {
      var userdata = document.getElementById("male");
      var userdata1 = document.getElementById("female");
      var userdata2 = document.getElementById("other");
      
      if (userdata.checked == true || userdata1.checked == true || userdata2.checked == true)
      {
      document.getElementById("errorGender").innerHTML = "*";
       return errorFound;

      }
      else 
      {
      document.getElementById("errorGender").innerHTML = "* Please select your gender";
      return ++errorFound; 
      }
    }


function validateAddress(errorFound) 
    {
      var userdata = document.getElementById("address").value;
      var illegalChars = /\W/;
      

      if (userdata == "" || userdata.length < 3 || userdata.length > 50) 
      {
        document.getElementById("errorAddress").innerHTML = "* Please enter your Address between 3 to 50 characters.";
          return ++errorFound;
      }

        else if (illegalChars.test(userdata))
        {
          document.getElementById("errorAddress").innerHTML = "* Your address cannot contain any special characters";
              return ++errorFound;
        }

        else 
        {
          document.getElementById("errorAddress").innerHTML = "*";
          return errorFound;
        } 
    }
function validateSuburb(errorFound) 
    {
      var userdata = document.getElementById("suburb").value;
      var illegalChars = /\W/;
      

      if (userdata == "" || userdata.length < 3 || userdata.length > 50) 
      {
        document.getElementById("errorSuburb").innerHTML = "* Please enter your Suburb name between 3 to 50 characters.";
          return ++errorFound;
      }

        else if (illegalChars.test(userdata))
        {
          document.getElementById("errorSuburb").innerHTML = "* Your suburb cannot contain any special characters";
              return ++errorFound;
        }

        else 
        {
          document.getElementById("errorSuburb").innerHTML = "*";
          return errorFound;
        } 
    }

function validatePcode(errorFound) 
    {
      var userdata = document.getElementById("pcode").value;
      var illegalChars = /\W/;
      var regExpression = /^[A-Za-z]+$/;
     
      if (userdata == "") 
      {
        document.getElementById("errorPcode").innerHTML = "* Please enter your post code.";
          return ++errorFound;
      }

        else if (illegalChars.test(userdata) || (regExpression.test(userdata)) || userdata.length != 4)
        {
          document.getElementById("errorPcode").innerHTML = "* Please enter valid 4 digit post code";
              return ++errorFound;
        }

        else 
        {
          document.getElementById("errorPcode").innerHTML = "*";
          return errorFound;
        } 
        
      }

function validateState(errorFound)
{
var userdata = document.getElementById("state").value;

if (userdata == 0)
{
   document.getElementById("errorState").innerHTML = "* Please enter your State";
   return ++errorFound;         
}
else {
 document.getElementById("errorState").innerHTML = "*";
  return errorFound;
    }
}

function validatePhone(errorFound) 
    {
      var userdata = document.getElementById("phone").value;
      var illegalChars = /\W/;
      var regExpression = /^[A-Za-z]+$/;
     
      if (userdata == "" || userdata.length < 8 || userdata.length > 10 ) 
      {
        document.getElementById("errorPhone").innerHTML = "Please enter valid phone number(8 to 10 digits).";
          return ++errorFound;
      }

      else 
      {
        document.getElementById("errorPhone").innerHTML = "";
      }

        if (illegalChars.test(userdata) || (regExpression.test(userdata)))
        {
          document.getElementById("errorPhone").innerHTML = "Your phone number should contain only numbers";
              return ++errorFound;
        }

        else 
        {
          document.getElementById("errorPhone").innerHTML = "";
          return errorFound;
        } 
        
      }