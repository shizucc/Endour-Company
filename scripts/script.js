function insertServiceToDOM(serviceList) {
  const services = document.getElementById("services");
  console.log(services);

  serviceList.forEach((service) => {
    const { name, logo, description, url, images } = service;
    const identifier = name.replace(/\s/g, "");
    const serviceContainer = document.createElement("div");
    serviceContainer.className = "service";

    const serviceBody = document.createElement("article");

    const serviceHeader = serviceHeaderBuilder(logo, name);

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

  function serviceHeaderBuilder(imageSrc, headerTitle) {
    const serviceHeader = document.createElement("div");
    serviceHeader.className = "service-header";

    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = "cover_img";

    const title = document.createElement("h3");
    title.innerText = headerTitle;

    serviceHeader.append(image, title);

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
    gotoLink.innerHTML = `<a href=${url}>SELENGKAPNYA</a>`;

    const gotoIcon = document.createElement("img");
    gotoIcon.src = "/assets/img/go_to.png";
    gotoIcon.alt = "goto_button";
    footer.append(gotoLink, gotoIcon);

    return footer;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  insertServiceToDOM(SERVICES);
});
