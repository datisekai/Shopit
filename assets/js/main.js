
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
    modalLogin.style.display = "none";
});

modalClose.addEventListener('click', function(){
    modalLogin.classList.remove('active-open');
    modalLogin.style.display = "none";
});

//xu ly login

var CORRECT_USER = 'admin';
var CORRECT_PASS = 'admin';
window.sessionStorage;
var ipUser = document.getElementById('username');
var ipPass = document.getElementById('password');
var errorLogin = document.getElementById('errorLogin');
var formLogin = document.getElementById('form-login');
var user_display = document.querySelector("#user__display");
var clickLogin = document.querySelector('.modal__content-btn');
user_display.textContent = "LOGIN";
if(sessionStorage.getItem('user') != "" && sessionStorage.getItem('password') != "" )
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
           errorLogin.textContent = "Username or password not match";
           errorLogin.style.color = "red";
           
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
    var checkRegister = true;
   

    if(username == "" || username.length < 5)
    {
        document.getElementById('errorUser').textContent = "Username phải lớn hơn 5 kí tự!";
        document.getElementById('errorUser').style.color = "red";
        checkRegister = false;
    }

    if(password == "" || password.length < 5)
    {
        document.getElementById('errorPass').textContent = "Password phải lớn hơn 5 kí tự!";
        document.getElementById('errorPass').style.color = "red";
        checkRegister = false;
    }

    if(email == "" || email.indexOf("@") == -1)
    {
        document.getElementById('errorEmail').textContent = "Bạn phải nhập đúng định dạng email!";
        document.getElementById('errorEmail').style.color = "red";
        checkRegister = false;
    }

    if(checkRegister)
    {
        localStorage.setItem("user",username);
        localStorage.setItem("password",password);
        localStorage.setItem("email",email);
        errorLogin.textContent = "Đăng kí thành công, vui lòng đăng nhập!";
        errorLogin.style.color = "green";
        errorLogin.style.padding = "0px 0px 4px 0px";
        errorLogin.style.fontFamily = "sans-serif";
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

//xuly modal bars
var barsCategory = document.getElementById('barsCategory');
var barsCategoryClose = document.getElementById('barCategoryClose');
barsCategoryClose.addEventListener('click', function(){
    document.getElementById('barsCategoryItem').style.display = "none";
    barsCategoryClose.style.display = "none";
});
   

barsCategory.addEventListener('click', function(){
        document.getElementById('barsCategoryItem').style.display = "block";
        barsCategoryClose.style.display = "";
});

var barsBtn = document.getElementById('barsBtn');
var barsOverlay = document.getElementById('barsOverlay');
var barsContent = document.getElementById('barsContent');
var barBtnClose = document.getElementById('barsClose');

barsBtn.addEventListener('click', function(){
    barsOverlay.style.display = "block";
    barsContent.style.display = "block";
    document.getElementById('barsCategoryItem').style.display = "none";
    barsCategoryClose.style.display = "none";
});

barsOverlay.addEventListener('click', function(){
    barsOverlay.style.display = "none";
    barsContent.style.display = "none";
    document.getElementById('barsCategoryItem').style.display = "none";
    barsCategoryClose.style.display = "none";
});

barBtnClose.addEventListener('click', function(){
    barsOverlay.style.display = "none";
    barsContent.style.display = "none";
});

var barsLogin = document.getElementById('barsLogin');

barsLogin.addEventListener('click', function(){
    barsOverlay.style.display = "none";
    barsContent.style.display = "none";
    modalLogin.style.display = "block";
});

//xuly modal product
var btnProductClose = document.querySelector('.modal__product-close');
var modalProduct = document.querySelector('.modal__product');
var modalProductOverlay = document.querySelector('.modal__product-overlay');

modalProductOverlay.addEventListener('click',onProDuctClose)


btnProductClose.addEventListener('click', onProDuctClose);


function onProDuctClose()
{
    modalProduct.style.display = "none";
}

var minusProduct = document.querySelector('.minus');
var plusProduct = document.querySelector('.plus');
var quantifyProduct = document.querySelector('.quatify');
var quantify = 1;

plusProduct.addEventListener('click', function()
{
    quantify++;
    quantifyProduct.value = quantify;
});

minusProduct.addEventListener('click', function(){
    if(quantify == 1) quantify = 1;
    else {
        quantify--;
        quantifyProduct.value = quantify;
    }
});
var arrProduct = [
    {
        id: "0",
        img:'iphone13.png',
        name: 'IPHONE 13 Pro new',
        prices: '1200'
    },

    {
        id: "1",
        img: '13promax.jpg',
        name: 'IPHONE 13 Pro max new',
        prices: '2000'
    },

    { 
        id: "2",
        img: '13.jpg',
        name: 'IPHONE 13 64GB new',
        prices: '1000'
    },

    {
        id: "3",
        img: '13mini.jpg',
        name: 'IPHONE 13 mini new',
        prices: '800'
    },

    {
        id: "4",
        img: '13mini.jpg',
        name: 'IPHONE 13 mini new',
        prices: '800'
    },
    
    {
        id: "5",
        img: '13mini.jpg',
        name: 'IPHONE 13 mini new',
        prices: '800'
    },

    {
        id: "6",
        img: '13mini.jpg',
        name: 'IPHONE 13 mini new',
        prices: '800'
    },

    {
        id: "7",
        img: '13mini.jpg',
        name: 'IPHONE 13 mini new',
        prices: '800'
    }

    ];
// var viewInfo = document.getElementById('viewInfo');
var viewInfo = document.querySelectorAll('.home__product-item');

for(var i=0;i<viewInfo.length;i++)
{
    
    viewInfo[i].addEventListener('click', function(){
        modalProduct.style.display = ""; 
    });
        
}

function showModal(id)
{
    var imgProduct = '<img src="./assets/img/'+arrProduct[id].img+'" alt="">';
    document.getElementById("imgModalProduct").innerHTML = imgProduct;

    var nameProduct = '<h3 id="textModalProduct">'+arrProduct[id].name+'</h3>';
    document.getElementById("nameModalProduct").innerHTML = nameProduct;

    var pricesProduct = '<p>Giá sản phẩm: <span>$'+arrProduct[id].prices+'</span></p>';
    document.getElementById("pricesModalProduct").innerHTML = pricesProduct;
}

