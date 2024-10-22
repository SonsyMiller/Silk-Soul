function showGif() {
    const poster = document.getElementById('poster');
    const gif = document.getElementById('gif');
    poster.style.display = 'none';
    gif.style.display = 'block';
}

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let parallaxImage = document.querySelector('.parallax');

    // Controla o movimento da imagem no sentido inverso
    let parallaxSpeed = -0.1;
    
    // Ajusta o valor de translateY para mover a imagem conforme o scroll
    parallaxImage.style.transform = 'translateY(' + scrollPosition * parallaxSpeed + 'px)';
});
;