var fotos = document.getElementById('fotos')
var filtrar = document.getElementById('filtrar')
var limite = 4


$.ajax({
    url:'https://postescolar.000webhostapp.com/api.php',
    method:'POST',
    dataType:'json'
}).done(function(e){
    for(var i=0;i < e.length;i++){
        fotos.innerHTML += "<div class='geral' id='"+Math.random()+"'><img src='img/"+e[i]['idFoto']+"' alt='nao foi possivel carrega'><div class='turma'>"+e[i]['turma']+"</div> <p class='texto'>"+e[i]['texto']+"</p></div>"

    }
}).error(function(e){
    console.log('error')
})

filtrar.addEventListener('click',function(){
    var turma = document.getElementById('turma').value
    $.ajax({
        url:'https://postescolar.000webhostapp.com/api.php',
        method:'POST',
        data:{filtro:turma},
        dataType:'json'
    }).done(function(e){
        fotos.innerHTML = ""
        for(var i=0;i < e.length;i++){
            fotos.innerHTML += "<div class='geral' id='"+Math.random()+"'><img src='img/"+e[i]['idFoto']+"' alt='error'><div class='turma'>"+e[i]['turma']+"</div> <p class='texto'>"+e[i]['texto']+"</p></div>"
        }
    })
})
