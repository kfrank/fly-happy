$(document).ready(function() {

  $('#traveling-to').click(function(){
    $('.airport-to-name').text('JFK, New York, NY');
  });
  $('#departing').click(function(){
    $('.departing-date').text('Thu, Jan 25');
  });
  $('#returning').click(function(){
    $('.returning-date').text('Fri, Feb 2');
    $('.btnSearch').css('opacity',1);
  });

  $('.box').click(function (e) {
    $(this).toggleClass('selected');
  });
  $('.clear').click(function (e) {
    $('.box').removeClass('selected');
    $('.flights-item').hide();
    $('.flights-best .flights-item-161').fadeIn();
    $('.flights-all .flights-item').fadeIn();
    $('.flights-all .flights-item-161').hide();
  });
 
  $('.flights-item').hide();
  $('.btnSearch').click(function (e) {
    $('.flights-item').hide();
    $('.list-placeholder').addClass('hide-xs');
    if ($('.box').hasClass('selected')) {
      var selected = [];
      $('.selected').each(function(){
        selected.push($(this).attr('id'));

      });
      console.log(selected);
        if ( selected.includes('legroom') && selected.includes('wifi') ){
          console.log('yes');
          $('.flights-best .flights-item-379 .flights-icons .icon-wifi').remove();
          $('.flights-best .flights-item-379').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-379').hide();
          $('.flights-best .flights-item-379 .flights-icons').prepend('<img style="height: 15px;margin-right:5px;filter: grayscale(100%)" src="img/icon-wifi.png" class="icon-wifi">');
          $('#delta .flights-item-price').text('$395');
        } else if ( selected.includes('legroom') ){
          $('#delta .flights-item-price').text('$379');
          $('.flights-best .flights-icons .icon-wifi').remove();
          $('.flights-best .flights-item-379').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-379').hide();
          $('#alaska-1 .flights-item-price').text('$200');
        } else if ( selected.includes('checkedbag')) {
          $('.flights-best .flights-icons .icon-wifi').remove();
          $('.flights-best .flights-item-200').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-200').hide();
          $('#alaska-1 .flights-item-price').text('$225');
          $('#delta .flights-item-price').text('$404');

        } else if ( selected.includes('rushhour')) {
          $('.flights-best .flights-icons .icon-wifi').remove();
          $('.flights-best .flights-item-262').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-262').hide();
          $('#alaska-1 .flights-item-price').text('$200');
          $('#delta .flights-item-price').text('$379');

        } else if ( selected.includes('aisle') || selected.includes('middle') ) {
          $('.flights-best .flights-icons .icon-wifi').remove();
          $('.flights-best .flights-item-161').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-161').hide();
          $('#alaska-1 .flights-item-price').text('$200');
          $('#delta .flights-item-price').text('$379');

        } else if ( selected.includes('wifi')) {
          $('.flights-best .flights-item-200 .flights-icons .icon-wifi').remove();
          $('.flights-best .flights-item-200').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('#alaska-1 .flights-item-price').text('$216');
          $('.flights-all .flights-item-200').hide();
          $('.flights-best .flights-item-200 .flights-icons').prepend('<img style="height: 15px;margin-right:5px;filter: grayscale(100%)" src="img/icon-wifi.png" class="icon-wifi">');

        } else {
          $('#alaska-1 .flights-item-price').text('$200');
          $('.flights-best .flights-icons .icon-wifi').remove();
          $('.flights-best .flights-item-200').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-200').hide();
          $('#delta .flights-item-price').text('$379');
        }
    } else {
      $('.flights-item-161').fadeIn();
      $('.flights-all .flights-item').fadeIn();
      $('.flights-all .flights-item-161').hide();
    }

      // if ($('.flights-item').hasClass('.alaska') && selected == checkedbag) {
      //   console.log('yes');
      // } else {
      //   $('.flights-icons').prepend('<img style="height: 15px;margin-right:5px;" src="img/icon-' + selected  + '.png" class="icon-' + selected +'" />')
      // }
    
  });
  $('.flight-details-toggle').each(function(e){
    $(this).click(function(){
      $(this).toggleClass('open');
      if ($(this).hasClass('open')){
        $(this).children('a').text('Hide flight details');
      } else {
        $(this).children('a').text('View flight details');
      }
      $(this).next('.flight-details-box').toggleClass('open');
    });

  });

});