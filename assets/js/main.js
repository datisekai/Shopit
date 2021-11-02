
var modalOverlay = document.querySelector('.modal__overlay');
var modalLogin = document.querySelector('.modal__login');
var modalClose = document.querySelector('.modal__content-btn-close');
var btnLogin = document.querySelector('.header__login');

if(!sessionStorage.getItem('user'))
{
    btnLogin.addEventListener('click', function(){
        modalLogin.classList.add('active-open');
    });
}
// else {
//     btnLogin.addEventListener('click', function(){
//         window.open('info.html');
//     });
// }
modalOverlay.addEventListener('click', function(){
    modalLogin.classList.remove('active-open');
});

modalClose.addEventListener('click', function(){
    modalLogin.classList.remove('active-open');
});

//xu ly login

var CORRECT_USER = 'admin';
var CORRECT_PASS = 'admin';
window.sessionStorage;
var ipUser = document.getElementById('username');
var ipPass = document.getElementById('password');

var formLogin = document.getElementById('form-login');
var user_display = document.querySelector("#user__display");
var clickLogin = document.querySelector('.modal__content-btn');

if(sessionStorage.getItem('user') == localStorage.getItem('user') && sessionStorage.getItem('password') == localStorage.getItem('password'))
{
    user_display.textContent = sessionStorage.getItem('user');
}
else {
    user_display.textContent = "LOGIN";
}


if(formLogin.attachEvent){
    clickLogin.addEventListener('click', onFormLogin);
}
else {
    clickLogin.addEventListener('click', onFormLogin);
}

function onFormLogin(e)
{

    var username = ipUser.value;
    var password = ipPass.value;

    sessionStorage.setItem('user',username);
    sessionStorage.setItem('password',password);
  

        if(sessionStorage.getItem('user') == localStorage.getItem('user') && sessionStorage.getItem('password') == localStorage.getItem('password'))
        {
           alert("Login thành công!");
           window.location = "index.html";
           user_display.textContent = localStorage.getItem("user");
           modalLogin.classList.remove('active-open');
           e.preventDefault();
        
        }
        else {
           alert("Username or password not match");
           
    }
    
    
}

//xuly register
var signUp = document.getElementById('signup');
var signIn = document.getElementById('signin');
var modalSignUp = document.getElementById('modal-signup');
var modalSignIn = document.getElementById('modal-signin');
var buttonLogin = document.getElementById('login');
var buttonRegis = document.getElementById('register');
var modalEmail = document.getElementById('modal__email');
var modalHeading = document.querySelector('.modal__content-heading');

signUp.addEventListener('click',onSignUp);

signIn.addEventListener('click',onSignIn);

function onSignIn(e)
{
    buttonLogin.style.display = "";
    buttonRegis.style.display = "none";
    modalSignUp.style.display = "";
    modalSignIn.style.display = "none";
    modalEmail.style.display = "none";
    modalHeading.textContent = "LOGIN";
}

function onSignUp(e)
{
    buttonLogin.style.display = "none";
    buttonRegis.style.display = "";
    modalSignUp.style.display = "none";
    modalSignIn.style.display = "";
    modalEmail.style.display = "";
    modalHeading.textContent = "REGISTER";
}


var ipEmail = document.getElementById('email');

buttonRegis.addEventListener('click',onFomRegister);


function onFomRegister(e)
{
    var username = ipUser.value;
    var password = ipPass.value;
    var email = ipEmail.value;
    if(username && password && email != "")
    {
        localStorage.setItem("user",username);
        localStorage.setItem("password",password);
        localStorage.setItem("email",email);
        alert("Đăng kí thành công, vui lòng đăng nhập!");
        onSignIn();
    }
}


//xuly logout
var btnLogout = document.getElementById('logout');

btnLogout.addEventListener('click',onFormLogOut);

function onFormLogOut(e)
{
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('password');
}

//Slider
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4)
      {
        counter = 1;
      }
    }, 3000);
// Render product
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
    
}
