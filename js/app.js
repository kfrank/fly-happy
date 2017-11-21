$(document).ready(function() {

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
    // for (i=0; i<$('.selected').length; i++)    {
    $('.flights-icons').empty();
    $('.selected').each(function(){
      var selected = $(this).attr('id');
      console.log(selected);

      // $('.flights-icons').prepend('<img style="height: 15px;margin-right:5px;" src="img/icon-' + selected  + '.png" class="icon-' + selected +'" />')
      if ($('.flights-item').hasClass('.alaska') && selected == checkedbag) {
        console.log('yes');
      } else {
        $('.flights-icons').prepend('<img style="height: 15px;margin-right:5px;" src="img/icon-' + selected  + '.png" class="icon-' + selected +'" />')
      }
    });
    // }
  });

});