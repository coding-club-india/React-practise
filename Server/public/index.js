

// console.log($);
function restart() {
    $('#h1').empty()
    $.get('/todo',(data)=>{
console.log(data);

for(let i of data){
$('#h1').append(`<h1>${i}</h1>` )
}

    })
}

restart()

$('#btn').on('click',()=>{
   let data  = $('#inp').val()
//    console.log(data,'dataaaaaaaaa');

$.post('/todo',{data},(res)=>{
console.log(res,'aa gaya');
})
$('#inp').val('')
restart()
})

