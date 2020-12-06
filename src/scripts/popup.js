$(function(){
    $('#name').keyup(function(){
        $('#H1').text('Hello ' + $('#name').val())
    })
});