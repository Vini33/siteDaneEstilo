import * as eu from './fotoconfig.js'
const limite = 6
var fotos = document.getElementById('fotos')
var filtrar = document.getElementById('filtrar')
for(var i =0; i < eu.dados.length;i++){
    //console.log(dados[i])
    fotos.innerHTML += "<div class='geral' id='"+Math.random()+"'><img src='img/"+eu.dados[i][0]+"' alt='error'><div class='turma'>"+eu.dados[i][2]+"</div> <p class='texto'>"+eu.dados[i][1]+"</p></div>"
}

filtrar.addEventListener('click',function(){
    fotos.innerHTML = ""
    var turma = document.getElementById('turma')
    for(var c =0;c < eu.dados.length;c++){
        if(eu.dados[c][2] == turma.value){
            fotos.innerHTML += "<div class='geral' id='"+Math.random()+"'><img src='img/"+eu.dados[c][0]+"' alt='error'><div class='turma'>"+eu.dados[c][2]+"</div> <p class='texto'>"+eu.dados[c][1]+"</p></div>"
        }
        if(eu.dados[c][2] != turma.value & eu.dados.length == c){
            fotos.innerHTML = "<div> <h1>nao temos publicacoes com essa turma</h1></div>"
        }
    }
})
