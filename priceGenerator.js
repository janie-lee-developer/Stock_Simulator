//---------------------- Generate Prices ----------------------
var el_price = $('.stock_price');
var el_price_checkout = $('.stock_price_checkout');
// var input = $('.nOfshare');
var total = document.getElementsByClassName('total');
var i = 0.5;
var price_0;
var price_1;
var price_2;
var price_3;
var price_4;
var price_5;
var price_6;
var price_7;
var price_8;
var price_9;
var sign;
var differencePs = $('.difference');

var signGenerator = function(difference){
    sign = difference > 0 ? ' +' : difference == 0 ? 0 : ' ';
    return sign;
}
//------------------------------------------------------------Item_Price_1
function increment_0(i) {
    var prevPrice = price_0;
    price_0 = ((i * 10) - (Math.random() * 5)).toFixed(2); 
    el_price.eq(0).text('$ ' + price_0);
    el_price_checkout.eq(0).text('$ ' + price_0);
    
    var multiply;
    function currentMultiply(){
        multiply = document.getElementsByClassName('nOfshare')[0].value;
    }
    var inputID = setInterval(currentMultiply, 100);
    if (multiply !== null) {
        function updateTotal(){
            total[0].innerText = (price_0 * multiply).toFixed(2);
        }
        var totalID = setInterval(updateTotal,100);
    }
    
    var difference = prevPrice - price_0;
    var item_0_sign = signGenerator(difference);
    differencePs[0].innerText = item_0_sign + (difference).toFixed(2);
    if (item_0_sign == ' +') {
        differencePs[0].style.color = 'green';
        differencePs[0].innerHTML += "&#x2191;"
    } else if (item_0_sign == ' ') {
        differencePs[0].style.color = 'red';
        differencePs[0].innerHTML += "&#x2193;"
    } else {
        differencePs[0].style.color = 'black';
    } 
    // return price_0;
}

increment_0(i);
var intID_A_0 = setInterval(increment_0, 2000, i);

function decrement_0() {
    var decrement = (Math.random() * 5);
    price_0 = (price_0 - decrement).toFixed(2);
    el_price[0].innerText = '$ ' + price_0;
    // return price_0;
}

var intID_B_0;
function stopInt_0() {
    clearInterval(intID_A_0);
    clearInterval(intID_B_0);
    i += .5;

    if (i == 1) {
        id = setInterval(increment_0, 2000, i);
        setTimeout(stopInt_0, 10000);
    } else if (i == 1.5) {
        id = setInterval(increment_0, 2000, i);
        setTimeout(stopInt_0, 10000);
    } else if (i == 2) {
        id = setInterval(decrement_0, 2000);
        setTimeout(stopInt_0, 4000);
    } else if (i == 2.5) {
        id = setInterval(increment_0, 2000, i);
        setTimeout(stopInt_0, 10000);
    } else if (i == 3) {
        id = setInterval(decrement_0, 2000);
        setTimeout(stopInt_0, 4000);
    } else if (i == 3.5) {
        id = setInterval(increment_0, 2000, i);
        setTimeout(stopInt_0, 10000);
    } else if (i == 4) {
        id = setInterval(increment_0, 2000, i);
        setTimeout(stopInt_0, 10000);
    } else if (i == 4.5) {
        id = setInterval(increment_0, 2000, i);
        setTimeout(stopInt_0, 10000);
    } else if (i == 5) {
        id = setInterval(increment_0, 2000, i);
        setTimeout(stopInt_0, 10000);
    } else if (i == 5.5) {
        id = setInterval(decrement_0, 2000);
        setTimeout(stopInt_0, 15000);
    } else {
        i = .5;
    }
}
setTimeout(stopInt_0, 10000);
setInterval(stopInt_0, 101000);


//------------------------------------------------------------Item_Price_2
function increment_1(i) {
    var prevPrice = price_1;
    price_1 = ((i * 10) - (Math.random() * 5)).toFixed(2); 
    el_price.eq(1).text('$ ' + price_1);
    el_price_checkout.eq(1).text('$ ' + price_1);
    
    var multiply;
    function currentMultiply(){
        multiply = document.getElementsByClassName('nOfshare')[1].value;
    }
    var inputID = setInterval(currentMultiply, 100);
    if (multiply !== null) {
        function updateTotal(){
            total[1].innerText = (price_1 * multiply).toFixed(2);
        }
        var totalID = setInterval(updateTotal,100);
    }


    var difference = prevPrice - price_1;
    var item_1_sign = signGenerator(difference);
    differencePs[1].innerText = item_1_sign + (difference).toFixed(2);
    if (item_1_sign == ' +') {
        differencePs[1].style.color = 'green';
        differencePs[1].innerHTML += "&#x2191;"
    } else if (item_1_sign == ' ') {
        differencePs[1].style.color = 'red';
        differencePs[1].innerHTML += "&#x2193;"
    } else {
        differencePs[1].style.color = 'black';
    } 
    // return price_1;
}

