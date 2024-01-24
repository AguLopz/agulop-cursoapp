import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>La app del Asado</Text>
      <Text>Carrito</Text>
      <Text>Chinchulines</Text>
      <Text>Asado tira fina</Text>
      <Text>Chorizo</Text>
      <Text>Morcilla Salada</Text>
      <StatusBar style="auto" />
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
