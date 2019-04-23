// import slick from 'slick-carousel'

window.addEventListener('load', () => {
  let imagesOfSeriesAnimate = document.querySelectorAll('.recent-series .grid-of-series .serie')
  let imagesOfMoviesAnimate = document.querySelectorAll('.recent-movies .grid-of-movies .movie')
  let imagesOfRecommendedMoviesAnimate = document.querySelectorAll('.recommended .grid-of-movies .movie')

  for (const image of imagesOfSeriesAnimate) {
    image.addEventListener('mouseenter', () => {
      image.classList.add('layer')
    })

    image.addEventListener('mouseleave', () => {
      image.classList.remove('layer')
    })
  }

  for (const image of imagesOfMoviesAnimate) {
    image.addEventListener('mouseenter', () => {
      image.classList.add('layer')
    })

    image.addEventListener('mouseleave', () => {
      image.classList.remove('layer')
    })
  }

  for (const image of imagesOfRecommendedMoviesAnimate) {
    image.addEventListener('mouseenter', () => {
      image.classList.add('layer')
    })

    image.addEventListener('mouseleave', () => {
      image.classList.remove('layer')
    })
  }
})

$('.slider-1').slick({
  slidesToShow: 6,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        infinite: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: true
      }
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
    }, 
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    }, 
    {
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
});



