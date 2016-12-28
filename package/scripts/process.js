"use strict";
//alert("Hello World");

function processForm()
{
    event.preventDefault();
    
    var firstName, lastName, address, password, gender, xResults;
    var flag=false; 
    var errorCount=1;
    
    firstName=document.getElementById('firstname').value;
    lastName=document.getElementById('lastname').value;
    address=document.getElementById('address').value;
    password=document.getElementById('password').value;
  //  gender=document.getElementByClassName('gender').value;
    
    /*
    console.log("FirstName->" + firstName);
    */
    
    xResults = "FirstName->" + firstName + "<br>";
    xResults += "LastName->" + lastName;
    xResults += "<br> Address->" + address;

//    console.log(firstName.length);
 
    if (firstName.length == 0)
        {
            flag=true;
            errorCount++;
            document.getElementById('firstNameErr').className = 'error';
        }
    
    if (firstName.length != 0)
        {
            
            errorCount--;
            document.getElementById('firstNameErr').className = 'hide';
        }
    
    if(lastName.length == 0)
        {
            flag=true;
            errorCount++;
            document.getElementById('lastNameErr').className = 'error';
        }
    
    if(lastName.length != 0)
        {
            errorCount--;
            document.getElementById('lastNameErr').className = 'hide';
        }
     
    if(address.length == 0)
        {
           flag=true;
            errorCount++;
             document.getElementById('addressErr').className = 'error';
        }
    
     if(address.length != 0)
        {
           
            errorCount--;
             document.getElementById('addressErr').className = 'hide';
        }
    
     if(password.length == 0)
        {
           flag=true;
            errorCount++;
             document.getElementById('passwordErr').className = 'error';
        }
    
     if(password.length != 0)
        {
           
            errorCount--;
             document.getElementById('passwordErr').className = 'hide';
        }
    
    
    /*
    if(document.getElementById('genMale').checked)
        {
            errorCount--;
            document.getElementById('genderErr').className = 'hide';
        }
    else if (document.getElementById('genFemale').checked)
        {
            errorCount--;
            document.getElementById('genderErr').className = 'hide';
        }
    else if(document.getElementById('genOthers').checked)
        {
            errorCount--;
            document.getElementById('genderErr').className = 'hide';
        }
    
    **/
    
    if(document.getElementsByName('gender').checked)
        {
            errorCount--;
            document.getElementById('genderErr').className = 'hide';
        }
    else
        {
            errorCount++;
            document.getElementById('genderErr').className = 'error';
        }
    
    
    
    
     if(document.getElementsByName('cars[]').checked)
        {
            errorCount--;
            document.getElementById('carsErr').className = 'hide';
        }
    else
        {
            errorCount++;
            document.getElementById('carsErr').className = 'error';
        }
    
    
    
     if(document.getElementsByName('country').checked)
        {
            errorCount--;
            document.getElementById('contryErr').className = 'hide';
        }
    else
        {
            errorCount++;
            document.getElementById('countryErr').className = 'error';
        }
    
    
  
    
    if(errorCount > 0)
        {
            alert("Error. You forgot to enter at least one value.");
        }
    else
        {
            alert("Form Submit");
            results(xResults);
        }
}


function results(paramResults){
    document.getElementById('results').innerHTML=paramResults;
    
}