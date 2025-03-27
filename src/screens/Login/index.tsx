import axios from "axios";
import { useState } from "react";
import {Text, TextInput, View, StyleSheet,TouchableOpacity, Alert } from "react-native";


export default function Login({navigation}: any) {

const [cpf,setCpf] = useState("")
const [password, setPassword] = useState("")

    function handleNavigateToCreateAccount(){
        navigation.navigate("CreateAccount")
    }


        function handleLogin(){
            if(!cpf || !password){
                Alert.alert("Aviso", "Preencha todos os campos!")
            } else {
                axios.post("http://192.168.3.5:3000/login", {
                    cpf:cpf,
                    password:password,
                }
            )
            .then((response)=>{
                const token = response.data.token
                Alert.alert("Sucesso", "Login realizado com sucesso!")
                navigation.navigate("Home")
            }).catch(()=>{
                Alert.alert("Erro", "Credencias incorretas!")
            })
        }
    }
        // function handleChangeCpf(value: string){
        //     const parseCpf = value.replace(/\D/g,'')
        //     setCpf(parseCpf)
        // }

    return(
<View style={styles.container}> 
    
    <View style={styles.viewLogin}>
    <TextInput style={styles.input}  placeholder="CPF" keyboardType="number-pad" value={cpf} onChangeText={setCpf}/>
    <TextInput style={styles.input}  placeholder="Password" keyboardType="number-pad" secureTextEntry value={password} onChangeText={setPassword}/>
    <TouchableOpacity>
    <Text style={styles.linkText}>Esqueceu sua senha ?</Text>
    </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
        <Text>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleNavigateToCreateAccount}>
    <Text style={[styles.linkText, {textAlign:"center"}]}>Criar conta</Text>
    </TouchableOpacity>

</View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#150230",
        padding:20,
        justifyContent:"center"
    },
    input:{
        backgroundColor:"#fff",
        marginBottom:10,
        borderRadius: 5,
        height:38,
        fontSize:15,
        paddingHorizontal: 10
    },
    linkText:{
        color:"#fff",
        textAlign:"right",
        fontSize:15,
        marginBottom:40
    },
    viewLogin:{

    },
    buttonLogin:{
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 5,
        marginBottom:25,
        alignItems:"center"
    }
})