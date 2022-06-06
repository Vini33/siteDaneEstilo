//import * as turma from './fotoconfig.js'
var clas = document.getElementsByClassName('geral')
var fecha = document.getElementById('fecha')
var mostra = document.getElementById('mostra')
var submostra = document.getElementById('sub-mostra')
var scrol = document.getElementById('body2')
var filtrar = document.getElementById('filtrar')
var localscrol = 0
mostra.style.display = 'none'

function teste(){
    for(var c =0;c < clas.length;c++){
    clas[c].addEventListener('click',function(id){
        var endereco = id.target.parentNode.id
        var clas = id.target.parentNode.className
        var divs = document.getElementById(endereco)
        var pathImagem = divs.firstElementChild.attributes[0].value
        var texto = divs.lastElementChild.textContent
        var sala = divs.childNodes[1].textContent
        if(clas == 'geral'){
            mostra.style.display = 'block'
            mostra.style = "width:100%;height:100%;"
            submostra.innerHTML = "<div class='tunel-mostra'><img src='"+pathImagem+"'><div>"+sala+"</div><p class='grande'>"+texto+"</p></div>"
        }
        localscrol = scrol.scrollTop
        scrol.scrollTop = 0 //funciona assim

        })
    }
}
filtrar.addEventListener('click',function(){
    setTimeout(function(){
        var clas2 = document.getElementsByClassName('geral')
        for(var c =0;c < clas2.length;c++){
            clas2[c].addEventListener('click',function(id){
            var endereco = id.target.parentNode.id
            var clas = id.target.parentNode.className
            var divs = document.getElementById(endereco)
            var pathImagem = divs.firstElementChild.attributes[0].value
            var texto = divs.lastElementChild.textContent
            var sala = divs.childNodes[1].textContent
            if(clas == 'geral'){
                mostra.style.display = 'block'
                mostra.style = "width:100%;height:100%;"
                submostra.innerHTML = "<div class='tunel-mostra'><img src='"+pathImagem+"'><div>"+sala+"</div><p class='grande'>"+texto+"</p></div>"
            }
        localscrol = scrol.scrollTop
        scrol.scrollTop = 0 //funciona assim

        })
    }
    },5000)

})

fecha.addEventListener('click',function(){
    mostra.style.display = 'none'
    scrol.scrollTop = localscrol
})
