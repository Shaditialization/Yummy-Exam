

let changeIcon = function (icon) {
    icon.classList.toggle('fa-times')
}
// Loading
// momken bdl doc a5lyha home (when the home is ready)
$(document).ready(function () {
    $(".sk-fading-circle").fadeOut(1000, function () {
        $("#loading").fadeOut(1000, function () {
            $("body").css('overflow', 'auto');
        });
    })


    // $(".test").hide(3000)

    
let sideBarinnerWidth = $(".sideBar-inner").innerWidth();
$("#sideBar").css('left', -sideBarinnerWidth);
$("#sideBar .wrong i").click(function () {

    if ($("#sideBar").css('left') == "0px")
    {
        $("#sideBar").animate({left:-sideBarinnerWidth} , 600)
    }
    else
    {
        $("#sideBar").animate({left:'0px'} , 600)
        
    }    
})


$(".wrong").click(function () {
    $(".one").fadeIn(500, function () {
        $(".two").fadeIn(500, function () {
            $(".three").fadeIn(500, function () {
                $(".four").fadeIn(500, function () {
                    $(".five").fadeIn(500)
                })
            })
        })
    })
})

// $(document).ready(function(){
//   $(".wrong").click(function(){
//     $(".one").delay(500).slideUp(300);
//     $(".two").delay(1000).slideUp(300);
//     $(".three").delay(1500).slideUp(300);
//     $(".four").delay(2000).slideUp(300);
//     $(".five").delay(2500).slideUp(300);
//   });
// });


// $(".wrong").click(function () {
//     $(".one").fadeToggle(1000, function () {
//         $(".two").fadeToggle(1000, function () {
//             $(".three").fadeToggle(1000, function () {
//                 $(".four").fadeToggle(1000, function () {
//                     $(".five").fadeToggle(1000)
//                 })
//             })
//         })
//     })
// })



// Api categories
var categories = [];
var myHttp = new XMLHttpRequest();
myHttp.open('GET', 'https://www.themealdb.com/api/json/v1/1/categories.php');   
myHttp.send();
myHttp.addEventListener('readystatechange', function () {
    if (myHttp.readyState == 4) {
        //console.log(JSON.parse(myHttp.response));
        categories = JSON.parse(myHttp.response).categories;
        //console.log(categories);
        displayCategories();
    }
})

function displayCategories()
{
    var cartona = ``;
    //console.log(categories.length);
    for (var i = 0; i < categories.length; i++)
    {

        cartona += ` <div class="col-md-3" onclick="searchByCategory('${categories[i].strCategory}')">
                <div class="item position-relative text-center">
                    <img class="w-100 rounded" src="${categories[i].strCategoryThumb}" alt="meal">
                    <div class="item-caption rounded">
                        <h3 class="m-1 pt-2">${categories[i].strCategory}</h3>
                        <p>${categories[i].strCategoryDescription}</p>
                    </div>
                </div>
            </div>
        `;
        //console.log(cartona);
    }
    //console.log(cartona);
    document.getElementById("rowCat").innerHTML = cartona;   
}

//api home
var home = [];
var myHttp2 = new XMLHttpRequest();
myHttp2.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?s=');   
myHttp2.send();
myHttp2.addEventListener('readystatechange', function () {
    if (myHttp2.readyState == 4) {
        home = JSON.parse(myHttp2.response).meals;
        //console.log(home);
        // home = JSON.parse(myHttp.response).home;
        //console.log(categories);
        displayMeals();
    }
})

function displayMeals()
{
    var cartona = ``;
    // console.log(home.length);
    for (var i = 0; i < home.length; i++)
    {      
        cartona += ` <div class="col-md-3"  onclick="searchByhome('${home[i].idMeal}')">
                <div class="item position-relative">
                    <img class="w-100 rounded" src="${home[i].strMealThumb}" alt="meal">
                    <div class="item-caption rounded">
                        <h3 class="m-1">${home[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;
    }
    //console.log(cartona);
    document.getElementById("home").innerHTML = cartona;   
}

// Api Area
var area = [];
var myHttp3 = new XMLHttpRequest();
myHttp3.open('GET', 'https://www.themealdb.com/api/json/v1/1/list.php?a=list');   
myHttp3.send();
myHttp3.addEventListener('readystatechange', function () {
    if (myHttp3.readyState == 4) {
        area = JSON.parse(myHttp3.response).meals;
        // console.log(area);
        displayareas();
    }
})

function displayareas()
{
    var cartona = ``;
    // console.log(home.length);
    for (var i = 0; i < area.length; i++)
    {      
        cartona += ` <div class="col-md-3" onclick="searchByArea('${area[i].strArea}')">
                <div class="item-area d-flex flex-column justify-content-center align-items-center">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3 class="m-1">${area[i].strArea}</h3>
                </div>
            </div>
        `;
    }
    //console.log(cartona);
    document.getElementById("area").innerHTML = cartona;   
}

    

    // Api Ingredients
var ing = [];
var myHttp6 = new XMLHttpRequest();
myHttp6.open('GET', 'https://www.themealdb.com/api/json/v1/1/list.php?i=list');   
myHttp6.send();
myHttp6.addEventListener('readystatechange', function () {
    if (myHttp6.readyState == 4) {
        ing = JSON.parse(myHttp6.response).meals;
        // console.log(ing);
        displayingredients();
    }
})

function displayingredients()
{
    var cartona = ``;
    // console.log(home.length);
    for (var i = 0; i < ing.length; i++)
    {
        //console.log(ing[i].strDescription);
        if (ing[i].strDescription != null && ing[i].strType == null && ing[i].strDescription != "") {
             console.log(ing[i]);
            cartona += ` <div class="col-md-3" onclick="searchBying('${ing[i].strIngredient}')">
                <div class="itemIngredients">
                    <i class="fa-solid fa-drumstick-bite fa-2xl"></i>
                    <div class="itemIngredients-caption">
                        <h3 class="mt-3">${ing[i].strIngredient}</h3>
                        <p class="px-1">${ing[i].strDescription}</p>
                    </div>
                </div>
            </div>
        `;
        }
    }
    //console.log('ssss');
    
    document.getElementById("ing").innerHTML = cartona;   
}
    {/* <h3 class="m-1">${ing[i].strArea}</h3> */ }
    

    

// document.body.addEventListener('cli-ck', function () {
//     window.open('file:///E:/Route%20Front/JS%20Exam%20(Yummy)/search.html')
// })

// var myElement = document.querySelector('.one')
// myElement.addEventListener('click', function () {
//     window.open('/search.html' , '_self')
// } )
    

    
    // var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
    // var regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    
    
    
    
    
    
    
    // function validate(){
    //     var mail = document.getElementById("productEmail").value;
    //     var regex = / ^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    //     if (regex.text(mail)) {
    //         alert("Nice!")
    //         return true
    //     }
    //     else {
    //         alert("Sorry!")
    //         return false
    //     }
    // }
})

// Api categoriesTwo
    //api home
var categoriesTwo = [];
function searchByCategory(categoy)
{
    
    
    console.log('xxxxxxxxxxx' + categoy);
    var myHttp7 = new XMLHttpRequest();
myHttp7.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoy}`);   
myHttp7.send();
myHttp7.addEventListener('readystatechange', function () {
    if (myHttp7.readyState == 4) {
        categoriesTwo = JSON.parse(myHttp7.response).meals;
        console.log(categoriesTwo);
        
        // home = JSON.parse(myHttp.response).home;
        //console.log(categories);
        displaycategoriesTwo();
    }
})

}
    

function displaycategoriesTwo()
{
    var cartona = ``;
    
    for (var i = 0; i < categoriesTwo.length; i++)
    {      
        cartona += ` <div class="col-md-3" onclick="searchByhome('${categoriesTwo[i].idMeal}')">
                <div class="item position-relative">
                    <img class="w-100 rounded" src="${categoriesTwo[i].strMealThumb}" alt="meal">
                    <div class="item-caption rounded">
                        <h3 class="m-1">${categoriesTwo[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;

    }
    
    console.log(cartona);
    localStorage.setItem("categories", cartona);
    window.location.href = 'categoriesTwo.html';
    //document.getElementById("categoriesTwo").innerHTML = cartona; 
    
    // <div class="col-md-3">
    //             <div class="item position-relative">
    //                 <img class="w-100 rounded" src="${categoriesTwo[i].strMealThumb}" alt="meal">
    //                 <div class="item-caption rounded">
    //                     <h3 class="m-1">${categoriesTwo[i].strMeal}</h3>
    //                 </div>
    //             </div>
    //         </div>
}

// Api areaTwo
var areaTwo = [];
function searchByArea(area)
{
    var myHttp8 = new XMLHttpRequest();
myHttp8.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);   
myHttp8.send();
myHttp8.addEventListener('readystatechange', function () {
    if (myHttp8.readyState == 4) {
        areaTwo = JSON.parse(myHttp8.response).meals;
        displayareasTwo();
    }
})

}
    

function displayareasTwo()
{
    var cartona = ``;
    
    for (var i = 0; i < areaTwo.length; i++)
    {      
        cartona += ` <div class="col-md-3" onclick="searchByhome('${areaTwo[i].idMeal}')">
                <div class="item position-relative">
                    <img class="w-100 rounded" src="${areaTwo[i].strMealThumb}" alt="meal">
                    <div class="item-caption rounded">
                        <h3 class="m-1">${areaTwo[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;

    }
    
    console.log(cartona);
    localStorage.setItem("areas", cartona);
    window.location.href = 'areaTwo.html';
}

// Api 
var ingTwo = [];
function searchBying(ing)
{
    var myHttp9 = new XMLHttpRequest();
myHttp9.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`);   
myHttp9.send();
myHttp9.addEventListener('readystatechange', function () {
    if (myHttp9.readyState == 4) {
        ingTwo = JSON.parse(myHttp9.response).meals;
        displayingTwo();
    }
})

}
    

function displayingTwo()
{
    var cartona = ``;
    
    for (var i = 0; i < ingTwo.length; i++)
    {      
        cartona += ` <div class="col-md-3" onclick="searchByhome('${ingTwo[i].idMeal}')">
                <div class="item position-relative">
                    <img class="w-100 rounded" src="${ingTwo[i].strMealThumb}" alt="meal">
                    <div class="item-caption rounded">
                        <h3 class="m-1">${ingTwo[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;

    }
    
    console.log(cartona);
    localStorage.setItem("ingredients", cartona);
    window.location.href = 'ingredientsTwo.html';
}


var homeDet = [];
function searchByhome(meal)
{
    console.log(meal);
    var myHttp10 = new XMLHttpRequest();
myHttp10.open('GET', `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);   
myHttp10.send();
myHttp10.addEventListener('readystatechange', function () {
    if (myHttp10.readyState == 4) {
        homeDet = JSON.parse(myHttp10.response).meals;
        displayhomedet();
    }
})

}

function displayhomedet()
{
    var cartona = ``;
    console.log(homeDet);
    /*for (var i = 0; i < homeDet.length; i++)
    {  */    
        cartona = `<div class="col-md-4 pt-4">
                <div class="itemDetails">
                    <img src="${homeDet[0].strMealThumb}" class="w-100 rounded" alt="">
                </div>
                <div class="itemDetailsCaption">
                    <h2>${homeDet[0].strMeal}</h2>
                </div>
            </div>
            <div class="col-md-8 pt-4">
                <div class="itemInstructions">
                    <h2>Instructions</h2>
                    <p>${homeDet[0].strInstructions}<</p>
                </div>
                <div class="itemInstructionsCaption">
                    <h3><span>Area :</span> ${homeDet[0].strArea}</h3>
                    <h3><span>Category :</span> ${homeDet[0].strCategory}</h3>
                    <h3><span>Recipes :</span></h3>
                </div>
                <div class="itemInfo">
                    <ul >
                        <div class="first">
                            <li class="rounded my-3">${homeDet[0].strIngredient1}</li>
                            <li class="rounded my-3">${homeDet[0].strIngredient2}</li>
                            <li class="rounded my-3">${homeDet[0].strIngredient3}</li>
                            <li class="rounded my-3">${homeDet[0].strIngredient4}</li>
                            <li class="rounded my-3">${homeDet[0].strIngredient5}</li>
                        </div>
                        <div class="second">
                            <li class="rounded my-3">${homeDet[0].strIngredient6}</li>
                            <li class="rounded my-3">${homeDet[0].strIngredient7}</li>
                            <li class="rounded my-3">${homeDet[0].strIngredient8}</li>
                            <li class="rounded my-3">${homeDet[0].strIngredient9}</li>
                        </div>
                        
                    </ul>
                </div>
                <div class="tags">
                    <h3>Tags :</h3>
                </div>
                <div class="meat">
                    <ul>
                        <li class="rounded">${homeDet[0].strTags}</li>
                    </ul>
                </div>
                <div class="buttons">
                    <button class="btn btn-success" src="${homeDet[0].strSource}">Source</button>
                    <button class="btn btn-danger" src="${homeDet[0].strYoutube}">Youtube</button>
                </div>
            </div>
`;

    //}
    
    console.log(cartona);
    localStorage.setItem("details", cartona);
    window.location.href = 'details.html';
}



var productNameInput = document.getElementById('productName');
    var productEmailInput = document.getElementById('productEmail');
    var productPhoneInput = document.getElementById('productPhone');
    var productAgeInput = document.getElementById('productAge');
    var productPasswordInput = document.getElementById('productPassword');
    var productRepasswordInput = document.getElementById('productRepassword');

    var productContainer = [];

    function addProduct()
    {
        var product = {
            name: productNameInput.value,
            email: productEmailInput.value,
            phone: productPhoneInput.value,
            age: productAgeInput.value,
            password: productPasswordInput.value,
            repassowrd: productRepasswordInput.value
        }
        productContainer.push(product);
        
    }


    
    function validateEmail()
    {
        console.log('ds');
         var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        //var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
        console.log(productEmailInput.value);
        if (regex.test(productEmailInput.value) == true)
        { 
            console.log("true");
            document.getElementById("err").classList.add("tst");
            //return true;
        }
        else
        {
            console.log("false");
            document.getElementById("err").classList.remove("tst");
            //return false
        }
    }
$("#productEmail").on("input", validateEmail);

 function validateName()
    {
         var regex = /^[a-zA-Z\s]+$/;
        console.log(productNameInput.value);
        if (regex.test(productNameInput.value) == true)
        { 
            console.log("true");
            document.getElementById("err2").classList.add("tst");
            //return true;
        }
        else
        {
            console.log("false");
            document.getElementById("err2").classList.remove("tst");
            //return false
        }
    }
$("#productName").on("input", validateName);

function validatePhone()
    {
         var regex = /^01[0125][0-9]{8}$/;
        console.log(productPhoneInput.value);
        if (regex.test(productPhoneInput.value) == true)
        { 
            console.log("true");
            document.getElementById("err3").classList.add("tst");
            //return true;
        }
        else
        {
            console.log("false");
            document.getElementById("err3").classList.remove("tst");
            //return false
        }
    }
$("#productPhone").on("input", validatePhone);

function validateAge()
    {
         var regex = /^(?:[1-9]|[1-9][0-9])$/;
        console.log(productAgeInput.value);
        if (regex.test(productAgeInput.value) == true)
        { 
            console.log("true");
            document.getElementById("err4").classList.add("tst");
            //return true;
        }
        else
        {
            console.log("false");
            document.getElementById("err4").classList.remove("tst");
            //return false
        }
    }
$("#productAge").on("input", validateAge);

function validatePass()
    {
         var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (regex.test(productPasswordInput.value) == true)
        { 
            console.log("true");
            document.getElementById("err5").classList.add("tst");
            //return true;
        }
        else
        {
            console.log("false");
            document.getElementById("err5").classList.remove("tst");
            //return false
        }
    }
$("#productPassword").on("input", validatePass);

function validateRepass()
    {
        if (productRepasswordInput.value == productPasswordInput.value )
        { 
            console.log("true");
            document.getElementById("err6").classList.add("tst");
            //return true;
        }
        else
        {
            console.log("false");
            document.getElementById("err6").classList.remove("tst");
            //return false
        }
    }
$("#productRepassword").on("input", validateRepass);
    

function getCategoriesTwo() {
    document.getElementById("categoriesTwo").innerHTML = localStorage.getItem("categories"); 
}
if (document.getElementById("catTwo")) {
    document.getElementById("catTwo").addEventListener("load", getCategoriesTwo());
}

function getAreasTwo() {
    document.getElementById("areasTwo").innerHTML = localStorage.getItem("areas"); 
} 
if (document.getElementById("myarea")) {
    document.getElementById("myarea").addEventListener("load", getAreasTwo());
}

function getIngredientsTwo() {
    document.getElementById("ingTwo").innerHTML = localStorage.getItem("ingredients"); 
} 
if (document.getElementById("ingrTwo")) {
    document.getElementById("ingrTwo").addEventListener("load", getIngredientsTwo());
}

function getDet() {
    document.getElementById("details").innerHTML = localStorage.getItem("details"); 
} 
if (document.getElementById("det")) {
    document.getElementById("det").addEventListener("load", getDet());
}

// Api search
var search = [];
function searchByName()
{
    var myHttp4 = new XMLHttpRequest();
    var mealName = document.getElementById('meal').value;
    myHttp4.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);   
    myHttp4.send();
    myHttp4.addEventListener('readystatechange', function () {
    if (myHttp4.readyState == 4) {
        //console.log(JSON.parse(myHttp.response));
        search = JSON.parse(myHttp4.response).meals;
            //console.log(search);
        //console.log(categories);
        displaySearch();
    }
})

}

function displaySearch()
{
    var cartona = ``;
    //console.log(search.length);
    for (var i = 0; i < search.length; i++)
    {      
        cartona += ` <div class="col-md-3" onclick="searchByhome('${search[i].idMeal}')">
                <div class="item position-relative">
                    <img class="w-100 rounded" src="${search[i].strMealThumb}" alt="meal">
                    <div class="item-caption rounded">
                        <h3 class="m-1">${search[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;
    }
    //console.log(cartona);
    document.getElementById("searchByName").innerHTML = cartona;   
}

// Api search by letter
var searchL = [];
function searchByLetter()
{
    var myHttp5 = new XMLHttpRequest();
    var mealLetter = document.getElementById('letter').value;
    myHttp5.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealLetter}`);   
    myHttp5.send();
    myHttp5.addEventListener('readystatechange', function () {
    if (myHttp5.readyState == 4) {
        searchL = JSON.parse(myHttp5.response).meals;
        displaySearchL();
    }
})

}

function displaySearchL()
{
    var cartona = ``;
    for (var i = 0; i < searchL.length; i++)
    {      
        cartona += ` <div class="col-md-3" onclick="searchByhome('${searchL[i].idMeal}')">
                <div class="item position-relative">
                    <img class="w-100 rounded" src="${searchL[i].strMealThumb}" alt="meal">
                    <div class="item-caption rounded">
                        <h3 class="m-1">${searchL[i].strMeal}</h3>
                    </div>
                </div>
            </div>
        `;
    }
    //console.log(cartona);
    document.getElementById("searchByName").innerHTML = cartona;   
}


$("#meal").on("input", searchByName);
$("#letter").on("input", searchByLetter);