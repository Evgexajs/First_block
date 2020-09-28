function readyState() {
    
    document.querySelector("#button").onclick = function(){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var password = document.querySelector("#password").value;
        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var confirmPassword = document.querySelector("#confirmPassword").value;
        if (name == "")
            alert("Enter name!");
        else if (reg.test(email) == false)
            alert("Enter email!");
        else if (password == "")
            alert("Enter password!");
        else if (password != confirmPassword)
            {
                alert("Password didn't math try again.");
            }
            else 
            {
                alert("Successful login");
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
                console.log(localStorage.getItem("name"));
                console.log(localStorage.getItem("email"));
                console.log(localStorage.getItem("password"));
            }
    };
}
window.fbAsyncInit = function() {
    FB.init({
        appId      : '685710022075717',
        cookie     : true,
        xfbml      : true,
        version    : 'v8.0'
    });            
    FB.AppEvents.logPageView();        
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response)
});
}
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        alert("Successful login");
        FB.api('/me', function (response) {
            sessionStorage.setItem('name', response.name);
        });
        sessionStorage.setItem('token', response.authResponse.accessToken);
        console.log(sessionStorage.getItem("name"));
        console.log(sessionStorage.getItem("token"));
    } else {
        alert("Please log");
    }
}