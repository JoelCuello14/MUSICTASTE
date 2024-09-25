import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ButtonView from '../../formcomponents/button/ButtonView';
import InputView from '../../formcomponents/input/inputView';


export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.container1}>Correo Electronico</Text>
      <InputView/>
      <Text style={styles.container1}>Contraseña</Text>
      <InputView/>
      <ButtonView></ButtonView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1:{
    color: 'white',
    display: 'flex',
    textAlign: 'left'
  }
});