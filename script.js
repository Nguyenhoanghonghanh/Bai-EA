// Scroll
const scrollTop = document.querySelector("#scroll-top");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300) {
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active");
    }
})

// searchbar
$(document).ready(function(){
    $(".dropdown .default-option").click(function(){
        $(".dropdown-list ul").toggleClass("active");
    });
    $(".dropdown-list ul li").click(function(){
        const icon_text = $(this).html();
        $(".default-option").html(icon_text);
    });
});

$(document).ready(function(){
    $(".menu-item").click(function(){
        $(".menu-sub").toggleClass("active");
    });
});
// Hamburger
$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".menu").toggleClass("active");
    });
});

// Slide-image
let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
// Login
function validation(){
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "";
    }else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Email address is invalid"
    }
}
// tab-content
    const content1 = document.getElementById("content-1");
    const content2 = document.getElementById("content-2");
    const content3 = document.getElementById("content-3");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

        function openContent1(){
            content1.style.transform = "translateX(0)";
            content2.style.transform = "translateX(100%)";
            content3.style.transform = "translateX(100%)";
            btn1.style.color = "#000";
            btn1.style.background = "#dbdbdb";
            btn1.style.borderBottom = "thick solid #ff0000";
            btn2.style.color = "#000";
            btn2.style.background = "none";
            btn2.style.borderBottom = "none"
            btn3.style.color = "#000";
            btn3.style.background = "none";
            btn3.style.borderBottom = "none";
            content1.style.transitionDelay = "0.2s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0s";
        }
        function openContent2(){
            content1.style.transform = "translateX(100%)";
            content2.style.transform = "translateX(0)";
            content3.style.transform = "translateX(100%)";
            btn1.style.color = "#000";
            btn1.style.background = "none";
            btn1.style.borderBottom = "none";
            btn2.style.color = "#000";
            btn2.style.background = "#dbdbdb";
            btn2.style.borderBottom = "thick solid #ff0000";
            btn3.style.color = "#000";
            btn3.style.background = "none";
            btn3.style.borderBottom = "none";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0.2s";
            content3.style.transitionDelay = "0s";
        }
        function openContent3(){
            content1.style.transform = "translateX(100%)";
            content2.style.transform = "translateX(100%)";
            content3.style.transform = "translateX(0)";
            btn1.style.color = "#000";
            btn1.style.background = "none";
            btn1.style.borderBottom = "none";
            btn2.style.color = "#000";
            btn2.style.background = "none";
            btn2.style.borderBottom = "none";
            btn3.style.color = "#000";
            btn3.style.background = "#dbdbdb";
            btn3.style.borderBottom = "thick solid #ff0000";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0.2s";
        }
// ---------------------------------shopping-cart--------------------
    // Modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("cart");
const close = document.getElementsByClassName("close")[0];

const close_footer = document.getElementsByClassName("close-footer")[0];
const order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("THANK YOU FOR PURCHASING")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// remove-cart
const remove_cart = document.getElementsByClassName("btn-danger");
for (let i = 0; i < remove_cart.length; i++) {
  let button = remove_cart[i]
  button.addEventListener("click", function (event) {
    const button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
}
// update cart 
function updatecart() {
  let cart_item = document.getElementsByClassName("cart-items")[0];
  let cart_rows = cart_item.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cart_rows.length; i++) {
    let cart_row = cart_rows[i]
    let price_item = cart_row.getElementsByClassName("cart-price ")[0]
    let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    let price = parseFloat(price_item.innerText)
    let quantity = quantity_item.value
    total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + '$'
}
// Quantity
const quantity_input = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantity_input.length; i++) {
  let input = quantity_input[i];
  input.addEventListener("change", function (event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}
// Add to cart
const add_cart = document.getElementsByClassName("btn-cart");
for (let i = 0; i < add_cart.length; i++) {
  let add = add_cart[i];
  add.addEventListener("click", function (event) {

    let button = event.target;
    let product = button.parentElement.parentElement;
    const img = product.parentElement.getElementsByClassName("img-prd")[0].src
    const title = product.getElementsByClassName("content-product-h3")[0].innerText
    const price = product.getElementsByClassName("price")[0].innerText
    addItemToCart(title, price, img)
    modal.style.display = "block";
    
    updatecart()
  })
}

function addItemToCart(title, price, img) {
  const cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  const cartItems = document.getElementsByClassName('cart-items')[0]
  const cart_title = cartItems.getElementsByClassName('cart-item-title')

  for (let i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Product has been added to your cart')
      return
    }
  }

  let cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Remove</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    let button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}


