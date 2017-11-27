$(document).ready(function() {

  $('#traveling-to').click(function(){
    $('.airport-to-name').text('New York, NY (all airports)');
  });
  $('#departing').click(function(){
    $('.departing-date').text('Thu, Jan 25');
  });
  $('#returning').click(function(){
    $('.returning-date').text('Fri, Feb 2');
    $('.btnSearch').addClass('active');
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
    $('.flights-icons').empty();
  });
 
  $('.flights-item').hide();
  $('.btnSearch').click(function (e) {
    $('.flights-item').hide();
    $('.flights-icons').empty();
    $('.list-placeholder').addClass('hide-xs');
    if ($('.box').hasClass('selected')) {
      var selected = [];
      $('.selected').each(function(){
        var perk = $(this).attr('id')
        selected.push(perk);

        $('.flights-icons').each(function(){
          $(this).prepend('<img style="height: 18px;margin-right:5px;" src="img/icon-' + perk + '.png" class="icon-' + perk +'">');
        });

      });
        if ( selected.includes('legroom') && selected.includes('wifi') ){
          $('.flights-best .flights-item-379').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-379').hide();
          $('#delta .flights-item-price').text('$395');
        } else if ( selected.includes('legroom') ){
          $('#delta .flights-item-price').text('$379');
          $('.flights-best .flights-item-379').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-379').hide();
          $('#alaska-1 .flights-item-price').text('$200');
        } else if ( selected.includes('checkedbag')) {
          $('.flights-best .flights-item-200').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-200').hide();
          $('#alaska-1 .flights-item-price').text('$225');
          $('#delta .flights-item-price').text('$404');

        } else if ( selected.includes('traffic')) {
          $('.flights-best .flights-item-262').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-262').hide();
          $('#alaska-1 .flights-item-price').text('$200');
          $('#delta .flights-item-price').text('$379');

        } else if ( selected.includes('aisle') || selected.includes('middle') ) {
          $('.flights-best .flights-item-161').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-161').hide();
          $('#alaska-1 .flights-item-price').text('$200');
          $('#delta .flights-item-price').text('$379');

        } else if ( selected.includes('wifi')) {
          $('.flights-best .flights-item-200').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('#alaska-1 .flights-item-price').text('$216');
          $('.flights-all .flights-item-200').hide();
        } else {
          $('#alaska-1 .flights-item-price').text('$200');
          $('.flights-best .flights-item-200').fadeIn();
          $('.flights-all .flights-item').fadeIn();
          $('.flights-all .flights-item-200').hide();
          $('#delta .flights-item-price').text('$379');
        }
    } else {
      $('.flights-item-161').fadeIn();
      $('.flights-best .flights-icons .icon-legroom').remove();
      $('.flights-all .flights-item').fadeIn();
      $('.flights-all .flights-item-161').hide();
    }
    if ($('.flights-item').hasClass('no-legroom')){
      $('.no-legroom .icon-legroom').attr('src','img/icon-no-legroom.png');
    }
    if ($('.flights-item').hasClass('no-daylight')){
      $('.no-daylight .icon-daylight').attr('src','img/icon-no-daylight.png');
    }
    if ($('.flights-item').hasClass('no-layovers')){
      $('.no-layovers .icon-layovers').attr('src','img/icon-no-layovers.png');
    }
    if ($('.flights-item').hasClass('no-redeye')){
      $('.no-redeye .icon-redeye').attr('src','img/icon-no-redeye.png');
    }
    if ($('.flights-item').hasClass('no-carryon')){
      $('.no-carryon .icon-carryon').attr('src','img/icon-no-carryon.png');
    }
    if ($('.flights-item').hasClass('no-outlet')){
      $('.no-outlet .icon-outlet').attr('src','img/icon-no-outlet.png');
    }
    if ($('.flights-item').hasClass('no-wifi')){
      $('.no-wifi .icon-wifi').attr('src','img/icon-no-wifi.png');
    }
    if ($('.flights-item').hasClass('no-freefood')){
      $('.no-freefood .icon-freefood').attr('src','img/icon-no-freefood.png');
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