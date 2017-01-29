// product constructor
function Shoes(name, size, color, price, image) {
	this.name = name
	this.size = size
	this.color = color
	this.price = price
	this.image = image
}

// create new products from the product constructor
var clyde1 = new Shoes("CLYDE DRESSED", "size", "Black", "$100", "img/clyde1.jpg")
var clyde2 = new Shoes("CLYDE DRESSED", "size", "White", "$100", "img/clyde2.jpg")
var clyde3 = new Shoes("CLYDE SUITS", "size", "Oatmeal-Black-White", "$100", "img/clyde3.jpg")
var clyde4 = new Shoes("CLYDE SUITS", "size", "Solar Power-Black-White", "$100", "img/clyde4.jpg")
var clyde5 = new Shoes("CLYDE NYC", "size", "Vibrant Orange-Royal", "$85", "img/clyde5.jpg")
var clyde6 = new Shoes("CLYDE WRAITH", "size", "Cordovan-Corovan", "$79.99", "img/clyde6.jpg")
var clyde7 = new Shoes("CLYDE WRAITH", "size", "Black-Black", "$79.99", "img/clyde7.jpg")
var clyde8 = new Shoes("CLYDE B&C", "size", "Steel Gray-Peacoat", "$85", "img/clyde8.jpg")
var clyde9 = new Shoes("CLYDE B&C", "size", "Winetasting-Black", "$85", "img/clyde9.jpg")

// create an array to add products to
var shoesArray = new Array

// add products to array of products
shoesArray.push(clyde1, clyde2, clyde3, clyde4, clyde5, clyde6, clyde7, clyde8, clyde9)

// loop through products array
for(var i = 0; i < shoesArray.length; i++) {
	// create new elements for each product
	var newItem = document.createElement("div")
	var newDiv  = document.createElement("div")
	var nameH1  = document.createElement("h1")
	var priceH4  = document.createElement("h4")
	var colorH4 = document.createElement("h4")
	var btn     = document.createElement("button")
	var image   = document.createElement("img")

	// create text for new elements
	var tName   = document.createTextNode(shoesArray[i].name)
	var tPrice   = document.createTextNode("Price: " + shoesArray[i].price)
	var tColor = document.createTextNode("Color: " + shoesArray[i].color)
	var tButton = document.createTextNode("Buy Now!")

	// update source attributes
	image.src = shoesArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"

	// add text to elements
	nameH1.appendChild(tName)
	priceH4.appendChild(tPrice)
	colorH4.appendChild(tColor)
	btn.appendChild(tButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)

}
