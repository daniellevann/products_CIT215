var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];

function productStore(fruits) {
  var that = this;
  this.ele = document.createElement("div");
  this.product = document.createElement("div");
  this.product.classList.add("product");
  this.nameEle = document.createElement("div");
  this.idEle = document.createElement("div");
  this.priceEle = document.createElement("div");
  this.imageEle = document.createElement("img");
  this.nameEle.innerHTML = fruits.name;
  this.priceEle.innerHTML = fruits.price;
  this.imageEle.src= fruits.image;
  this.product.appendChild(this.imageEle);
  this.product.appendChild(this.nameEle);
  this.product.appendChild(this.priceEle);
  this.product.addEventListener("mouseOver", function(fruits) {
  style.borderColor=fruits.color
  }
  );
  this.product.style.borderColor=fruits.color;
  this.ele.appendChild(this.product);
  document.body.appendChild(this.ele);
  this.ele.addEventListener("click", function(){
    popUp(fruits);
  }); 
}
var popUpEle = document.createElement("div");


function popUp(fruits) {
  this.nameEle.innerHTML = fruits.name;
  this.priceEle.innerHTML = fruits.price;
  this.imageEle.src = fruits.image;
  this.popUpEle.classList.add("popUp");
  this.popUpEle.appendChild(this.imageEle);
  this.popUpEle.appendChild(this.nameEle);
  this.popUpEle.appendChild(this.priceEle);
  this.ele.appendChild(this.popUpEle);
  this.popUpEle.addEventListener("click", function () {
    productStore();
  });
}

for (var i = 0; i < products.length; i++) {
  productStore(products[i]);
}