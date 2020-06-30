$(document).ready(function(){
  // Modal is initialized here ...
  $('.modal').modal();

  // Sidenav is initialized here ...
  $('.sidenav').sidenav();

  // Slider is initialized here ...
  $('.slider').slider();

  // Parallex is initialized here ...
  $('.parallax').parallax();

  // Carousel is initialized here ...
  $('.myreviews').carousel({
    numVisible: 7,
    shift: 55,
    padding: 55
  });
});
