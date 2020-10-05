
var x = 0;

function visas() {
    x = 1;
}
function masterCards() {
    x = 2;
}

function checkedInputs() {    
    const bikes = document.getElementById('bikes');
    const name = document.getElementById('name');
    const lname = document.getElementById('lname');
    const address = document.getElementById('address');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');
    const phone = document.getElementById('phone');
    const name1 = document.getElementById('name1');
    const lname1 = document.getElementById('lname1');
    const address1 = document.getElementById('address1');
    const state1 = document.getElementById('state1');
    const zip1 = document.getElementById('zip1');
    const phone1 = document.getElementById('phone1');
    const year = document.getElementById('year');
    const month = document.getElementById('month');
    const day = document.getElementById('day');
    const card = document.getElementById('visa');
    const cNumber = document.getElementById('cNumber');
    const expiration = document.getElementById('expiration');
    const cvv = document.getElementById('cvv');
    const nameAcc = document.getElementById('nameAcc');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const bikesValue = document.getElementById('bikes').value.trim();
    const commentValue = document.getElementById('comment').value.trim();
    const nameValue = document.getElementById('name').value.trim();
    const lnameValue = document.getElementById('lname').value.trim();
    const addressValue = document.getElementById('address').value.trim();
    const stateValue = document.getElementById('state').value.trim();
    const zipValue = document.getElementById('zip').value.trim();
    const phoneValue = document.getElementById('phone').value.trim();
    const name1Value = document.getElementById('name1').value.trim();
    const lname1Value = document.getElementById('lname1').value.trim();
    const address1Value = document.getElementById('address1').value.trim();
    const state1Value = document.getElementById('state1').value.trim();
    const zip1Value = document.getElementById('zip1').value.trim();
    const phone1Value = document.getElementById('phone1').value.trim();
    const yearValue = document.getElementById('year').value.trim();
    const monthValue = document.getElementById('month').value.trim();
    const dayValue = document.getElementById('day').value.trim();
    const cNumberValue = document.getElementById('cNumber').value.trim();
    const expirationValue = document.getElementById('expiration').value.trim();
    const cvvValue = document.getElementById('cvv').value.trim();
    const nameAccValue = document.getElementById('nameAcc').value.trim();
    const passwordValue = document.getElementById('password').value.trim();
    const confirmPasswordValue = document.getElementById('confirmPassword').value.trim();
    var tel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var zipt = /^\d{6}$/;
    var cardV = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var cardM = /^(?:5[1-5][0-9]{14})$/;
    var date = /^(0?[1-9]|1[012])[\.\-]\d{2}$/;
    var cvvn = /^([0-9]{3})$/;

    if (bikesValue === ''){setErrorForSelect(bikes, "Select bike")}
    else {setSuccessSelect(bikes)};
    if (nameValue === ''){setErrorFor(name, "Name cannot be blank")}
    else {setSuccess(name)};
    if (lnameValue === ''){setErrorFor(lname, "Lastname cannot be blank")}
    else {setSuccess(lname)};
    if (addressValue === ''){setErrorFor(address, "Address cannot be blank")}
    else {setSuccess(address)};
    if (stateValue === ''){setErrorForSelect(state, "State or region cannot be blank")}
    else {setSuccessSelect(state)};
    if (zipt.test(zipValue) === false){setErrorFor(zip, "Zip cannot be blank")}
    else {setSuccess(zip)};
    if (tel.test(phoneValue) === false){setErrorFor(phone, "Phone cannot be blank")}
    else {setSuccess(phone)};
    if(!document.getElementById("check").checked)
    {
        if (name1Value === ''){setErrorFor(name1, "Name cannot be blank")}
        else {setSuccess(name1)};
        if (lname1Value === ''){setErrorFor(lname1, "Lastname cannot be blank")}
        else {setSuccess(lname1)};
        if (address1Value === ''){setErrorFor(address1, "Address cannot be blank")}
        else {setSuccess(address1)};
        if (state1Value === ''){setErrorForSelect(state1, "State or region cannot be blank")}
        else {setSuccessSelect(state1)};
        if (zipt.test(zip1Value) === false){setErrorFor(zip1, "Zip cannot be blank")}
        else {setSuccess(zip1)};
        if (tel.test(phone1Value) === false){setErrorFor(phone1, "Phone cannot be blank")}
        else {setSuccess(phone1)};
    }
    if (yearValue === ''){setErrorForSelect(year, "Year cannot be blank")}
    else {setSuccessSelect(year)};
    if (monthValue === ''){setErrorForSelect(month, "Month cannot be blank")}
    else {setSuccessSelect(month)};
    if (dayValue === ''){setErrorForSelect(day, "Day cannot be blank")}
    else {setSuccessSelect(day)};
    if (x === 1)
    {
        if (cardV.test(cNumberValue) === false){setErrorFor(cNumber, "Card number cannot be blank")}
        else {setSuccess(cNumber)};
        if (date.test(expirationValue) === false){setErrorFor(expiration, "Expiration cannot be blank")}
        else {setSuccess(expiration)};        
        if (cvvn.test(cvvValue) === false){setErrorFor(cvv, "Cvv cannot be blank")}
        else {setSuccess(cvv)};
        setSuccessSelect(card);
    }else if (x === 2)
    {
        if (cardM.test(cNumberValue) === false){setErrorFor(cNumber, "Card number cannot be blank")}
        else {setSuccess(cNumber)};
        if (date.test(expirationValue) === false){setErrorFor(expiration, "Expiration cannot be blank")}
        else {setSuccess(expiration)};      
        if (cvv.test(cvvValue) === false){setErrorFor(cvv, "Expiration cannot be blank")}
        else {setSuccess(cvv)};
        setSuccessSelect(card);
    }
    else {
        setErrorForSelect(card, "Select card")
    }
    if (nameAccValue === ''){setErrorFor(nameAcc, "Name cannot be blank")}
    else {setSuccess(nameAcc)};
    if (passwordValue === ""){setErrorFor(password, "Password cannot be blank")}
    else if (confirmPasswordValue === ""){
        setSuccess(password)
        setErrorFor(confirmPassword, "Password cannot be blank")
    }
    else if (confirmPasswordValue != passwordValue){
        setSuccess(password)
        setErrorFor(confirmPassword, "Password didn't match try again")
    }
    else {
        setSuccess(password)
        setSuccess(confirmPassword)
    }
    if (document.getElementById("check").checked)
    {
        setSuccess(name1)
        setSuccess(lname1)
        setSuccess(address1)
        setSuccessSelect(state1)
        setSuccess(zip1)
        setSuccess(phone1)
    }
    if (document.querySelector('.error') != null) {
        document.querySelector(".submit").href = "#";
    }
    else 
    {
        document.querySelector(".submit").href = "result.html";
        var string = '';
        string = string + '<div class="form__el"><p>' + bikesValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + commentValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + nameValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + lnameValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + addressValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + stateValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + zipValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + phoneValue + '</p></div>';
        if (!document.getElementById("check").checked)
        {
            string = string + '<div class="form__el"><p>' + name1Value + '</p></div>';
            string = string + '<div class="form__el"><p>' + lname1Value + '</p></div>';
            string = string + '<div class="form__el"><p>' + address1Value + '</p></div>';
            string = string + '<div class="form__el"><p>' + state1Value + '</p></div>';
            string = string + '<div class="form__el"><p>' + zip1Value + '</p></div>';
            string = string + '<div class="form__el"><p>' + phone1Value + '</p></div>';
        }
        string = string + '<div class="form__el"><p>' + yearValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + monthValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + dayValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + cNumberValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + expirationValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + cvvValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + nameAccValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + passwordValue + '</p></div>';
        string = string + '<div class="form__el"><p>' + confirmPasswordValue + '</p></div>';
        localStorage.setItem('data', string)
    }

}

