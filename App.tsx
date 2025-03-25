import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#150230"} />
      <Text style={styles.bankName}>Your Bank</Text>
      <Image
        source={require("./assets/cartao.png")}
        style={styles.bankLogo}
      />

      <View>
        <Text style={styles.title}>
          {" "}
          Um mundo financeiro sem complexidades!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#150230",
    padding: 20,
    justifyContent: "space-between",
  },
  bankName: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  bankLogo: {
    width: 350,
    height: 250,
    alignSelf: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    width: "75%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginBottom:25
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
  },
});
