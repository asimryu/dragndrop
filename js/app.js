// app.js
$.getJSON("data/products.json",function(data){
	for(var i=0;i<data.length;i++){
		$("#productsbox").append(getProductHtml(data[i]));
	}
	$(".product").draggable({
		helper: "clone"
	});	
});

function getProductHtml(data){
	if( ! data ) return "";
	var product = "<div class='product' data-id='" + data.id + "'>";
	product += "<p class='product-name'>" + data.product + "</p>";
	product += "<p class='product-price'>" + data.price + "</p>";
	product += "<p class='product-detail'>" + data.detail + "</p>";
	product += "<p class='product-btns'><button class='btn btn-warning btn-sm'><span class='glyphicon glyphicon-trash'></button></p>";
	product += "</div>";
	return product;
}



$(".cartbox").droppable({

});