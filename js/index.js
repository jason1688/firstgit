$(document).ready(function() {

  isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)

  setTimeout( function() {
    $('.landing_header').hide();
    $('.landing_header').fadeIn({queue: false, duration: 850});
    $('.landing_header').animate({top: "0px"}, 850);

    $('.footer').hide();
    $('.jump_up').hide();
    $('.footer').fadeIn({queue: false, duration: 850});
    $('.footer').animate({bottom: "0px"}, 850);
    $('.landing_body_right_sideways').animate({opacity: "1"},850);

    // $('work_gallery_section').css('height', "100%)");
    $('.work_gallery_section').hide();
  });

  setTimeout( function() {
    $('.landing_body_line').show();
    $('.top_line').animate({top: "0px"}, 850);
    $('.bot_line').animate({bottom: "0px"}, 850);
    setTimeout( function() {
      $('.ib_logo').fadeIn(450);
      if(!isSafari) {
        $('.big_copy_text').hide();
        $('.big_copy_text').css("top","50%");
        $('.big_copy_text').css("color","white");
        // $('.big_copy_text').animate({top: "45%"}, 1000);
        $('.big_copy_text').fadeIn(1000);
      }

    },950)
  }, 850);
  $('#pagepiling').pagepiling({

    afterLoad: function(anchorLink, index){
      nextIndex = index + 1;
      prevIndex = index - 1;
      if(index == 1) {
        $('.top_line').animate({top: "0px"}, 850);
        $('.bot_line').animate({bottom: "0px"}, 850);
      }

      //change to 6 for prod lol
      if(index == 6) {
        // setTimeout( function() {
          $('.scrollable_header_text').fadeIn(450);
          $('.scrollable_header_text').animate({top: "35%"}, 450);

          $('.work_gallery_section').fadeIn(450);
          $('.work_gallery').animate({bottom: "125px"})

          setTimeout( function() {
            $('.scrollable_clients').animate({opacity: "1"}, 450);
            $('.work_gallery_item').animate({opacity: "1"}, 450);
          }, 450);


          $('.work_gallery_section').css("height", "auto");
          $('.jump_down').hide();
          $('.jump_up').show();
        // }, 450);
      }
      else {
        $('.jump_down').show();
        $('.jump_up').hide();
      }

      setTimeout(function() {
        $('.copy_text_body').css("top", "-110px");
        $( ".copy_text_body" ).fadeIn({queue: false, duration: 450});
        $( ".copy_text_body" ).animate({top: "-170px" }, 450);

        // $('.copy_text_body').css("display", "none");
        $("#" + "copy_text_body_" + nextIndex ).hide();
        $("#" + "copy_text_body_" + prevIndex ).hide();
      }, 450);

      $('.copy_text_header').css("bottom", "240px");
      $( ".copy_text_header" ).fadeIn({queue: false, duration: 450});
      $( ".copy_text_header" ).animate({bottom: "180px" }, 450);

      // $('.copy_text_header').css("display", "none");
      $("#" + "copy_text_header_" + nextIndex) .hide();
      $("#" + "copy_text_header_" + prevIndex ).hide();

    }
	});

  $('.work_gallery_item_hover').hide();
  $(document).mousemove(function( event ) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    $('#landing_gradient_canvas').css("background", "radial-gradient(circle at " + mouseX + "px " + mouseY + "px, rgb(147, 249, 185), rgb(29, 151, 108))")
    // $('#landing_gradient_canvas').css("background", "radial-gradient(circle at 200px 200px, rgb(147, 249, 185), rgb(29, 151, 108));");
  });


});

// $('.jump_button').click( function() {
//   var next = $('.pp-section.active').next('.pp-section');
//
//   //looping to the bottom if there's no more sections above
//   // if (!next.length && options.loopTop) {
//   //     prev = $('.pp-section').last();
//   // }
//
//   if (next.length) {
//       scrollPage(next);
//   }
// })

function getActiveDiv() {
  var activeDiv = $(".active").attr("id");
}

$('.work_gallery_item').mouseenter( function() {
  idHover = this.id+"_hover";
  $("#" + idHover).fadeIn(150);
  // $('#festool_item_hover').fadeIn(150);
})
.mouseleave( function() {
  $("#" + idHover).fadeOut(150);
  // $('#festool_item_hover').fadeOut(150);
});