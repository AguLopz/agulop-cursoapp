import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <><View style={styles.title} >
      <Text>La app del Asado</Text>
    </View>
    <View style={styles.cart}>
      <Text>Carrito</Text>
      <Image style={{width: 50, height: 50}} source={{uri: "https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg" }} />    
    </View>
    <View style={styles.box}>
      <TextInput style={styles.textInput}
      placeholder='Ingrese Un producto'/>
     <TouchableOpacity>
          <Text style={{ fontSize: 40, paddingLeft: 15, }}>+</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.productList}>
        <Text>Carrito</Text>
        <Text>Chinchulines</Text>
        <Text>Asado tira fina</Text>
        <Text>Chorizo</Text>
        <Text>Morcilla Salada</Text>
        <StatusBar style="auto" />
      </View></>
  );
}

const styles = StyleSheet.create({
  productList: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: '#F23005',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    paddingBottom: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "80%",
    fontSize: 16,

  },
  title:{
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: '#F25C05',
    borderWidth: 3,
    width: "100%",
    marginTop: 40,
    marginBottom: 30,
  
  
  },
  cart:{
    fontSize: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  }
});
gir