function onLoad() {  
    var str = localStorage.getItem('data');
    document.querySelector(".form__relust").innerHTML = str;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form__el error";
}

function setSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form__el success";
}

function setErrorForSelect(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form__el errorSelect";
}

function setSuccessSelect(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form__el successSelect";
}

function checks()
{
    if (document.getElementById("check").checked)
    {
    document.getElementById("name1").disabled = true;
    document.getElementById("lname1").disabled = true;
    document.getElementById("address1").disabled = true;
    document.getElementById("state1").disabled = true;
    document.getElementById("zip1").disabled = true;
    document.getElementById("phone1").disabled = true;
    }else
    {
        document.getElementById("name1").disabled = false;
        document.getElementById("lname1").disabled = false;
        document.getElementById("address1").disabled = false;
        document.getElementById("state1").disabled = false;
        document.getElementById("zip1").disabled = false;
        document.getElementById("phone1").disabled = false;
    }
}

function years()
{
    var a = document.getElementById("year").value;
    var array = ['January', 'February', 'March', 
    'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];
    var string = '';
    for (i = 0; i < array.length; i++)
    {
        if (a === '2021' && array[i] === 'February')
        {
            array[i] = "February1";
            string = string + '<option value="' + array[i] + '"> February </option>';
        }
        else{
        string = string + '<option value="' + array[i] + '">' + array[i] + '</option>';
        }
    }
    document.getElementById("month").innerHTML=string;
}

function months()
{
    var a = document.getElementById("month").value;
    var array = ['1', '2', '3', '4', '5', '6', '7', 
    '8', '9', '10', '11', '12', '13', '14', '15', 
    '16', '17', '18', '19', '20', '21', '22', '23',
    '24', '25', '26', '27', '28', '29', '30', '31'];
    var string = '';
    
    if ( a === 'April' || a === 'June' || a === 'September' 
    || a === 'November')
    {
        for (i = 0; i < array.length - 1; i++)
        {
            string = string + '<option value="' + array[i] + '">' + array[i] + '</option>';
        }
    }
    else if (a === 'January' || a === 'March' || a === 'May' || a === 'July'
    || a === 'August' || a === 'October' || a === 'December')
    {
        for (i = 0; i < array.length; i++)
        {
            string = string + '<option value="' + array[i] + '">' + array[i] + '</option>';
        }
    }
    else if (a === 'February')
    {
        for (i = 0; i < array.length - 3; i++)
        {
            string = string + '<option value="' + array[i] + '">' + array[i] + '</option>';
        }
    }
    else if (a === "February1")
    {
        for (i = 0; i < array.length - 2; i++)
        {
            string = string + '<option value="' + array[i] + '">' + array[i] + '</option>';
        }
    }
    document.getElementById("day").innerHTML=string;
}