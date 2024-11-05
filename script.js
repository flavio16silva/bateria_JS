//Reconhecendo as teclas em qualquer local do site:
//Representa o corpo do site - document.body
//Observador de eventos - addEventListener 
//Recebe como 2º parametro o evento que será criado
document.body.addEventListener('keyup', (evento) => {
    playSound(evento.code.toLowerCase())
    //console.log(evento.code.toLowerCase())
})



//Função criada para ao tocar na tecla executar um som:
function playSound(sound) {
    let audioElemento = document.querySelector(`#s_${sound}`) //pegando as teclas dinamicamente
}