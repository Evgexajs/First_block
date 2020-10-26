
let user = {
    "name" : '',
    "password" : '',
    "email" : '',
    "preferredLodgings" : [],
    "checkName" : function() {
        this.name = document.getElementById('name').value.trim();
    },
    "checkPassword" : function() {
        this.password = document.getElementById('password').value.trim();
    },
    "checkConfirmPassword" : function() {
        if ( document.getElementById('password').value.trim() === document.getElementById('confirmPassword').value.trim() )
            return true
        else
            return false
    },
    "checkEmail" : function() {
        this.email = document.getElementById('email').value.trim();
    },
}


function checkedInputs() {
    var testName = /^[A-Za-z0-9_-]{3,16}$/;
    var testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    var testPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    user.checkName();
    user.checkPassword();
    user.checkEmail();
    if (!testName.test(user.name)){setErrorFor(name, "The name must be more than 2 characters")}
    else {setSuccess(name)};
    if (!testPassword.test(user.password)){setErrorFor(password, "Password must have digit, special character, lowercase letter, uppercase letter and no less than 6 characters long")}
    else {
        setSuccess(password)        
        if (!user.checkConfirmPassword()){setErrorFor(confirmPassword, "Passwords do not match")}
        else {setSuccess(confirmPassword)};
    };
    if (!testEmail.test(user.email)){setErrorFor(email, "Incorrect email")}
    else {setSuccess(email)};
    indexArr = 0;
    for (i = 1; i < 9; i++)
    {
        id = `checkbox${i}`;
        if (document.getElementById(id).checked)
        {
            user.preferredLodgings[indexArr] = document.getElementById(id).value;
            indexArr += 1;
        }
    }
    if (document.querySelector('.error') != null || document.querySelector('.errorSelect') != null) {
        document.querySelector(".submit").href = "#";
    }
    else 
    {
        console.log(user);
        json = JSON.stringify(user);
        console.log(json);
        saveCard();
    }
}

function saveCard() {
    let user2 = JSON.parse(json);
    string = '';
    for (i in user2.preferredLodgings)
        string += `${user2.preferredLodgings[i]}<br>`;
    document.querySelector('.card').innerHTML = `<h1>Profile</h1>
    <h2>Username</h2>
    <p>${user2.name}</p>
    <h2>Email address</h2>
    <p>${user2.email}</p>
    <h2>Preferred Lodgings</h2>
    <p>${string}</p>`;
    document.querySelector('.card').style.display = "block";
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "createAccount__el error";
}

function setSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = "createAccount__el success";
}