increment_1(i);
var intID_A_1 = setInterval(increment_1, 2000, i);

function decrement_1() {
    var decrement = (Math.random() * 5);
    price_1 = (price_1 - decrement).toFixed(2);
    el_price[1].innerText = '$ ' + price_1;
    // return price_1;
}

var intID_B_1;
function stopInt_1() {
    clearInterval(intID_A_1);
    clearInterval(intID_B_1);
    i += .5;

    if (i == 1) {
        id = setInterval(increment_1, 2000, i);
        setTimeout(stopInt_1, 4000);
    } else if (i == 1.5) {
        id = setInterval(increment_1, 2000, i);
        setTimeout(stopInt_1, 4000);
    } else if (i == 2) {
        id = setInterval(decrement_1, 2000);
        setTimeout(stopInt_1, 4000);
    } else if (i == 2.5) {
        id = setInterval(increment_1, 2000, i);
        setTimeout(stopInt_1, 4000);
    } else if (i == 3) {
        id = setInterval(decrement_1, 2000);
        setTimeout(stopInt_1, 4000);
    } else if (i == 3.5) {
        id = setInterval(increment_1, 2000, i);
        setTimeout(stopInt_1, 4000);
    } else if (i == 4) {
        id = setInterval(increment_1, 2000, i);
        setTimeout(stopInt_1, 4000);
    } else if (i == 4.5) {
        id = setInterval(increment_1, 2000, i);
        setTimeout(stopInt_1, 4000);
    } else if (i == 5) {
        id = setInterval(increment_1, 2000, i);
        setTimeout(stopInt_1, 4000);
    } else if (i == 5.5) {
        id = setInterval(decrement_1, 2000);
        setTimeout(stopInt_1, 4000);
    } else {
        i = .5;
    }
}
setTimeout(stopInt_1, 100);
setInterval(stopInt_1, 40100);

//------------------------------------------------------------Item_Price_3
function increment_2(i) {
    var prevPrice = price_2;
    price_2 = ((i * 10) - (Math.random() * 5)).toFixed(2); 
    el_price.eq(2).text('$ ' + price_2);
    el_price_checkout.eq(2).text('$ ' + price_2);
    
    var multiply;
    function currentMultiply(){
        multiply = document.getElementsByClassName('nOfshare')[2].value;
    }
    var inputID = setInterval(currentMultiply, 100);
    if (multiply !== null) {
        function updateTotal(){
            total[2].innerText = (price_2 * multiply).toFixed(2);
        }
        var totalID = setInterval(updateTotal,100);
    }

    var difference = prevPrice - price_2;
    var item_2_sign = signGenerator(difference);
    differencePs[2].innerText = item_2_sign + (difference).toFixed(2);
    if (item_2_sign == ' +') {
        differencePs[2].style.color = 'green';
        differencePs[2].innerHTML += "&#x2191;"
    } else if (item_2_sign == ' ') {
        differencePs[2].style.color = 'red';
        differencePs[2].innerHTML += "&#x2193;"
    } else {
        differencePs[2].style.color = 'black';
    } 
    // return price_2;
}

increment_2(i);
var intID_A_2 = setInterval(increment_2, 2000, i);

function decrement_2() {
    var decrement = (Math.random() * 5);
    price_2 = (price_2 - decrement).toFixed(2);
    el_price[2].innerText = '$ ' + price_2;
    // return price_2;
}

var intID_B_2;
function stopInt_2() {
    clearInterval(intID_A_2);
    clearInterval(intID_B_2);
    i += .5;

    if (i == 1) {
        id = setInterval(increment_2, 2000, i);
        setTimeout(stopInt_2, 100000);
    } else if (i == 1.5) {
        id = setInterval(increment_2, 2000, i);
        setTimeout(stopInt_2, 100000);
    } else if (i == 2) {
        id = setInterval(decrement_2, 2000);
        setTimeout(stopInt_2, 4000);
    } else if (i == 2.5) {
        id = setInterval(increment_2, 2000, i);
        setTimeout(stopInt_2, 4000);
    } else if (i == 3) {
        id = setInterval(decrement_2, 2000);
        setTimeout(stopInt_2, 4000);
    } else if (i == 3.5) {
        id = setInterval(increment_2, 2000, i);
        setTimeout(stopInt_2, 4000);
    } else if (i == 4) {
        id = setInterval(increment_2, 2000, i);
        setTimeout(stopInt_2, 4000);
    } else if (i == 4.5) {
        id = setInterval(increment_2, 2000, i);
        setTimeout(stopInt_2, 4000);
    } else if (i == 5) {
        id = setInterval(increment_2, 2000, i);
        setTimeout(stopInt_2, 4000);
    } else if (i == 5.5) {
        id = setInterval(decrement_2, 2000);
        setTimeout(stopInt_2, 4000);
    } else {
        i = .5;
    }
}
setTimeout(stopInt_2, 100);
setInterval(stopInt_2, 232100);

