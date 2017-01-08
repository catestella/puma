// product constructor
function Shoes(name, size, price, image) {
	this.name = name
	this.size = size
	this.price = price
	this.image = image
}

// create new products from the product constructor
var clyde1 = new Shoes("CLYDE Dressed Part Deux FM", "size", "$100", "img/clyde1.jpg")
var clyde2 = new Shoes("CLYDE Dressed Part Deux FM", "size", "$100", "img/clyde2.jpg")
var clyde3 = new Shoes("Clyde Dressed Part Deux FM", "size", "$100", "img/clyde3.jpg")
var clyde4 = new Shoes("Clyde Dressed Part Deux FM", "size", "$100", "img/clyde4.jpg")
var clyde5 = new Shoes("Clyde Dressed Part Deux FM", "size", "$100", "img/clyde5.jpg")
var clyde6 = new Shoes("Clyde Dressed Part Deux FM", "size", "$100", "img/clyde6.jpg")
var clyde7 = new Shoes("Clyde Dressed Part Deux FM", "size", "$100", "img/clyde7.jpg")
var clyde8 = new Shoes("Clyde Dressed Part Deux FM", "size", "$100", "img/clyde8.jpg")
var clyde9 = new Shoes("Clyde Dressed Part Deux FM", "size", "$100", "img/clyde9.jpg")

// create an array to add products to
var shoesArray = new Array

// add products to array of products
shoesArray.push(clyde1, clyde2, clyde3, clyde4, clyde5, clyde6, clyde7, clyde8, clyde9)

// loop through products array
