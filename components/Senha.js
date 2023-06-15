import { Text, View } from 'react-native';

function gerarSenha(tamanho, numeroMaiusculas, quantidadeNumeros, numeroEspeciais) {

    const letras = "abcdefghijklmnopqrstuvwxyz"
    const caracteresEspeciais = "?+_$!"
    const numeros = "0123456789"

    const chanceLetraMinuscula = 0.5 // letra minuscula eh escolhida em um range de 0 a 0.4
    const chanceLetraMaiuscula = 0.3333 // letra maiuscula eh escolhida em um range de 0 a 0.3333 (nao considerando letras minusculas)
    const chanceNumero = 0.3333 + chanceLetraMaiuscula // numero eh escolhido em um range de 0.3333 a 0.6666 (nao considerando letras minusculas)
    const chanceEspecial = 0.3333 + chanceLetraMaiuscula + chanceNumero // caracter especial eh escolhido num range de 0.6666 a 0.99 (nao considerando letras minusculas)

    let senha = "" // senha gerada
    let letrasMaiusculasSenha = 0 // numero de letras maiusculas na senha
    let acabouMaiusculas = false // indica se o numero de maiusculas na senha eh igual ao numero pedido
    let numerosSenha = 0 // quantidade de numeros na senha
    let acabouNumeros = false // indica se a quantidade de numeros na senha eh igual a pedida
    let caracteresEspeciaisSenha = 0 // numero de caracteres especiais na senha
    let acabouEspeciais = false // indica se o numero de caracteres especiais na senha eh igual ao numero pedido
    let ultimosExtras = false // indica se as ultimas letras a serem geradas tem que ser extras (maiusculas, numeros ou especiais)
    let acabouExtras = false // indica se todos os caracteres extras (maiusculas, numeros ou especiais) pedidos ja foram gerados

    for (let i=0; i<tamanho; i++) {
        let tipoCaractere = Math.random() // probabilidade selecionada aleatoriamente
        acabouMaiusculas = numeroMaiusculas == letrasMaiusculasSenha
        acabouNumeros = quantidadeNumeros == numerosSenha
        acabouEspeciais = numeroEspeciais == caracteresEspeciaisSenha
        ultimosExtras = tamanho - senha.length == numeroMaiusculas - letrasMaiusculasSenha + quantidadeNumeros - numerosSenha + numeroEspeciais - caracteresEspeciaisSenha
        acabouExtras = acabouMaiusculas && acabouNumeros && acabouEspeciais
        if ((tipoCaractere <= chanceLetraMinuscula && ultimosExtras == false) || acabouExtras == true) {
            let letra = letras[Math.floor(Math.random()*letras.length)]
            senha += letra
        } else {
            if ((acabouMaiusculas == false) && (tipoCaractere<chanceLetraMaiuscula || (acabouNumeros == true && acabouEspeciais == true))) {
                let letra = letras[Math.floor(Math.random()*letras.length)]
                senha += letra.toUpperCase()
                letrasMaiusculasSenha += 1
            } else if ((acabouNumeros == false) && ((tipoCaractere>chanceLetraMaiuscula && tipoCaractere<=chanceNumero) || (acabouMaiusculas == true && acabouEspeciais == true))) {
                let numero = numeros[Math.floor(Math.random()*numeros.length)]
                senha += numero
                numerosSenha += 1
            } else {
                let caracter = caracteresEspeciais[Math.floor(Math.random()*caracteresEspeciais.length)]
                senha += caracter
                caracteresEspeciaisSenha += 1
            }
        }
    }
    return senha
}

export default function Senha(props) {
    return (
      <View>
        <Text>{gerarSenha(props.tamanho, props.maiusculas, props.numeros, props.especiais)}</Text>
      </View>
    );
  }