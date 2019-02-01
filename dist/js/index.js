(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.main-nav').toggleClass('menu_state_open');
    });
  });
})(jQuery);

function viewDiv(){
  document.getElementById("form").style.display = "block";
};
