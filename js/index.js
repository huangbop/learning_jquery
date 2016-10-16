$(function() {

  $('#switcher-default').addClass('selected');
  $('#switcher button').click(function() {
    var bodyClass = this.id.split('-')[1];
    console.log(bodyClass);
    $('body').removeClass().addClass(bodyClass);
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });

  $('#switcher').click(function(event) {
    if (event.target == this) {
      $('#switcher button').toggleClass('hidden');
    }
  });

});
