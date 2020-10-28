function onLoad() {
    var queryString = location.search.substring(1);
    var keyValues = queryString.split('&');
    var form = new Map();
    for(var i in keyValues) {
        var element = keyValues[i].split('=');
        form.set(element[0],element[1]);
    }
    string = '';
    form.forEach(function(value,key) {
        string += `
        <div class="form__el">
        <input type="hidden" name="${key}" value='${value}'>
        </div>`;
    });
    document.querySelector(".form__main").innerHTML = string + document.querySelector(".form__main").innerHTML;
}

function onLoadData() {
    var queryString = location.search.substring(1);
    var keyValues = queryString.split('&');
    string = `<div class="data">
    <h2>You entered the following data:</h2>`;
    for(var i in keyValues) {
        string += `<p>${keyValues[i]}</p>`;
    }
    string += `</div>`;
    document.querySelector('.container').innerHTML += string;
}