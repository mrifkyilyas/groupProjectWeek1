var x
var y
$('document').ready(function () {
    $('.form').hide()
})

$('td.date').click(function () {
    x = event.target.id
    console.log(event.target.id)
    $('.form').show()
    let date = ($(`td#${x}`).text() + " " + $(`#monthYear`).text())
    let arr = date.split(' ')
    switch (arr[1]) {
        case 'April':
            arr[1] = '04'
    }

    let isoDate = arr[2] + "-" + arr[1] + "-" + arr[0]
    isoDate = new Date(isoDate).toISOString()
    $('input#date').text(isoDate)
    console.log(isoDate)
})

$('#form').submit(function () {
    $('.form').hide()
    // let inputObjek = {
    //     name: $('input#ToDo'),
    //     start: isoDate,
    //     description: ,
    //     location: ,
    // }
})

// $('input').click(function(){
//     y = $('input#start').val()
//     $(`td#${x}`).append(y)
// })