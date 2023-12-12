$(document).ready(function() {
    var carouselWidth = $('#carousel-container').width();
    var currentSlide = 0;
    var totalSlides = $('.carousel-img').length;
    var slideInterval;

    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, 3000);
    }
  
    function nextSlide() {
      var previousSlide = currentSlide;
      currentSlide = (currentSlide + 1) % totalSlides;
     
      // animacion 
      $('.carousel-img')
        .eq(previousSlide)
        .fadeOut(500, function() {
          $('.carousel-img')
            .eq(currentSlide)
            .fadeIn(500);
        });
    }
  
    function prevSlide() {
      var previousSlide = currentSlide;
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

      $('.carousel-img')
        .eq(previousSlide)
        .fadeOut(500, function() {
          $('.carousel-img')
            .eq(currentSlide)
            .fadeIn(500);
        });
    }
  
    $('#prev-btn').click(function() {
      clearInterval(slideInterval);
      prevSlide();
      startSlideInterval();
    });
  
    $('#next-btn').click(function() {
      clearInterval(slideInterval);
      nextSlide();
      startSlideInterval();
    });
  
    startSlideInterval();
  });
  