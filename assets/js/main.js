var arrProduct = [];
function createProduct()
{
    if(localStorage.getItem('product') == null)
    {

        arrProduct = [
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
                prices: '2400',
                type: "macbook"
            },
        
            {
                id: "10",
                img: 'macbook2.jpg',
                name: 'MacBook Pro 16" 2019 Touch Bar 2.6GHz Core i7 512GB',
                prices: '2600',
                type: "macbook"
            },
        
            {
                id: "11",
                img: 'macbook3.jpg',
                name: 'MacBook Air 13" 2020 M1 16GB/256GB',
                prices: '2900',
                type: "macbook"
            },
        
            {
                id: "12",
                img: 'macbook4.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 16GB/256GB',
                prices: '1900',
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
                prices: '1000',
                type: "ipad"
            },
        
            {
                id: "18",
                img: 'ipad2.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1400',
                type: "ipad"
            },
        
            {
                id: "19",
                img: 'ipad3.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1600',
                type: "ipad"
            },
        
            {
                id: "20",
                img: 'ipad4.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1700',
                type: "ipad"
            },
        
            {
                id: "21",
                img: 'ipad5.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2100',
                type: "ipad"
            },
        
            {
                id: "22",
                img: 'ipad6.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2000',
                type: "ipad"
            },
        
            {
                id: "23",
                img: 'ipad7.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 128GB (2021)',
                prices: '2400',
                type: "ipad"
            }
        
            ];
            localStorage.setItem('product',JSON.stringify(arrProduct));
    } else{
        arrProduct = JSON.parse(localStorage.getItem('product'));
    }
  
    
}

var arrCustomer = [];
function createCustomer()
{

    if(localStorage.getItem('customer') == null)
    {

        arrCustomer = [
            {
                user: 'admin',
                password: 'admin',
                email: 'lydatltd@gmail.com',
                level: 0
            },
            {
                user: 'datisekai',
                password: 'bedatdz',
                email: 'lydatltd@gmail.com',
                level: 1
            }
        ];
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
    } else{
        arrCustomer = JSON.parse(localStorage.getItem('customer'));
    }
}
    function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

createProduct();
createCustomer();
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
    var level = 1;
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
            if(arrCustomer[i].level == 0) {
                level = arrCustomer[i].level; admin = true;
            }
            break;
        }
    }

    if (flag==1){
        sessionStorage.setItem('user',username);
        sessionStorage.setItem('level',level)
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
        document.getElementById('errorLogin').textContent = "Đăng kí thành công, vui lòng đăng nhập!";
        document.getElementById('errorLogin').style.color = "green";
        onSignIn();
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
        console.log(arrCustomer);
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
    if(parseInt(sessionStorage.getItem('level')) == 0)
    {
        document.getElementById('admin').style.display = "";
    }
    else{
        document.getElementById('admin').style.display = "none";
    }
}

function onLogOut()
{
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('level');
}


function onSignUp()
{
    document.querySelector('.modal__content-heading').textContent = "REGISTER";
    document.getElementById('modal__email').style.display = "block";
    document.getElementById('register').style.display = "";
    document.getElementById('login').style.display = "none";
    document.getElementById('modal-signup').style.display = "none";
    document.getElementById('modal-signin').style.display = "";
    document.querySelector('.modal__content-login-other').style.display = 'none';
    document.querySelector('.modal__content-social').style.display = 'none';
}

function onSignIn()
{
    document.querySelector('.modal__content-heading').textContent = "LOGIN";
    document.getElementById('modal__email').style.display = "none";
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "";
    document.getElementById('modal-signup').style.display = "";
    document.getElementById('modal-signin').style.display = "none";
    document.querySelector('.modal__content-login-other').style.display = 'block';
    document.querySelector('.modal__content-social').style.display = 'flex';
}

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



