var product_index = 0
product_carousel()

function product_carousel() {
    let products = document.getElementsByClassName("product-carousel");

    for (let product of products) {
        product.style.display = "none";
    }

    products[product_index].style.display = "block";
    product_index++;
    if (product_index >= products.length) product_index = 0;
    setTimeout(product_carousel, 2500);
}