$(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
      } else {
        $(".accordion-list > li.active .answer").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });
    
  });

  $('#exampleModal').modal({
    show: true
  })

//   $(document).ready(function() { 
//     $('#popUpForm').fadeIn(1000); 
       
//   });
//   $( "#close" ).click(function() {
//     $( "#popUpForm" ).css("display", "none");
//   });