//------------------------------------------------------------Item_Price_4
function increment_3(i) {
    var prevPrice = price_3;
    price_3 = ((i * 10) - (Math.random() * 5)).toFixed(2); 
    
    el_price.eq(3).text('$ ' + price_3);
    el_price_checkout.eq(3).text('$ ' + price_3);
    
    var multiply;
    function currentMultiply(){
        multiply = document.getElementsByClassName('nOfshare')[3].value;
    }
    var inputID = setInterval(currentMultiply, 100);
    if (multiply !== null) {
        function updateTotal(){
            total[3].innerText = (price_3 * multiply).toFixed(2);
        }
        var totalID = setInterval(updateTotal,100);
    }


    var difference = prevPrice - price_3;
    var item_3_sign = signGenerator(difference);
    differencePs[3].innerText = item_3_sign + (difference).toFixed(2);
    if (item_3_sign == ' +') {
        differencePs[3].style.color = 'green';
        differencePs[3].innerHTML += "&#x2191;"
    } else if (item_3_sign == ' ') {
        differencePs[3].style.color = 'red';
        differencePs[3].innerHTML += "&#x2193;"
    } else {
        differencePs[3].style.color = 'black';
    } 
    // return price_3;
}

increment_3(i);
var intID_A_3 = setInterval(increment_3, 2000, i);

function decrement_3() {
    var decrement = (Math.random() * 5);
    price_3 = (price_3 - decrement).toFixed(2);
    el_price[3].innerText = '$ ' + price_3;
    // return price_3;
}

var intID_B_3;
function stopInt_3() {
    clearInterval(intID_A_3);
    clearInterval(intID_B_3);
    i += .5;

    if (i == 1) {
        id = setInterval(increment_3, 2000, i);
        setTimeout(stopInt_3, 10000);
    } else if (i == 1.5) {
        id = setInterval(increment_3, 2000, i);
        setTimeout(stopInt_3, 100000);
    } else if (i == 2) {
        id = setInterval(decrement_3, 2000);
        setTimeout(stopInt_3, 2000);
    } else if (i == 2.5) {
        id = setInterval(increment_3, 2000, i);
        setTimeout(stopInt_3, 4000);
    } else if (i == 3) {
        id = setInterval(decrement_3, 2000);
        setTimeout(stopInt_3, 2000);
    } else if (i == 3.5) {
        id = setInterval(increment_3, 2000, i);
        setTimeout(stopInt_3, 4000);
    } else if (i == 4) {
        id = setInterval(increment_3, 2000, i);
        setTimeout(stopInt_3, 4000);
    } else if (i == 4.5) {
        id = setInterval(increment_3, 2000, i);
        setTimeout(stopInt_3, 4000);
    } else if (i == 5) {
        id = setInterval(increment_3, 2000, i);
        setTimeout(stopInt_3, 4000);
    } else if (i == 5.5) {
        id = setInterval(decrement_3, 2000);
        setTimeout(stopInt_3, 4000);
    } else {
        i = .5;
    }
}
setTimeout(stopInt_3, 10000);
setInterval(stopInt_3, 147000);

//------------------------------------------------------------Item_Price_5
function increment_4(i) {
    var prevPrice = price_4;
    price_4 = ((i * 10) - (Math.random() * 5)).toFixed(2); 
    
    el_price.eq(4).text('$ ' + price_4);
    el_price_checkout.eq(4).text('$ ' + price_4);
    
    var multiply;
    function currentMultiply(){
        multiply = document.getElementsByClassName('nOfshare')[4].value;
    }
    var inputID = setInterval(currentMultiply, 100);
    if (multiply !== null) {
        function updateTotal(){
            total[4].innerText = (price_4 * multiply).toFixed(2);
        }
        var totalID = setInterval(updateTotal,100);
    }

    var difference = prevPrice - price_4;
    var item_4_sign = signGenerator(difference);
    differencePs[4].innerText = item_4_sign + (difference).toFixed(2);
    if (item_4_sign == ' +') {
        differencePs[4].style.color = 'green';
        differencePs[4].innerHTML += "&#x2191;"
    } else if (item_4_sign == ' ') {
        differencePs[4].style.color = 'red';
        differencePs[4].innerHTML += "&#x2193;"
    } else {
        differencePs[4].style.color = 'black';
    } 
    // return price_4;
}

increment_4(i);
var intID_A_4 = setInterval(increment_4, 2000, i);

