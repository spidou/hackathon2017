$(document).ready(function(){
  $('.quizz').slick({
    dots: true
  });
});

$('.next-slick').on('click', function(event){
  $('.quizz').slick('slickNext');
});