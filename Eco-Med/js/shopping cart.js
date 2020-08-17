if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Заказ принят в обработку!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.currentTarget
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    //var title_index = shopItem.getElementsByClassName('shop-item-title')[0].options[shopItem.getElementsByClassName('shop-item-title')[0].selectedIndex].innerText 
   // var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerHTML
    var volume = shopItem.getElementsByClassName('shop-item-volume')[0].options[shopItem.getElementsByClassName('shop-item-volume')[0].selectedIndex].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    if (shopItem.getElementsByClassName('shop-item-title')[0].selectedIndex != undefined)
    {addItemToCart(shopItem.getElementsByClassName('shop-item-title')[0].options[shopItem.getElementsByClassName('shop-item-title')[0].selectedIndex].innerText, price, volume, imageSrc)} 
    else {addItemToCart(shopItem.getElementsByClassName('shop-item-title')[0].innerText, price, volume, imageSrc)}
    updateCartTotal()
    
}

function addItemToCart(title, price, volume, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    alert('Добавлено в корзину')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    // for (var i = 0; i < cartItemNames.length; i++) {
    //      if (cartItemNames[i].innerText == title) {
    //     alert('Вы уже добавели эту позицию')
    //          return
    //      }
    // }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <div class="cart-volume cart-column">
        <span class="cart-volume">${volume}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-danger" type="button"><i class="fa fa-trash-o"></i></button>
        </div>`
    // $('.btn-danger').prepend('<i class="fa fa-trash-o"></i>');
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' ' +'грн'
}
function count() {
  var count=document.getElementById('count');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  for(var i in cartItems) {
    if (cartItems[i].name === name) {
      cartItems[i].count = count;
    break;
  }

  }
  $('.count').html(count());
}

// Вызов модального окна
$('.button').click( function() {
  $('.overlay').fadeIn();
  $('body').css('overflow','hidden');
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
	$('.overlay').fadeOut();
});

// Закрытие окна на поле
$(document).mouseup( function (e) { 
	var popup = $('.popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
	}
});



