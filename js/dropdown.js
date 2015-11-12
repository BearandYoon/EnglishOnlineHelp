$(document).ready(function(){
    $('nav ul li').hover(
        function() {
            $(this).find('ul').slideDown();
        },
        function() {
            $(this).find('ul').slideUp('fast');
        }
    );
});