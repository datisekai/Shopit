function displayLogin()
{
    document.querySelector('.modal__login').style.display = "block";
}

function hideLogin()
{
    document.querySelector('.modal__login').style.display = "none";
}
function onLogin()
{
    window.sessionStorage;
    var admin = false;
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    var flag = -1;
    if(username == "")
    {
        document.getElementById('errorUser').textContent = "Username không được bỏ trống";
        flag = 0;
    }
    if(password == "")
    {
        document.getElementById('errorPass').textContent = "Password không được bỏ trống";
        flag = 0;
    }

    for (var i=0;i<arrCustomer.length;i++)
    {
        if (username.toUpperCase() == arrCustomer[i].user.toUpperCase() && password == arrCustomer[i].password)
        {
            flag = 1;
            if(arrCustomer[i].level == 0) admin = true;
            break;
        }
    }

    if (flag==1){
        sessionStorage.setItem('user',username);
        hideLogin();
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('hasLogin').style.display = 'flex';
        document.getElementById('userLogin').textContent = username;
        if (admin == 1) document.getElementById('admin').style.display = "";
        else {
            document.getElementById('admin').style.display = "none";
        }
        
    }
    else if(flag == -1){
        document.getElementById('errorLogin').textContent = "Username hoặc Password không chính xác!";
    }
}

function onRegister()
{
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var flag = 1;
    if(username == "" || username.length < 5)
    {
        document.getElementById('errorUser').textContent = "Username phải lớn hơn 5 kí tự";
        flag = 0;
    }
    if(password == "" || password.length < 5)
    {
        document.getElementById('errorPass').textContent = "Password phải lớn hơn 5 kí tự";
        flag = 0;
    }
    if(email == "" || email.length < 5 || email.indexOf('@') == -1)
    {
        document.getElementById('errorEmail').textContent = "Email phải có @ và lớn hơn 5 kí tự";
        flag = 0;
    }
    if(username != "" && password != "" && email != "")
    {
        for (var i=0;i<arrCustomer.length;i++)
        {
            if(username.toUpperCase() == arrCustomer[i].user.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Username đã tồn tại";
                flag = -1;
                break;
            }
            if(email.toUpperCase() == arrCustomer[i].email.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Email đã tồn tại";
                flag = -1;
                break;
            }
        }
    }

    if(flag == 1)
    {
        var customer = {
            user: username,
            password: password,
            email: email,
            level: 1
        };
        arrCustomer.push(customer);
        console.log(arrCustomer);
        document.getElementById('errorLogin').textContent = "Đăng kí thành công, vui lòng đăng nhập!";
        document.getElementById('errorLogin').style.color = "green";
        onSignIn();
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
    }

}

function checkSession()
{
    if(sessionStorage.getItem('user') != null)
    {
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('userLogin').textContent = sessionStorage.getItem('user');
        document.getElementById('hasLogin').style.display = 'flex';
    }
}

function onLogOut()
{
    sessionStorage.removeItem('user');
}

function onSignUp()
{
    document.querySelector('.modal__content-heading').textContent = "REGISTER";
    document.getElementById('modal__email').style.display = "block";
    document.getElementById('register').style.display = "";
    document.getElementById('login').style.display = "none";
    document.getElementById('modal-signup').style.display = "none";
    document.getElementById('modal-signin').style.display = "";
}

function onSignIn()
{
    document.querySelector('.modal__content-heading').textContent = "LOGIN";
    document.getElementById('modal__email').style.display = "none";
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "";
    document.getElementById('modal-signup').style.display = "";
    document.getElementById('modal-signin').style.display = "none";
}

arrCustomer = JSON.parse(localStorage.getItem('customer'));

//Slider
sliderRunning();
function sliderRunning()
{

    var counter = 1;
        setInterval(function(){
          document.getElementById('radio' + counter).checked = true;
          counter++;
          if(counter > 4)
          {
            counter = 1;
          }
        }, 3000);
}

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
        
        s = s + '<div class="col l-3 m-4 c-12"> <div class="home__product-item" onclick="showModal('+arrProductPag[k].id+')"><div class="home__product-item-img"> <img src="./assets/img/'+arrProductPag[k].img+'" alt=""> </div>'+
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

function renderDisplayProduct()
{

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
}

