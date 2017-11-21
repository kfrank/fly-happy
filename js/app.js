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
    $('.flights-icons').empty();
  });
  $('.list').hide();
  $('.btnSearch').click(function (e) {
    $('.list').fadeIn();
    $('.list-placeholder').addClass('hide-xs');
  }); 
  $('.btnSearch').click(function (e) {
    $('.flights-icons').empty();
    $('.selected').each(function(){
      var selected = $(this).attr('id');
      console.log(selected);

      if ($('.flights-item').hasClass('.alaska') && selected == checkedbag) {
        console.log('yes');
      } else {
        $('.flights-icons').prepend('<img style="height: 15px;margin-right:5px;" src="img/icon-' + selected  + '.png" class="icon-' + selected +'" />')
      }
    });
  });

});