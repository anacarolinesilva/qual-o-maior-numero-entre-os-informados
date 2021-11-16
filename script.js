/* 
Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma mensagem de alerta informando qual é o maior número dentre os números informados. 
*/

let primeiroNumero = prompt('Digite aqui o primeiro número')
let segundoNumero = prompt('Digite aqui o segundo número')
let terceiroNumero = prompt('Digite aqui o terceiro número')

if ((primeiroNumero > segundoNumero) && (primeiroNumero > terceiroNumero)) {
    mensagem = `${primeiroNumero} é o maior entre os números informados`
} else if ((segundoNumero > primeiroNumero) && (segundoNumero > terceiroNumero)) {
    mensagem = `${segundoNumero} é o maior entre os números informados`
} else if ((terceiroNumero > primeiroNumero) && (terceiroNumero > segundoNumero)) {
    mensagem = `${terceiroNumero} é o maior entre os números informados`
} else {
    mensagem = 'Os números são iguais ou nada foi informado'
}
    alert(mensagem)