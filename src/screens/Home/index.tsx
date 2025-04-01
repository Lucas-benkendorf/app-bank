import {
  View,
  StyleSheet,
  Alert,
  Dimensions,
  ScrollView,
  Text,
} from "react-native";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

interface Card {
  numero: string;
  nome: string;
  cvv: string;
  dataExpiração: string;
}

const Home = () => {
  const [cards, setCards] = useState([Card]);

  useEffect(() => {
    axios
      .get("http://192.168.3.5:3000/cartoes")
      .then((response) => {
        setCards(response.data);
      })
      .catch(() => Alert.alert("Erro ao pegar os cartões!"));
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.myCards}>Meus cartões</Text>
      <View style={{ height: 210 }}>
        <ScrollView horizontal>
          {cards.map((item) => (
            <View style={styles.creditCard}>
              <View>
                <Text style={styles.numberCard}>{item.numero}</Text>
                <Text style={styles.nameCard}>{item.nome}</Text>

                <View style={styles.footerCard}>
                  <Text style={styles.expirationCard}>
                    {item.dataExpiracao}
                  </Text>
                  <Text style={styles.expirationCard}>{item.cvv}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  creditCard: {
    width: Dimensions.get("window").width - 40,
    height: 190,
    borderRadius: 10,
    backgroundColor: "#150230",
    gap: 20,
    justifyContent: "flex-end",
    marginLeft: 20,
  },
  numberCard: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    margin: 5,
  },
  nameCard: {
    fontSize: 13,
    color: "#fff",
    margin: 10,
    marginVertical: 5,
  },
  expirationCard: {
    fontSize: 10,
    color: "#fff",
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  myCards: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Home;
