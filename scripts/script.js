var product_index = 0
var product_img_index = 0
product_carousel()

function product_carousel() {
    let products = document.getElementsByClassName("products");
    let products_img = document.getElementsByClassName("product-carousel");

    for (let product of products) {
        product.style.display = "none";
    }

    for (let product_img of products_img) {
        product_img.style.display = "none";
    }

    products[product_index].style.display = "inline";
    products_img[product_img_index].style.display = "block";
    product_index++;
    if (product_index >= products.length) product_index = 0;
    product_img_index++;
    if (product_img_index >= products_img.length) product_img_index = 0;
    setTimeout(product_carousel, 2500);
}