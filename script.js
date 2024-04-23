$(document).ready(function(){
    var currentIndex = 0;
    var SBcurrentIndex = 1;
    var slides = $('.slide');
    var buttonslides = $('.button-slide');
    var totalSlides = buttonslides.length;
    var autoplayInterval;
  
    function showSlide(index) {
        slides.fadeOut();
        slides.eq(index).fadeIn();
        $('.slide-number').text('0'+(index + 1));
        $('.totalslides').text('0'+totalSlides);
    }

    function SBshowSlide (index){
        buttonslides.fadeOut();
        buttonslides.eq(index).fadeIn();
    }
  
    function startAutoplay() {
      autoplayInterval = setInterval(function(){
        currentIndex = (currentIndex + 1) % totalSlides;
        SBcurrentIndex = (SBcurrentIndex + 1) % totalSlides;
        SBshowSlide(SBcurrentIndex);
        showSlide(currentIndex);
        $('.slider-button-container').find('.border-top').removeClass('rotateBorder').hide().show(0); // Restart border animation
        $('.slider-button-container').find('.border-bottom').removeClass('rotateBorder-bottom').hide().show(0); // Restart border animation
      }, 5000); // Change slide every 5 seconds
    }
  
    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }
  
    // Start autoplay on page load
    startAutoplay();
  
    // Next button click event
    $('.next-btn').click(function(){
      stopAutoplay();
      currentIndex = (currentIndex + 1) % totalSlides;
      SBcurrentIndex = (SBcurrentIndex + 1) % totalSlides;
      SBshowSlide(SBcurrentIndex);
      showSlide(currentIndex);
      startAutoplay();
      $('.slider-button-container').find('.border-top').removeClass('rotateBorder').hide().show(0); // Restart border animation
      $('.slider-button-container').find('.border-bottom').removeClass('rotateBorder-bottom').hide().show(0); // Restart border animation
    });
  });

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  


  