function decrement_4() {
    var decrement = (Math.random() * 5);
    price_4 = (price_4 - decrement).toFixed(2);
    el_price[4].innerText = '$ ' + price_4;
    // return price_4;
}

var intID_B_4;
function stopInt_4() {
    clearInterval(intID_A_4);
    clearInterval(intID_B_4);
    i += .5;

    if (i == 1) {
        id = setInterval(increment_4, 2000, i);
        setTimeout(stopInt_4, 10000);
    } else if (i == 1.5) {
        id = setInterval(increment_4, 2000, i);
        setTimeout(stopInt_4, 100000);
    } else if (i == 2) {
        id = setInterval(decrement_4, 2000);
        setTimeout(stopInt_4, 2000);
    } else if (i == 2.5) {
        id = setInterval(increment_4, 2000, i);
        setTimeout(stopInt_4, 4000);
    } else if (i == 3) {
        id = setInterval(decrement_4, 2000);
        setTimeout(stopInt_4, 2000);
    } else if (i == 3.5) {
        id = setInterval(increment_4, 2000, i);
        setTimeout(stopInt_4, 4000);
    } else if (i == 4) {
        id = setInterval(increment_4, 2000, i);
        setTimeout(stopInt_4, 4000);
    } else if (i == 4.5) {
        id = setInterval(increment_4, 2000, i);
        setTimeout(stopInt_4, 4000);
    } else if (i == 5) {
        id = setInterval(increment_4, 2000, i);
        setTimeout(stopInt_4, 4000);
    } else if (i == 5.5) {
        id = setInterval(decrement_4, 2000);
        setTimeout(stopInt_4, 4000);
    } else {
        i = .5;
    }
}
setTimeout(stopInt_4, 10000);
setInterval(stopInt_4, 147000);
//----------------------------Check Out Calculator-----------------------------------

 // //---------------------- Generate Prices ----------------------
// // var el_price = document.getElementById('stock_price');
// var el_price = $('.stock_price');
// var i = .5;
// var price;
// var sign;
// var differencePs = document.getElementById('difference');
// var signGenerator = function(difference){
//     sign = difference > 0 ? ' +' : difference == 0 ? 0 : ' ';
//     return sign;
// }
// function increment(i) {
//     var prevPrice = price;
//     price = ((i * 10) - (Math.random() * 5)).toFixed(2);
//     // el_price.innerText = '$ ' + price;
//     el_price.text('$ ' + price);
//     var difference = prevPrice - price;
//     differencePs.innerText = signGenerator(difference) + (difference).toFixed(2);
//     if (sign == ' +') {
//         differencePs.style.color = 'green';
//         differencePs.innerHTML += "&#x2191;"
//     } else if (sign == ' ') {
//         differencePs.style.color = 'red';
//         differencePs.innerHTML += "&#x2193;"
//     } else {
//         differencePs.style.color = 'black';
//     }
//     // console.log(price);
//     return price;
// }
// increment(i);
// var intID = setInterval(increment, 2000, i);

// function decrement() {
//     // console.log('price before decrement = ' + price);
//     var decrement = (Math.random() * 5);
//     price = (price - decrement).toFixed(2);
//     // el_price.innerText = '$ ' + price;
//     el_price.text('$ ' + price);
//     // console.log('price after decrement = ' + price);
//     return price;
// }

// var id;
// function stopInt() {
//     clearInterval(intID);
//     clearInterval(id);

//     i += .5;
//     // console.log('i is successfully incremented by 1 = ' + i);

//     if (i == 1) {
//         id = setInterval(increment, 2000, i);
//         setTimeout(stopInt, 10000);
//     } else if (i == 1.5) {
//         id = setInterval(increment, 2000, i);
//         setTimeout(stopInt, 10000);
//     } else if (i == 2) {
//         id = setInterval(decrement, 2000);
//         setTimeout(stopInt, 4000);
//     } else if (i == 2.5) {
//         id = setInterval(increment, 2000, i);
//         setTimeout(stopInt, 10000);
//     } else if (i == 3) {
//         id = setInterval(decrement, 2000);
//         setTimeout(stopInt, 4000);
//     } else if (i == 3.5) {
//         id = setInterval(increment, 2000, i);
//         setTimeout(stopInt, 10000);
//     } else if (i == 4) {
//         id = setInterval(increment, 2000, i);
//         setTimeout(stopInt, 10000);
//     } else if (i == 4.5) {
//         id = setInterval(increment, 2000, i);
//         setTimeout(stopInt, 10000);
//     } else if (i == 5) {
//         id = setInterval(increment, 2000, i);
//         setTimeout(stopInt, 10000);
//     } else if (i == 5.5) {
//         id = setInterval(decrement, 2000);
//         setTimeout(stopInt, 15000);
//     } else {
//         i = .5;
//     }
// }
// setTimeout(stopInt, 10000);
// setInterval(stopInt, 101000);