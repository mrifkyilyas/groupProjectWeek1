var x
var y
$('document').ready(function (event) {
    //event.preventDefault()
    $('.form').hide()
    $('#map').hide()
    $('#watToDo').hide()
    getUserData()

    $('#search-holiday').submit(function(){
        $('#hari-libur').empty()
        searchHoliday()
    })
    
})

function searchHoliday() {
    event.preventDefault()
 
    const bulan = $('#bulan').val()
    const tahun = $('#tahun').val()
    console.log(bulan)
 
 
    $.ajax({
            url: `https://holidayapi.pl/v1/holidays?country=id&year=${tahun}&month=${bulan}`,
            method: 'GET',
        })
        .done(function (response) {
            if(response.holidays.length==[0]){
 
                $('#bulan-libur').append(`<li>sayang banget bulan ini tidak ada hari libur<li>`)
            }else{
                response.holidays.map(holiday=>{
                    $('#hari-libur').append(`<li>${holiday.name}(${holiday.date})<li>`)
                })
            }
 
            // console.log('masuk')
        })
        .fail(function (jqXHR, textStatus) {
            console.log('request failed', textStatus)
        })
 }


function getUserData() {
    $.ajax({
        url: "http://localhost:3000/task",
        method: "GET",
        headers: {token:localStorage.token}
    })
    .done(function(response) {
        let counter = 1
        response.forEach(el => {
            $('#watToDo').append(` <li>${counter}. Task Name: ${el.name} Date: ${el.start}</li>`)
            counter++
        })
        
    })
    .fail(function(error) {
        console.log(error)
    })
}

$('td.date').click(function () {
    $('#watToDo').show()
    x = event.target.id
    console.log(event.target.id)
    $('.form').show()
    let date = ($(`td#${x}`).text() + " " + $(`#monthYear`).text())
    let arr = date.split(' ')
    let day, month, year
    month = arr[1]
    switch (arr[1]) {
        case 'April':
            arr[1] = '04'
    }


    let isoDate = arr[2] + "-" + arr[1] + "-" + arr[0]
    let showDate = `${arr[0]} ${month} ${arr[2]}`
    isoDate = new Date(isoDate).toISOString()
    $('input#date').val(isoDate) // set date to show Date


    
    console.log(isoDate)

    
})

$('#form').submit(function (event) {
    
    $('.form').hide()
    $('#watToDo').hide()
    createTask()
    event.preventDefault()
})

function createTask(){
    //console.log(inputObjek) // sudah ada
    //console.log('atas masuk createTask')


    
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/task/",
        data: {
            name: $('#ToDo').val(),
            start: $('#date').val(),
            description: $('#description').val(),
            location: $('#location').val()
        },
        headers: {token: localStorage.token}
      })
    .done(function(response) {
        console.log(response)
        $(`td#${x}`).append(`<br>${response.name}`)

        $('#ToDo').val(null),
        $('#date').val(null),
        $('#description').val(null),
        $('#location').val(null)
    })
    .fail(function (jqXHR, textStatus) {
        console.log('request failed', textStatus)
    })
}

// $('input').click(function(){
//     y = $('input#start').val()
//     $(`td#${x}`).append(y)
// })