function showModal(id)
{
    var arrModal;
    for (var i=0;i<arrProduct.length;i++)
    {
        if(arrProduct[i].id == id)
        {
            arrModal = arrProduct[i]; break;
        }
    }
    document.getElementById('modalProduct').style.display = "flex"; 
    var imgProduct = '<img src="./assets/img/'+arrModal.img+'" alt="">';
    document.getElementById("imgModalProduct").innerHTML = imgProduct;

    var nameProduct = '<h3 id="textModalProduct">'+arrModal.name+'</h3>';
    document.getElementById("nameModalProduct").innerHTML = nameProduct;

    var pricesProduct = '<p>Giá sản phẩm: <span>$'+arrModal.prices+'</span></p>';
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

function renderDisplayProduct1(arrSearch)
{

    var product = getQueryVariable('product');
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


function renderVQMM()
{
    var event = getQueryVariable('event');
    if(event == 'vqmm')
    {
        document.querySelector('.home__product').style.display = "none";
        document.querySelector('.select__search').style.display = "none";
        document.getElementById('containerHeading').style.display = "none";
       
        var s = '<h1 class="luckyheading">VÒNG QUAY</h1><div align="center" class=""><table >  <tr> <td><div class="power_controls">' +
        ' </div></td><td width="90%" height="auto" class="the_wheel" align="center" valign="center">' +
        '<canvas id="canvas" width="300" height="300"><p style="{color: white}" align="center"></p>' +
        '</canvas></td></tr></table>'+'<div class="spinlucky"><input type="button" value="Quay" id="spin_button" onclick="startSpin();"></br>' +
        '<p onclick="resetWheel(); return false;" id="playagain">Chơi lại</p><br /></div>' + '</div>';
        document.getElementById('content').innerHTML = s;
    }
}
renderVQMM();

//VQMM
let theWheel = new Winwheel({
    'numSegments'  : 8,    
    'outerRadius'  : 144,  
    'textFontSize' : 18,  
    'textFillStyle':'black',  
    'textFontFamily':'san-serif',
    'segments'     :   
    [
       {'fillStyle' : '#eae56f', 'text' : 'Mã Sale 5%'},
       {'fillStyle' : '#89f26e', 'text' : 'Mã Sale 10%'},
       {'fillStyle' : '#7de6ef', 'text' : 'Mã Sale 15%'},
       {'fillStyle' : '#e7706f', 'text' : 'Mã Sale 20%'},
       {'fillStyle' : '#eae56f', 'text' : 'Mã Sale 30%'},
       {'fillStyle' : '#89f26e', 'text' : 'Mã Sale 40%'},
       {'fillStyle' : '#7de6ef', 'text' : 'Mã Sale 50%'},
       {'fillStyle' : '#e7706f', 'text' : 'Mã Sale 70%'}
    ],
    'animation' :          
    {
        'type'     : 'spinToStop',
        'duration' : 5,    
        'spins'    : 8,     
        'callbackFinished' : alertPrize
    }
});

function startSpin()
{
    theWheel.startAnimation();
}

function resetWheel()
{
    theWheel.stopAnimation(false);  
    theWheel.rotationAngle = 0;     
    theWheel.draw();                
    wheelSpinning = false;  
}

function alertPrize(indicatedSegment)
{
   alert("Bạn đã trúng " + indicatedSegment.text);
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
    if(txtSearch != '')
    {
        if(txtSearch.toUpperCase().indexOf('IPH') != -1)
        {
            window.location = 'index.html?product=iphone';
        }
        else if(txtSearch.toUpperCase().indexOf('IPA') != -1)
        {
            window.location = 'index.html?product=ipad';
        }
        else if(txtSearch.toUpperCase().indexOf('MAC') != -1)
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
    var arrAscending = arrProduct.sort(function(a,b){
        return a.prices - b.prices;
    });
    renderDisplayProduct1(arrAscending);
}

function sortDescending()
{
    var arrDescending = arrProduct.sort(function(a,b){
        return b.prices - a.prices;
    });
    renderDisplayProduct1(arrDescending);
}

function filter1()
{
    var arrFilter = arrProduct.filter(function(product,index,array){
        return parseInt(product.prices) > 2000;
    });
    renderProduct(arrFilter);
}

function filter2()
{
    var arrFilter = arrProduct.filter(function(product,index,array){
        return parseInt(product.prices) >= 1000 &&  parseInt(product.prices) <= 2000;
    });
    renderProduct(arrFilter);
}

function filter3()
{
    var arrFilter = arrProduct.filter(function(product,index,array){
        return parseInt(product.prices) < 1000;
    });
    renderProduct(arrFilter);
}
