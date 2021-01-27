var header_fundo = document.getElementById('lado-a');
var nav_mobile = document.getElementById('nav')
var body = document.querySelector('body')


function carregado(){
    document.getElementById('abertura-mobile').onclick = function(){
        nav_mobile.style ['transform'] = 'translateX(0%)'
        header_fundo.classList.add('shadow')
        body.classList.add('shadow')
     }
     
    document.getElementById('close-mobile').onclick = ()=>{
        nav_mobile.style ['transform'] = 'translateX(-100%)'
        header_fundo.classList.remove('shadow')
        body.classList.remove('shadow')
    }
    
}

window.addEventListener('load', carregado())