//------------------ EVENTOS --------------------
//Reconhecendo as teclas em qualquer local do site:
//Representa o corpo do site - document.body
//Observador de eventos - addEventListener 
//Recebe como 2º parametro o evento que será criado
document.body.addEventListener('keyup', (evento) => {
    playSound(evento.code.toLowerCase())
    //console.log(evento.code.toLowerCase())
})

//JS irá escutar ao click no botão e executar uma função - Botão TOCAR
document.querySelector('.composer button').addEventListener('click', () => {
    let som = document.querySelector('#input').value 
    //console.log('Musica', som)

    if (som !== ''){ //transformando a string em array
        let somArray = som.split('')
        playComposition(somArray) //Função a ser chamada
        //console.log(somArray)
    } else {
        mostrarMensagem()
    }
})

function mostrarMensagem(){
    const exibirMensagem = document.getElementById('mensagem')
    exibirMensagem.textContent = 'Favor montar seu som!!!'
    exibirMensagem.style.display = 'block'

    setTimeout(() => {
        exibirMensagem.style.display = 'none'
    }, 300)
}

// ------------------- FUNÇÕES ----------------------
//Função para ao tocar na tecla executar um som:
function playSound(sound) {
    let audioElemento = document.querySelector(`#s_${sound}`) //pega as teclas dinamicamente(SOM)
    let keyElemento = document.querySelector(`div[data-key="${sound}"]`) //seleciona a key ou componente da tecla que foi digitada
    
    
    if(audioElemento){
        audioElemento.currentTime = 0 //retorna o ponteiro do som para o começo ao teclar
        audioElemento.play() //executa o som pelas teclas cadastradas
    }

    if(keyElemento){
        keyElemento.classList.add('active') //adiciona a cor pelo valor ativo ao teclar

        setTimeout(() => {
            keyElemento.classList.remove('active') //remove a cor pelo valor ativo ao sair da tecla
        }, 300)
    }

}

//Função para tocar a lista de teclas digitadas
function playComposition(somArray){
    let esperar = 0

    for(let somItem of somArray){
        setTimeout(() => {          //criar intervalos a cada som emitido
            playSound(`key${somItem}`)
        }, esperar)

        esperar += 250
    }
}

//Função limpar o Input - Botão LIMPAR
function limpar(){
    document.querySelector('#input').value = ''
}