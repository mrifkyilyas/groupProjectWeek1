var x
var y
$('document').ready(function(){
    $('.form').hide()
})

$('td.date').click(function(){
    x = event.target.id
    console.log(event.target.id)
    $('.form').show()
})

$('#form').submit(function(){
    $('.form').hide()
})

// $('input').click(function(){
//     y = $('input#start').val()
//     $(`td#${x}`).append(y)
// })