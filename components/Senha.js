import { Text, View } from 'react-native';

function gerarSenha(tamanho, numeroMaiusculas, quantidadeNumeros) {

    const letras = "abcdefghijklmnopqrstuvwxyz"
    const letrasEspeciais = "?+_$!"
    const numeros = "0123456789"

    const chanceLetraMinuscula = 0.5 // letra minuscula eh escolhida em um range de 0 a 0.4
    const chanceLetraMaiuscula = 0.5 // letra maiuscula eh escolhida em um range de 0 a 0.5 (nao considerando letras minusculas)
    const chanceNumero = 0.5 + chanceLetraMaiuscula // numero eh escolhido em um range de 0.5 a 1 (nao considerando letras minusculas)

    let senha = "" // senha gerada
    let letrasMaiusculasSenha = 0 // numero de letras maiusculas na senha
    let acabouMaiusculas = false // indica se o numero de maiusculas na senha eh igual ao numero pedido
    let numerosSenha = 0 // quantidade de numeros na senha
    let acabouNumeros = false
    let ultimosEspeciais = false // indica se as ultimas letras a serem geradas tem que ser especiais (maiusculas ou numeros)
    let acabouEspeciais = false

    for (let i=0; i<tamanho; i++) {
        let tipoCaractere = Math.random() // probabilidade selecionada aleatoriamente
        acabouMaiusculas = numeroMaiusculas == letrasMaiusculasSenha
        acabouNumeros = quantidadeNumeros == numerosSenha
        ultimosEspeciais = tamanho - senha.length == numeroMaiusculas - letrasMaiusculasSenha + quantidadeNumeros - numerosSenha
        acabouEspeciais = acabouMaiusculas && acabouNumeros
        console.log(tipoCaractere, acabouMaiusculas, acabouNumeros, ultimosEspeciais)
        if ((tipoCaractere <= chanceLetraMinuscula && ultimosEspeciais == false) || acabouEspeciais == true) {
            let letra = letras[Math.floor(Math.random()*letras.length)]
            senha += letra
        } else {
            if ((acabouMaiusculas == false) && (tipoCaractere<chanceLetraMaiuscula || (acabouNumeros == true))) {
                let letra = letras[Math.floor(Math.random()*letras.length)]
                senha += letra.toUpperCase()
                letrasMaiusculasSenha += 1
            } else if ((acabouNumeros == false) && ((tipoCaractere>chanceLetraMaiuscula && tipoCaractere<=chanceNumero) || (acabouMaiusculas == true))) {
                let numero = numeros[Math.floor(Math.random()*numeros.length)]
                senha += numero
                numerosSenha += 1
            }
        }
    }
    return senha
}

export default function Senha(props) {
    return (
      <View>
        <Text>{gerarSenha(props.tamanho, props.maiusculas, props.numeros)}</Text>
      </View>
    );
  }