
var modalOverlay = document.querySelector('.modal__overlay');
var modalLogin = document.querySelector('.modal__login');
var modalClose = document.querySelector('.modal__content-btn-close');
var btnLogin = document.querySelector('.header__login');

if(!sessionStorage.getItem('user'))
{
    btnLogin.addEventListener('click', function(){
       
        modalLogin.style.display = "block";
    });
}
// else {
//     btnLogin.addEventListener('click', function(){
//         window.open('info.html');
//     });
// }
modalOverlay.addEventListener('click', function(){
   
    modalLogin.style.display = "none";
});

modalClose.addEventListener('click', function(){
    
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
var displayLogin = document.querySelector('.header__login');
var hasLogin = document.getElementById('hasLogin');
var userLogin = document.getElementById('userLogin');
var flag;
if(sessionStorage.getItem('user') != "" && sessionStorage.getItem('password') != "" )
{

    if(sessionStorage.getItem('user') == localStorage.getItem('user') && sessionStorage.getItem('password') == localStorage.getItem('password'))
    {
        displayLogin.style.display = "none";
        hasLogin.style.display = "flex";
        document.getElementById('cartQuatify').style.display = "inline-block";
        userLogin.textContent = sessionStorage.getItem('user');
        flag = true;
       
    }
    else {
        hasLogin.style.display = "none";
        displayLogin.style.display = "block";
        document.getElementById('cartQuatify').style.display = "none";
        flag = false;
    }
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
           modalLogin.style.display = "none";
           displayLogin.style.display = "none";
           hasLogin.style.display = "flex";
            document.getElementById('cartQuatify').style.display = "inline-block";
            userLogin.textContent = sessionStorage.getItem('user');
            flag = true;
        
        }
        else {
           errorLogin.textContent = "Username or password not match";
           errorLogin.style.color = "red";
           flag = false;
           
    }
    
    
}

if(flag)
{
   document.querySelector('.bars__list-item:first-child').style.display = "none";
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
function createProduct()
{
    var arrProduct = [
        {
            id: "0",
            img:'macbook1.jpg',
            name: 'Macbook',
            prices: '1200',
            type: "macbook"
        },
    
        {
            id: "1",
            img: '13promax.jpg',
            name: 'IPHONE 13 Pro max new',
            prices: '2000',
            type: "iphone"
        },
    
        { 
            id: "2",
            img: '13.jpg',
            name: 'IPHONE 13 64GB new',
            prices: '1000',
            type: "iphone"
        },
    
        {
            id: "3",
            img: '13mini.jpg',
            name: 'IPHONE 13 mini new',
            prices: '800',
            type: "iphone"
        },
    
        {
            id: "4",
            img: '13mini.jpg',
            name: 'IPHONE 13 mini new',
            prices: '900',
            type: "iphone"
        },
        
        {
            id: "5",
            img: '13mini.jpg',
            name: 'IPHONE 13 mini new',
            prices: '1000',
            type: "iphone"
        },
    
        {
            id: "6",
            img: '13mini.jpg',
            name: 'IPHONE 13 mini new',
            prices: '1100',
            type: "iphone"
        },
    
        {
            id: "7",
            img: '13mini.jpg',
            name: 'IPHONE 13 mini new',
            prices: '1200',
            type: "iphone"
        },
    
        {
            id: "8",
            img: '13mini.jpg',
            name: 'IPHONE 13 mini new',
            prices: '1300',
            type: "iphone"
        },
    
        
        {
            id: "9",
            img: 'macbook1.jpg',
            name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
            prices: '1200',
            type: "macbook"
        },
    
        {
            id: "10",
            img: 'macbook2.jpg',
            name: 'MacBook Pro 16" 2019 Touch Bar 2.6GHz Core i7 512GB',
            prices: '1400',
            type: "macbook"
        },
    
        {
            id: "11",
            img: 'macbook3.jpg',
            name: 'MacBook Air 13" 2020 M1 16GB/256GB',
            prices: '1100',
            type: "macbook"
        },
    
        {
            id: "12",
            img: 'macbook4.jpg',
            name: 'MacBook Pro 13" 2020 Touch Bar M1 16GB/256GB',
            prices: '1299',
            type: "macbook"
        },
    
        {
            id: "13",
            img: 'macbook5.jpg',
            name: 'MacBook Pro 14" 2021 M1 Pro',
            prices: '1399',
            type: "macbook"
        },
    
        {
            id: "14",
            img: 'macbook6.jpg',
            name: 'MacBook Pro 13" 2020 Touch Bar 2.0GHz Core i5 512GB',
            prices: '1499',
            type: "macbook"
        },
    
        {
            id: "15",
            img: 'macbook7.jpg',
            name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
            prices: '999',
            type: "macbook"
        },
    
        {
            id: "16",
            img: 'macbook7.jpg',
            name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
            prices: '1099',
            type: "macbook"
        },
    
        {
            id: "17",
            img: 'ipad1.jpg',
            name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
            prices: '1200',
            type: "ipad"
        },
    
        {
            id: "18",
            img: 'ipad2.jpg',
            name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
            prices: '1200',
            type: "ipad"
        },
    
        {
            id: "19",
            img: 'ipad3.jpg',
            name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
            prices: '1200',
            type: "ipad"
        },
    
        {
            id: "20",
            img: 'ipad4.jpg',
            name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
            prices: '1200',
            type: "ipad"
        },
    
        {
            id: "21",
            img: 'ipad5.jpg',
            name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
            prices: '1200',
            type: "ipad"
        },
    
        {
            id: "22",
            img: 'ipad6.jpg',
            name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
            prices: '1200',
            type: "ipad"
        },
    
        {
            id: "23",
            img: 'ipad7.jpg',
            name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 128GB (2021)',
            prices: '1200',
            type: "ipad"
        }
    
        ];
  
        localStorage.setItem('product',JSON.stringify(arrProduct));
    
}

var arrProduct = JSON.parse(localStorage.getItem('product'));
function showModal(id)
{
    
    document.getElementById('modalProduct').style.display = "flex"; 
    var imgProduct = '<img src="./assets/img/'+arrProduct[id].img+'" alt="">';
    document.getElementById("imgModalProduct").innerHTML = imgProduct;

    var nameProduct = '<h3 id="textModalProduct">'+arrProduct[id].name+'</h3>';
    document.getElementById("nameModalProduct").innerHTML = nameProduct;

    var pricesProduct = '<p>Giá sản phẩm: <span>$'+arrProduct[id].prices+'</span></p>';
    document.getElementById("pricesModalProduct").innerHTML = pricesProduct;
}


function showAlert()
{
   alert('datisekai');
}

function renderProduct(arrProduct)
{
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrProductPag = arrProduct.slice(begin,end);
    var k = 0;
    var s = "";
    while (k<arrProductPag.length)
    {   
        
        s = s + '<div class="col l-3 m-6 c-12"> <div class="home__product-item" onclick="showModal('+arrProductPag[k].id+')"><div class="home__product-item-img"> <img src="./assets/img/'+arrProductPag[k].img+'" alt=""> </div>'+
                ' <div class="home__product-item-description"><h4>'+arrProductPag[k].name+'</h4></div>' + 
                '<div class="home__product-item-appreciate"><div class="appreciate-item"> <i class="appreciate-item-btn fas fa-star"></i> </div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' + ' <span>(1 Reviewer)</span>' + '</div>' + 
                '<div class="home__product-item-prices"><h4>$'+arrProductPag[k].prices+'</h4> </div>'+
                '<div class="home__product-item-btn"><button>View Info</button></div>' +
                '</div> </div>';  
                k++; 
    }
    document.getElementById('display_product').innerHTML = s;

  
}


var product = getQueryVariable('product');

var arrSearch = [];
var d = 0;
if(getQueryVariable('product') !=null)
{

    for (var i=0;i<arrProduct.length;i++)
    {
        if(arrProduct[i].type == product){
            arrSearch[d] = arrProduct[i];
            d++;
        }
    }
    renderProduct(arrSearch);
} else{
    renderProduct(arrProduct);
}

window.onload = function()
{
    createProduct();
}

