const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 10,
    touch: false
})