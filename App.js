import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputSlider from "./components/Slider"
import Senha from "./components/Senha"
import { useState } from 'react';
import { useContext, createContext } from 'react';

export default function App() {

  const[tamanho, setTamanho] = useState(8)
  const[maiusculas, setMaiusculas] = useState(0)

  return (
    <View style={styles.container}>

      {/* <Text>Tamanho da senha:</Text> */}
      {/* <InputSlider /> */}

      <InputSlider tipo="Tamanho:" set={setTamanho} valorInicial="8"> </InputSlider>

      {/* <Text>Quantidade de numeros:</Text> */}
      {/* <InputSlider /> */}
      {/* <InputSlider initialValue="0"> </InputSlider> */}

      <InputSlider tipo="Número de letras maiúsculas:" set={setMaiusculas} valorInicial="0"> </InputSlider>

      <Senha tamanho={tamanho} maiusculas={maiusculas}></Senha>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