function renderPagination()
{
    var product = getQueryVariable('product');
    var page = getQueryVariable('page') || 1;
    var prePage = 1;
    if(page > 1) prePage = parseInt(page) - 1;
    else {
          prePage = 1;
    }
    var nextPage = parseInt(page) + 1;

    if(product != null)
    {
       
        document.getElementById('prePage').href = 'index.html?product='+product+'&page='+prePage;
        document.getElementById('nextPage').href = 'index.html?product='+product+'&page='+nextPage;
        document.getElementById('page1').href = 'index.html?product='+product+'&page=1';
        document.getElementById('page2').href = 'index.html?product='+product+'&page=2';
        document.getElementById('page3').href = 'index.html?product='+product+'&page=3';
    }
    else {
        document.getElementById('prePage').href = 'index.html?page='+prePage;
        document.getElementById('nextPage').href = 'index.html?page='+nextPage;
        document.getElementById('page1').href = 'index.html?page=1';
        document.getElementById('page2').href = 'index.html?page=2';
        document.getElementById('page3').href = 'index.html?page=3';
    }

    if(page ==1 )
    {
        document.getElementById('page1').style.backgroundColor = "#FCB35F";
        document.getElementById('page1').style.color = "white";
    } 
    else if(page == 2)
    {
        document.getElementById('page2').style.backgroundColor = "#FCB35F";
        document.getElementById('page2').style.color = "white";
    }
    else if(page == 3)
    {
        document.getElementById('page3').style.backgroundColor = "#FCB35F";
        document.getElementById('page3').style.color = "white";
    }
}

function renderContainerHeading()
{
    var product = getQueryVariable('product');
    if(product != null)
    {
        document.getElementById('containerHeading').textContent = product;
    }
    else {
        document.getElementById('containerHeading').textContent = "LATEST PRODUCTS";
    }
}

function renderEmptyProduct()
{
    document.getElementById('display_product').innerHTML = '<div id="errorSearch">Không tìm thấy sản phẩm</div>'
}

window.onload = function()
{

    renderDisplayProduct();
    renderPagination();
    renderContainerHeading();
    
}

checkSession();

///search
function searchInfo(id)
{
    txtSearch = document.getElementById(id).value;
    console.log(txtSearch);
    if(txtSearch != '')
    {
        if(txtSearch.indexOf('iph') != -1)
        {
            window.location = 'index.html?product=iphone';
        }
        else if(txtSearch.indexOf('ipa') != -1)
        {
            window.location = 'index.html?product=ipad';
        }
        else if(txtSearch.indexOf('mac') != -1)
        {
            window.location = 'index.html?product=macbook';
        }
        else {
            renderEmptyProduct();
        }
    }
}

function preLoading()
{
    var preLoader = document.getElementById('preLoader');
    window.addEventListener('load', hideLoading);
}

function hideLoading()
{
    setTimeout(function(){
        preLoader.style.display = "none";
    },500);
}

preLoading();

function onSelect()
{
    var select = document.getElementById('selectPrices');
    console.log(select.value)
    switch(select.value)
    {
        case '1':
            filter1();
            break;
        case '2':
            filter2();
            break;
        case '3':
            filter3();
            break;
    }
}

function onSort()
{
    var sort = document.getElementById('sortPrices');
    switch(sort.value)
    {
        case '1':
            sortAscending();
            break;
        case '2':
            sortDescending();
            break;
    }
}


function sortAscending()
{
    var ascending = arrProduct.sort(function(a,b){
        return a.prices - b.prices;
    });
    renderProduct(ascending);
}

function sortDescending()
{
    var descending = arrProduct.sort(function(a,b){
        return a.prices - b.prices;
    });
    renderProduct(descending);
}

function filter1()
{
    var arrFilter = [];
    for (var i = 0;i<arrProduct.length;i++)
    {
        if(parseInt(arrProduct[i].prices) > 2000)
        {
            arrFilter.push(arrProduct[i]);
        }
    }
    renderProduct(arrFilter);
}

function filter2()
{
    var arrFilter = [];
    for (var i = 0;i<arrProduct.length;i++)
    {
        if(parseInt(arrProduct[i].prices) >= 1000 && parseInt(arrProduct[i].prices) <= 2000)
        {
            arrFilter.push(arrProduct[i]);
        }
    }
    renderProduct(arrFilter);
}

function filter3()
{
    var arrFilter = [];
    for (var i = 0;i<arrProduct.length;i++)
    {
        if(parseInt(arrProduct[i].prices) < 1000)
        {
            arrFilter.push(arrProduct[i]);
        }
    }
    renderProduct(arrFilter);
}