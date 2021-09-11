console.log("Fui carregado de um arquivo externo.")

const titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

let paciente = document.querySelector('#primeiro-paciente')
let tdPeso = document.querySelector('.info-peso')
let tdAltura = document.querySelector('.info-altura')

let peso = tdPeso.textContent
let altura = tdAltura.textContent

let tdImc = paciente.querySelector('.info-imc')

let alturaEhValida = true
let pesoEhValido = true

if(peso <= 0 || peso > 1000){
    console.log('Peso inválido');
    tdImc.textContent = 'Peso inválido'
    pesoEhValido = false
}

if(altura <= 0 || altura > 3.0){
    console.log('Altura inválida');
    tdImc.textContent = 'Altura inválida'
    alturaEhValida = false
}

if(pesoEhValido && alturaEhValida){
    let imc = peso / (Math.pow(altura, 2))
    tdImc.textContent = imc
}