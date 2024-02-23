document.addEventListener("DOMContentLoaded", () => {
    const serviceCaraouselContents = document.querySelectorAll(".service-carousel-content")
    console.log(serviceCaraouselContents)

    serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
        serviceCaraouselContent.style.transform =`translateX(${index * 100}%)`;
    })

    
    const nextSlide = document.querySelector(".btn-next")
    let curSlide = 0
    let maxSlide = serviceCaraouselContents.length -1

    nextSlide.addEventListener("click", function(){
        if(curSlide === maxSlide){
            curSlide = 0
        } else {
            curSlide++
        }

        serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
            serviceCaraouselContent.style.transform = `translateX(${100 * (index - curSlide)}%)`;
        })
    })

    const prevSlide = document.querySelector(".btn-prev")
    prevSlide.addEventListener("click", function(){
        if(curSlide === 0){
            curSlide = maxSlide
        } else {
            curSlide -=1
        }

        serviceCaraouselContents.forEach((serviceCaraouselContent, index) => {
            serviceCaraouselContent.style.transform = `translateX(${100 * (index - curSlide)}%)`;
        })
    })
})