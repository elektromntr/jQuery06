$('#header').hide(3000);
$('#artyk').addClass('klasaNag');
$('li:lt(3)').hide().fadeIn(2500);
$('li').on('click', function () {
    $(this).remove();
});