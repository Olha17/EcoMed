// Responsive Nav
$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

//PRICE//
var obj = [
  [80,160,240,320,400],
  [75,150,225,300,375],
  [65,130,195,260,325]
];

function honchange(h,v) {
document.getElementById("astest").innerHTML = obj[h][v] + " грн"
  };

var creamObj = [
    [75,150,225],
    [65,130,195]
  ];
  
  function creamHonchange(h,v) {
  document.getElementById("creamAstest").innerHTML = creamObj[h][v] + " грн"
  };

  var pergaObj = [
    2,100,170,300
  ];
  
  function pergaHonchange(h) {
  document.getElementById("pergaAstest").innerHTML = pergaObj[h] + " грн"
  };

  var pergapastaObj = [
    200,400
  ];
  
  function pergapastaHonchange(h) {
  document.getElementById("pergapastaAstest").innerHTML = pergapastaObj[h] + " грн"
  };

  var gemoObj = [
    100,200,500
  ];
  
  function gemoHonchange(h) {
  document.getElementById("gemoAstest").innerHTML = gemoObj[h]  + " грн"
  };

  var podmorObj = [
    1.5,45,150
  ];
  
  function podmorHonchange(h) {
  document.getElementById("podmorAstest").innerHTML = podmorObj[h]  + " грн"
  };

  var orehObj = [
    [150,300,450],
    [130,260,390]
  ];
  
  function orehHonchange(h,v) {
  document.getElementById("orehAstest").innerHTML = orehObj[h][v]  + " грн"
  };

  var sotiObj = [
    [300,450],
    [260,390]
  ];
  
  function sotiHonchange(h,v) {
  document.getElementById("sotiAstest").innerHTML = sotiObj[h][v]  + " грн"
  };

  var NPObj = [
    1,50,100
  ];
  
  function NPHonchange(h) {
  document.getElementById("NPAstest").innerHTML = NPObj[h]  + " грн"
  };

  var propolisObj = 
  [3,30,300];
  
  function propolisHonchange(h) {
  document.getElementById("propolisAstest").innerHTML = propolisObj[h]  + " грн"
  };

  var NSPObj = [
    1.5,80,150
  ];
  
  function NSPHonchange(h) {
  document.getElementById("NSPAstest").innerHTML = NSPObj[h] + " грн"
  };

  var VMObj = [
    80,400,800
  ];
  
  function VMHonchange(h) {
  document.getElementById("VMAstest").innerHTML = VMObj[h] + " грн"
  };

  var NVMObj = [
    70,3500,7000
  ];
  
  function NVMHonchange(h) {
  document.getElementById("NVMAstest").innerHTML = NVMObj[h]  + " грн"
  };

  var voskObj = [
    2,10,20,100,200
  ];
  
  function voskHonchange(h) {
  document.getElementById("voskAstest").innerHTML = voskObj[h]  + " грн"
  };

  var zabrusObj = [
    80,160
  ];
  
  function zabrusHonchange(h) {
  document.getElementById("zabrusAstest").innerHTML = zabrusObj[h]  + " грн"
  };

  
  function Complete(){
    /*var szTxtHead ="Ваш заказ:\n";*/
    var szTxtAnswer =" "; 
    var h1 = document.getElementById("honey");
    var h2 = document.getElementById("honeySize");
    var h4 = document.getElementById("astest").innerHTML;
    var myItems = h1.options[h1.selectedIndex].text + ' - ' + h2.options[h2.selectedIndex].text + ' - '
    + ' = ' + h4;
    
    szTxtAnswer="Ваш заказ: "+myItems.text;
                return(myItems);
  };


function myOrder() {
    var orderedItems = document.getElementsByClassName('cart-items')[0].getElementsByClassName('cart-row').length
    var order="-"
    for (var i = 0; i < orderedItems; i++){
//сорт
var sort=document.getElementsByClassName('cart-items')[0].getElementsByClassName('cart-row')[i].getElementsByClassName('cart-item-title')[0].innerText;

//объем
var obiem=document.getElementsByClassName('cart-items')[0].getElementsByClassName('cart-row')[i].getElementsByClassName('cart-volume')[0].innerText;

//Кол-во
var kolich=document.getElementsByClassName('cart-items')[0].getElementsByClassName('cart-row')[i].getElementsByClassName('cart-quantity-input')[0].value;

order = order+ " " +sort+ ", " +obiem+ ", " +kolich+ " шт%0A-"  
}
  //сумма
  var vsego=document.getElementsByClassName('cart-total-price')[0].innerText
  order = order+ " Всего: " +vsego
  return(order)
}



  // bot
document.querySelector('.btn-purchase').onclick=function() {
    let tel=document.querySelector('.tel').value;
    let city=document.querySelector('.city').value;
    let post=document.querySelector('.post').value;
    let nameDate=document.querySelector('.nameDate').value;
    let comment=document.querySelector('.comment').value;

    let info=myOrder();
    const token="1347965586:AAF2o4-SKgdplMUNaOwvTZSo_R5drK1Cs1Y"
    let url="https://api.telegram.org/bot"+token+"/sendMessage?chat_id=-356363406&text="
    let xhttp=new XMLHttpRequest();
    xhttp.open('GET', url+"Заказ:%0A"+info+". "+"%0AИнфа от заказчика: "+"%0Aтелефон:"+tel +"%0AГород: "+ city +"%0Aновая почта: "+ post +"%0AФИО:"+nameDate +"%0Aкомментарий:"+comment, true);
    xhttp.send();
  }

  

  //CAPTCHA
  
// // функция для генерации случайных чисел в диапазоне от m до n
// function randomNumber(m,n){
//   m = parseInt(m);
//   n = parseInt(n);
//   return Math.floor( Math.random() * (n - m + 1) ) + m;
// };

// var aspmA = randomNumber(1,23); // генерируем число
// var aspmB = randomNumber(1,23); // генерируем число
// var sumAB = aspmA + aspmB;  // вычисляем сумму
// document.getElementById('aspm').innerHTML = aspmA + ' + ' + aspmB + ' = ';  // показываем пользователю выражение
// document.formName.md5.value = md5(sumAB);  // присваиваем скрытому полю name="md5" контрольную сумму

