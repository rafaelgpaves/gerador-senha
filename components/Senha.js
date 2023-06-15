import { Text, View } from 'react-native';

function gerarSenha(tamanho) {

    const letras = "abcdefghijklmnopqrstuvwxyz"
    const letrasEspeciais = "?+_$!"
    const numeros = "0123456789"

    let senha = ""
    for (let i=0; i<tamanho; i++) {
        let letra = Math.floor(Math.random()*letras.length)
        //console.log(letra)
        senha += letras[letra]
        //console.log(senha)
    }
    return senha
}

export default function Senha(props) {
    return (
      <View>
        <Text>{gerarSenha(props.tamanho)}</Text>
      </View>
    );
  }