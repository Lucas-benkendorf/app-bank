import axios from "axios";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from "react-native";
import ItemList from "./ItemList";

const values = [
  {
    value: 20,
    label: "R$ 20,00",
  },
  {
    value: 30,
    label: "R$ 30,00",
  },
  {
    value: 40,
    label: "R$ 40,00",
  },
  {
    value: 50,
    label: "R$ 50,00",
  },
  {
    value: 100,
    label: "R$ 100,00",
  },
  {
    value: 150,
    label: "R$ 150,00",
  },
];



// const DddOptions = [
//   { 
//     value:'86',
//     label: '86'
//   },
  
//   { 
//     value:'47',
//     label: '47'
//   },
  
//   { 
//     value:'45',
//     label: '45'
//   },
  
//   { 
//     value:'31',
//     label: '31'
//   },
  
//   { 
//     value:'22',
//     label: '22'
//   },
  
//   { 
//     value:'38',
//     label: '38'
//   }
// ]

type Operator = {
  id: number;
  name: string;
  cover: string;
}

export default function Recharges() {

  const [phone, setPhone] = useState("");
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState("");
  const [ddd, setChangeDdd] = useState("")

  const [operatorsOptions, setOperatorsOptions] = useState<Operator[]>([])

  function handleChangeValue(valueOption: number) {
    setValue(valueOption);
  }

  function handleChangeOperator(operatorOption: string) {
    setOperator(operatorOption);
  }


  function handleCreateRecharge(){
   
    const regexPhone = /^\(\d{2}\)\s\d{5}-\d{4}$/
    if(!regexPhone.test(phone)){
      Alert.alert("Aviso", "O telefone está no formato inválido!")
    }else if (!value){
      Alert.alert("Aviso", "Selecione um valor")
    }else if (!operator) {
      Alert.alert("Aviso", "Selecione uma operadora")
    }else {
      axios.post("http://192.168.3.5:3000/recharges",{
        phone: phone,
        value: value,
        operator: operator
      }).then(()=>{
        Alert.alert("Aviso", "Recarga realizada com sucesso!")
      }).catch(()=>{
        Alert.alert("Aviso", "Não foi possível realizar a recarga, tente novamente!" )
      })
      .finally(() =>{
        setPhone("")
      setValue(0)
      setOperator("")
      })
    }
  }

  useEffect(() => {
    axios.get("http://192.168.3.5:3000/operadoras")
    .then((response) => {
      setOperatorsOptions(response.data)
    })
    .catch(() => Alert.alert("Erro ao carregar operadoras"))

  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recargas</Text>

      <Text>Qual o número você quer recarregar ?</Text>
      <TextInput
        placeholder="(00) 00000-0000"
        underlineColorAndroid={"#150230"}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text>Escolha a valor que deseja recarregar ? </Text>

      <ItemList options={values} handleChangeValue={handleChangeValue} value={value} />

      {/* <ItemList options={DddOptions} handleChangeValue={setChangeDdd} value={ddd} /> */}

      <Text>Escolha a operadora ?</Text>

      {operatorsOptions.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleChangeOperator(item.name)}
          style={[styles.operatorOption, {backgroundColor: item.name === operator ? "#CCC" : "#FFF"}]}
        >
          <Image
            source={{
              uri: item.cover,
              width: 40,
              height: 40,
              
            }}
            style={{objectFit: 'contain'}}
          />
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ))}

      <Button title="Confirmar" onPress={() => Alert.alert("Recarga confirmada")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#150230",
  },
  rechargeOptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  rechargeOption: {
    width: "30%",
    height: 40,
    backgroundColor: "#150230",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  rechargeTextOption: {
    color: "#FFF",
  },
  operatorOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "#150230",
    padding: 5,
    marginVertical: 10,
  },
});