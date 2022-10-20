$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  
  $('.owl-carousel').owlCarousel({
    margin:2,
    autoWidth:true,
    responsiveClass:true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"]
  })
  
  $('#datepicker').datepicker('show');
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  