$(document).ready(function() {

  $('#traveling-to').click(function(){
    $('.airport-to-name').text('JFK, New York, NY');
  });
  $('#departing').click(function(){
    $('.departing-date').text('Thu, Jan 25');
  });
  $('#returning').click(function(){
    $('.returning-date').text('Fri, Feb 2');
  });

  $('.box').click(function (e) {
    $(this).toggleClass('selected');
  });
  $('.clear').click(function (e) {
    $('.box').removeClass('selected');
    // $('.flights-icons').empty();
  });
 
  $('.flights-item').hide();
  $('.btnSearch').click(function (e) {
    $('.flights-item').hide();
    $('.list-placeholder').addClass('hide-xs');
    // $('.flights-icons').empty();
    if ($('.box').hasClass('selected')) {
      $('.selected').each(function(){
        var selected = $(this).attr('id');

        if ( selected == 'legroom'){
          $('.flights-item-379').fadeIn();
        } else if ( selected == 'checkedbag') {
          $('.flights-item-200').fadeIn();
          $('#alaska-1 .flights-item-price').text('$225');

        } else if ( selected == 'rushhour') {
          $('.flights-item-275').fadeIn();

        } else if ( selected == 'aisle' || selected == 'middle' ) {
          $('.flights-item-161').fadeIn();

        } else if ( selected == 'wifi') {
          $('.flights-item-200').fadeIn();
          $('#alaska-1 .flights-item-price').text('$230');

        } else {
          $('.flights-item-200').fadeIn();
        }
      });
    } else {
      console.log('null');
      $('.flights-item-161').fadeIn();
    }

      // if ($('.flights-item').hasClass('.alaska') && selected == checkedbag) {
      //   console.log('yes');
      // } else {
      //   $('.flights-icons').prepend('<img style="height: 15px;margin-right:5px;" src="img/icon-' + selected  + '.png" class="icon-' + selected +'" />')
      // }
    
  });
  $('.flight-details-toggle').each(function(){
    $(this).click(function(){
      $(this).toggleClass('open');
      $(this).next('.flight-details-box').toggleClass('open');
    });
  });

});