let user = {
  "name" : '',
  "lname" : '',
}

let date = {
  "date" : '',
}

let discount = {
  "numberOfPurcase" : 0,
  "getNumberOfPurcase" : function() {
    if ( localStorage.getItem("numberOfPurcase") !== null )
      this.numberOfPurcase = localStorage.getItem("numberOfPurcase");
    return this.numberOfPurcase
  },
  "changeNumberOfPurcase" : function() {
    this.numberOfPurcase += 1;
  },
  "saveNumberOfPurcase" : function() {
    localStorage.setItem("numberOfPurcase", user.countBuy);
  },
}

let form = {
  "name" : '',
  "lname" : '',
  "date" : '',
  "cardNumber" : '',
  "expiration" : '',
  "cvv" : '',
}


function onLoad() {
  let myCalendar = new VanillaCalendar ({
    selector: "#myCalendar",
    pastDates: false,
    onSelect: (data) => {
      date = data
      form.date = date.date
    },
  })

  if (discount.getNumberOfPurcase() === 0)
    document.querySelector('.discount').innerHTML = "you don't have discount, after first buying you get 5% discount"
  else
    document.querySelector('.discount').innerHTML = "you have 5% discount"
}

var x = 0;
function visas() {x = 1;}
function masterCards() {x = 2;}

function checkedInputs() {
  
  const name = document.getElementById('name');
  const lname = document.getElementById('lname');
  const card = document.getElementById('visa');
  const cNumber = document.getElementById('cNumber');
  const expirationDate = document.getElementById('expiration');
  const cvv = document.getElementById('cvv');
  const dateCalendar = document.getElementById('myCalendar');

  
  form.name = document.getElementById('name').value.trim();
  form.lname = document.getElementById('lname').value.trim();
  form.cardNumber = document.getElementById('cNumber').value.trim();
  form.expiration = document.getElementById('expiration').value.trim();
  form.cvv = document.getElementById('cvv').value.trim();  

  var testVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var testMasterCard = /^(?:5[1-5][0-9]{14})$/;
  var expirationDateTest = /^(0?[1-9]|1[012])[\.\-]\d{2}$/;
  var cvvn = /^([0-9]{3})$/;

  if (form.name === ''){setErrorFor(name, "Name cannot be blank")}
  else {setSuccess(name)};
  if (form.lname === ''){setErrorFor(lname, "Lastname cannot be blank")}
  else {setSuccess(lname)};
  if (date.date === ''){setErrorForSelect(dateCalendar, "Select date")}
  else {setSuccessSelect(dateCalendar)}
  if (x === 1)
  {
      if (testVisa.test(form.cardNumber) === false){setErrorFor(cNumber, "Card number cannot be blank")}
      else {setSuccess(cNumber)};
      if (expirationDateTest.test(form.expiration) === false){setErrorFor(expirationDate, "Expiration cannot be blank")}
      else {setSuccess(expiration)};        
      if (cvvn.test(form.cvv) === false){setErrorFor(cvv, "Cvv cannot be blank")}
      else {setSuccess(cvv)};
      setSuccessSelect(card);
  }else if (x === 2)
  {
      if (testMasterCard.test(form.cardNumber) === false){setErrorFor(cNumber, "Card number cannot be blank")}
      else {setSuccess(cNumber)};
      if (expirationDateTest.test(form.expiration) === false){setErrorFor(expirationDate, "Expiration cannot be blank")}
      else {setSuccess(expirationDate)};      
      if (cvvn.test(form.cvv) === false){setErrorFor(cvv, "Expiration cannot be blank")}
      else {setSuccess(cvv)};
      setSuccessSelect(card);
  }
  else {
      setErrorForSelect(card, "Select card")
  }

  if (document.querySelector('.error') != null || document.querySelector('.errorSelect') != null) {
    document.querySelector(".submit").href = "#";
  }
  else 
  {

    user.name = form.name;
    user.lname = form.lname;
    discount.changeNumberOfPurcase(),
    console.log(user);
    console.log(date);
    console.log(discount);
    console.log(form);
    discount.saveNumberOfPurcase(),
    setTimeout(function(){
      window.location.reload(1);
    }, 5000);
  }
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
