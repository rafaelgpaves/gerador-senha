import { Text, View } from 'react-native';

function gerarSenha(tamanho, numeroMaiusculas) {

    const letras = "abcdefghijklmnopqrstuvwxyz"
    const letrasEspeciais = "?+_$!"
    const numeros = "0123456789"

    const chanceLetraMaiuscula = 0.3

    let senha = "" // senha gerada
    let letrasMaiusculasSenha = 0 // numero de letras maiusculas na senha
    for (let i=0; i<tamanho; i++) {
        let letra = letras[Math.floor(Math.random()*letras.length)]
        if ((Math.random() < chanceLetraMaiuscula && letrasMaiusculasSenha < numeroMaiusculas)
        || (tamanho - senha.length == numeroMaiusculas - letrasMaiusculasSenha && letrasMaiusculasSenha < numeroMaiusculas)) {
            senha += letra.toUpperCase()
            letrasMaiusculasSenha += 1
        } else {
            senha += letra
        }
    }
    return senha
}

export default function Senha(props) {
    return (
      <View>
        <Text>{gerarSenha(props.tamanho, props.maiusculas)}</Text>
      </View>
    );
  }