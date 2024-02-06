import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,} from 'react-native';
  import RemoveModal from "./src/components/RemoveModal";
  const DATA = [
    {
      name: "verduras",
      id: 1,
    },
    {
      name: "carnes rojas",
      id: 2,
    },
    {
      name: "Pollo",
      id: 3,
    },
  ];
  

export default function App() {

  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };


  return (
    <View style={styles.container}>
    
    <StatusBar style="auto" />

    
    <RemoveModal
      modalVisible={modalVisible}
      cartItems={cartItems}
      setCartItems={setCartItems}
      setModalVisible={setModalVisible}
      itemSelected={itemSelected}
    />
    <View style={styles.header}>
      <Text>CARRITO</Text>
      

      <Image style={styles.image} source={cartLogo} />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.input}
        placeholder="Ingrese un producto"
      />
      <Pressable onPress={addItem}>
        <Text style={{ fontSize: 40 }}>+</Text>
      </Pressable>
    </View>
    <View style={styles.productList}>
      

      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={{ width: 400, flexDirection: "row" }}>
            <Text style={styles.product}>{item.name}</Text>
            <Pressable onPress={() => handleModal(item.id)}>
              <Text style={{ fontSize: 20 }}>🚮</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  </View>
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

