
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

if(sessionStorage.getItem('user') == CORRECT_USER && sessionStorage.getItem('password') == CORRECT_PASS)
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
  

        if(sessionStorage.getItem('user') == CORRECT_USER && sessionStorage.getItem('password') == CORRECT_PASS)
        {
           alert("Login thành công!");
           window.location = "index.html";
           userDisplay.textContent = sessionStorage.getItem('user');
           modalLogin.classList.remove('active-open');
           e.preventDefault();
        
        }
        else {
           alert("Username or password not match");
           
    }
    
    
}

//Sider
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4)
      {
        counter = 1;
      }
    }, 3000);