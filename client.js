//------- Parsing 10 arrays each with 5 stock objects ---------
//???????????????????????????? Array Count 0-4, 5-9, 10- 15 ...
//???????????????????????????? Inside a For Loop, incrementing var i joins the name of variable. 
var stock0 = JSON.parse(data_array_0);
var stock1 = JSON.parse(data_array_1);
var stock2 = JSON.parse(data_array_2);
var stock3 = JSON.parse(data_array_3);
var stock4 = JSON.parse(data_array_4);
var stock5 = JSON.parse(data_array_5);
var stock6 = JSON.parse(data_array_6);
var stock7 = JSON.parse(data_array_7);
var stock8 = JSON.parse(data_array_8);
var stock9 = JSON.parse(data_array_9);

//------------------------ Stock Names ------------------------
var stock_item_0 = stock0[Math.floor(Math.random() * 5)];
var stock_item_1 = stock1[Math.floor(Math.random() * 5)];
var stock_item_2 = stock2[Math.floor(Math.random() * 5)];
var stock_item_3 = stock3[Math.floor(Math.random() * 5)];
var stock_item_4 = stock4[Math.floor(Math.random() * 5)];
var stock_item_5 = stock5[Math.floor(Math.random() * 5)];
var stock_item_6 = stock6[Math.floor(Math.random() * 5)];
var stock_item_7 = stock7[Math.floor(Math.random() * 5)];
var stock_item_8 = stock8[Math.floor(Math.random() * 5)];
var stock_item_9 = stock9[Math.floor(Math.random() * 5)];

$('#stock_item_1').text(stock_item_0.stock_name);
$('#stock_item_2').text(stock_item_1.stock_name);
$('#stock_item_3').text(stock_item_2.stock_name);
$('#stock_item_4').text(stock_item_3.stock_name);
$('#stock_item_5').text(stock_item_4.stock_name);
$('#stock_item_6').text(stock_item_5.stock_name);
$('#stock_item_7').text(stock_item_6.stock_name);
$('#stock_item_8').text(stock_item_7.stock_name);
$('#stock_item_9').text(stock_item_8.stock_name);
$('#stock_item_10').text(stock_item_9.stock_name);

//------------------------- Live Time -------------------------
function theTime() {
  var today = new Date();
  var formattedDate = today.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  var time = today.toLocaleTimeString('en-US');
  $('.date').html(formattedDate + '/ ' + time);
}

$(document).ready(function (e) {
  theTime();
  setInterval(theTime, 500);
});

//----------------------- Import Details ----------------------
document.getElementsByClassName('stock_symbol')[0].innerText = " " + stock_item_0.stock_symbol + ",";
document.getElementsByClassName('stock_symbol')[1].innerText = " " + stock_item_1.stock_symbol + ",";
document.getElementsByClassName('stock_symbol')[2].innerText = " " + stock_item_2.stock_symbol + ",";
document.getElementsByClassName('stock_symbol')[3].innerText = " " + stock_item_3.stock_symbol + ",";
document.getElementsByClassName('stock_symbol')[4].innerText = " " + stock_item_4.stock_symbol + ",";

document.getElementsByClassName('stock_market')[0].innerText = " " + stock_item_0.stock_market + ",";
document.getElementsByClassName('stock_market')[1].innerText = " " + stock_item_1.stock_market + ",";
document.getElementsByClassName('stock_market')[2].innerText = " " + stock_item_2.stock_market + ",";
document.getElementsByClassName('stock_market')[3].innerText = " " + stock_item_3.stock_market + ",";
document.getElementsByClassName('stock_market')[4].innerText = " " + stock_item_4.stock_market + ",";

document.getElementsByClassName('stock_sector')[0].innerText = " " + stock_item_0.stock_sector + ",";
document.getElementsByClassName('stock_sector')[1].innerText = " " + stock_item_1.stock_sector + ",";
document.getElementsByClassName('stock_sector')[2].innerText = " " + stock_item_2.stock_sector + ",";
document.getElementsByClassName('stock_sector')[3].innerText = " " + stock_item_3.stock_sector + ",";
document.getElementsByClassName('stock_sector')[4].innerText = " " + stock_item_4.stock_sector + ",";

document.getElementsByClassName('stock_industry')[0].innerText = " " + stock_item_0.stock_industry + ",";
document.getElementsByClassName('stock_industry')[1].innerText = " " + stock_item_0.stock_industry + ",";
document.getElementsByClassName('stock_industry')[2].innerText = " " + stock_item_0.stock_industry + ",";
document.getElementsByClassName('stock_industry')[3].innerText = " " + stock_item_0.stock_industry + ",";
document.getElementsByClassName('stock_industry')[4].innerText = " " + stock_item_0.stock_industry + ",";

document.getElementsByClassName('stock_market_cap')[0].innerText = " " + stock_item_0.stock_market_cap;
document.getElementsByClassName('stock_market_cap')[1].innerText = " " + stock_item_1.stock_market_cap;
document.getElementsByClassName('stock_market_cap')[2].innerText = " " + stock_item_2.stock_market_cap;
document.getElementsByClassName('stock_market_cap')[3].innerText = " " + stock_item_3.stock_market_cap;
document.getElementsByClassName('stock_market_cap')[4].innerText = " " + stock_item_4.stock_market_cap;

//----------------------- Buy Transfer ----------------------

var myfund = 500;
var valuation = 0;
var availableFund = document.getElementById('availableFund');
var valuationFund = document.getElementById('valuationFund');
availableFund.innerText = "$ " + myfund;
valuationFund.innerText = "$ " + valuation;
// function updateFund(){
//   availableF.innerText = "$ " + myfund;
//   valuationF.innerText = "$ " + valuation;
// }
// updateFund();
// var fundID = setInterval(updateFund, 100);

function dataCollect(p) {
  var data = document.getElementsByClassName('btn')[p].parentElement.parentElement.previousElementSibling.firstElementChild.innerText;
  document.getElementsByClassName('boughtName')[p].innerText = data;
  var n_of_share = document.getElementsByClassName('nOfshare')[p].value;
  document.getElementsByClassName('n_of_share')[p].innerText = n_of_share;

  // var total_valuation;
  var currentValue = document.getElementsByClassName('currentValue');

  function currentPC() {
    currentValue[p].innerText = '$ ' + (total[p].innerText);

    // // for (let i = 0; i < 5; i++) {

    // // }
    // var a = +total[p].innerText;  

    //  total_valuation = a+a;
    //  valuationFund.innerText = "$ " + total_valuation;

    availableFund.innerText = "$ " + (500 - (total[p].innerText));
    valuationFund.innerText = "$ " + (total[p].innerText);

  }
  var fundID = setInterval(currentPC, 100);
}




