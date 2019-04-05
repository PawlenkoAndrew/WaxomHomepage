


$('.title-holder').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false
      }
    }
  ]
});
  


function viewDiv(id) {
        var el = document.getElementById(id);
        var link = document.getElementById('search');
        if (el.style.display == "block") {
            el.style.display = "none";
            
        } else {
            el.style.display = "block";
           
        }
    }

$(function(){

  $('.menu__icon').on('click', function(){

      $('.menu__links').slideToggle(300,function(){

        if($ (this) .css('display') ==='none'){
          $(this) .removeAttr('style');
        }

      });

  });

})