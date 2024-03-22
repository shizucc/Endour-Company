const SERVICES = [
  {
    name: "Endour Studio",
    logo: "/assets/img/studio_logo.png",
    description:
      "Endour Studio adalah studio independen <strong>Pengembang Game</strong>  yang berfokus pada game 2D untuk platform Windows, Linux, Android, dan Web.",
    url: "https://studio-endour.rf.gd/",
    images: [
      "/assets/img/service/lykaia_cover.png",
      "/assets/img/service/lykaia_gameplay.png",
      "/assets/img/service/osareta_cover.png",
      "/assets/img/service/osareta_gameplay.png",
    ],
    color: "#092635",
  },
  {
    name: "Endour Software",
    logo: "/assets/img/company_logo.png",

    description:
      "Endour Software adalah software house yang bergerak dalam <strong>Pengembangan Aplikasi Perangkat Lunak</strong> untuk Web, Mobile, serta Robotika dan IoT.",
    url: "http://software-endour.rf.gd/",
    images: [
      "/assets/img/service/aray.jpg",
      "/assets/img/service/insideU.jpg",
      "/assets/img/service/ionchat.jpg",
    ],
    color: "#9EC8B9",
  },
];

const AUTO_NEXT_SLIDE_DURATION = 4000;

function handleCarousel(identifier) {
  const serviceCaraouselContents = document.querySelectorAll(
    `.service-carousel-content-${identifier}`
  );

  serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
    serviceCaraouselContent.style.transform = `translateX(${index * 100}%)`;
  });

  let curSlide = 0;
  let maxSlide = serviceCaraouselContents.length - 1;

  let interval;
  interval = setInterval(toNextSlide, AUTO_NEXT_SLIDE_DURATION);
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(toNextSlide, AUTO_NEXT_SLIDE_DURATION);
  }

  function toNextSlide() {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
      serviceCaraouselContent.style.transform = `translateX(${
        100 * (index - curSlide)
      }%)`;
    });
  }
  function toPrevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide -= 1;
    }

    serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
      serviceCaraouselContent.style.transform = `translateX(${
        100 * (index - curSlide)
      }%)`;
    });
  }

  function handleNext() {
    resetInterval();
    toNextSlide();
  }
  function handlePrev() {
    resetInterval();
    toPrevSlide();
  }
  const nextSlide = document.getElementById(`btn-next-${identifier}`);
  nextSlide.addEventListener("click", handleNext);
  const prevSlide = document.getElementById(`btn-prev-${identifier}`);
  prevSlide.addEventListener("click", handlePrev);

  return () => {
    clearInterval(interval);
  };
}

function product_carousel() {
  let products = document.getElementsByClassName("products");
  let products_img = document.getElementsByClassName("product-img");

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

function insertServiceToDOM(serviceList) {
  const services = document.getElementById("services");

  serviceList.forEach((service) => {
    const { name, logo, description, url, images, color } = service;
    const identifier = name.replace(/\s/g, "");
    const serviceContainer = document.createElement("div");
    serviceContainer.className = "service";
    serviceContainer.style.backgroundColor = color;

    const serviceBody = document.createElement("article");

    const serviceHeader = serviceHeaderBuilder(logo, name, url);

    const serviceDescription = document.createElement("p");
    serviceDescription.innerHTML = description;

    const serviceCarousel = serviceCarouselBuilder(images, identifier);

    const serviceFooter = serviceFooterBuilder(url);
    serviceBody.append(
      serviceHeader,
      serviceDescription,
      serviceCarousel,
      serviceFooter
    );
    serviceContainer.append(serviceBody);
    services.append(serviceContainer);

    const handleThisCarousel = handleCarousel(identifier);
  });

  function serviceHeaderBuilder(imageSrc, headerTitle, url) {
    const serviceHeader = document.createElement("div");
    serviceHeader.className = "service-header";

    const imageButton = document.createElement("a");
    imageButton.href = url;
    imageButton.target = "_blank";
    imageButton.innerHTML = `<img src=${imageSrc} alt="cover_img">`;
    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = "cover_img";

    const titleButton = document.createElement("a");
    titleButton.href = url;
    titleButton.target = "_blank";
    titleButton.innerHTML = `<h3>${headerTitle}<h3>`;

    serviceHeader.append(imageButton, titleButton);

    return serviceHeader;
  }

  function serviceCarouselBuilder(images, identifier) {
    const carousel = document.createElement("div");
    carousel.className = "service-carousel";

    images.forEach((image) => {
      const carouselContent = document.createElement("div");
      carouselContent.className = `service-carousel-content-${identifier}`;

      const img = document.createElement("img");
      img.src = image;
      img.alt = "service_content_img";

      carouselContent.append(img);
      carousel.append(carouselContent);
    });
    const btnNext = document.createElement("button");
    btnNext.className = "btn btn-next";
    btnNext.id = `btn-next-${identifier}`;
    btnNext.innerText = ">";

    const btnPrev = document.createElement("button");
    btnPrev.className = "btn btn-prev";
    btnPrev.id = `btn-prev-${identifier}`;
    btnPrev.innerText = "<";

    carousel.append(btnNext, btnPrev);
    return carousel;
  }

  function serviceFooterBuilder(url) {
    const footer = document.createElement("div");
    footer.className = "service-footer";

    const gotoLink = document.createElement("p");

    gotoLink.innerHTML = `<a href="${url}" target="_blank">SELENGKAPNYA</a>`;

    const gotoButton = document.createElement("a");
    gotoButton.target = "_blank";
    gotoButton.href = url;
    gotoButton.innerHTML = `<img src="/assets/img/go_to.png" alt="goto_button">`;

    footer.append(gotoLink, gotoButton);

    return footer;
  }
}
var product_index = 0;
var product_img_index = 0;

document.addEventListener("DOMContentLoaded", () => {
  product_carousel();
  insertServiceToDOM(SERVICES);
  console.log("Hello");
});
