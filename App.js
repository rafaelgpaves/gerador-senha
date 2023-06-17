import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputSlider from "./components/Slider"
import Senha from "./components/Senha"
import { useState } from 'react';
import { useContext, createContext } from 'react';

export default function App() {

  const[tamanho, setTamanho] = useState(8)
  const[maiusculas, setMaiusculas] = useState(0)
  const[numeros, setNumeros] = useState(0)
  const[especiais, setEspeciais] = useState(0)

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Gerador de senhas</Text>

      <InputSlider tipo="Tamanho:" set={setTamanho} valorInicial="8" max="100"> </InputSlider>

      <InputSlider tipo="Quantidade de letras maiúsculas:" set={setMaiusculas} valorInicial="0" max={tamanho-numeros-especiais}> </InputSlider>

      <InputSlider tipo="Quantidade de números:" set={setNumeros} valorInicial="0" max={tamanho-maiusculas-especiais}> </InputSlider>

      <InputSlider tipo="Quantidade de caracteres especiais:" set={setEspeciais} valorInicial="0" max={tamanho-maiusculas-numeros}> </InputSlider>

      <Text style={styles.texto}>SENHA GERADA:</Text>
      <Senha tamanho={tamanho} maiusculas={maiusculas} numeros={numeros} especiais={especiais} style={styles.senha}></Senha>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90ee90',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    margin: "3%",
  },
  titulo: {
    fontSize: 40,
    textDecorationLine: "underline",
    margin: "5%",
  },
});
