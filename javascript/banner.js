function Changebg(){
    
    const images = [
        'url(../images/desktop-image-hero-1.jpg)',
        'url(../images/desktop-image-hero-2.jpg)',
        'url(../images/desktop-image-hero-3.jpg)'
    ]

    var fundo = document.getElementById('lado-a')
    const bg = images[Math.floor(Math.random()* images.length)];
    fundo.style.backgroundImage = bg
}

setInterval(Changebg, 1000)

window.addEventListener('load',Changebg)