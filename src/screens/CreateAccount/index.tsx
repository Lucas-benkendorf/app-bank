import React, {useState} from "react";
import { Text, View,TouchableOpacity, StyleSheet, TextInput,Alert } from "react-native";


export default function CreateAccount(){
    
    const [name, setName] = useState ('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const handleCreateAccount = () => {
        if(!name) {
          Alert.alert('Aviso', 'Preencha o campo nome completo')
        } else if(!email) {
          Alert.alert('Aviso', 'Preencha o campo email')
            } else if(!/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf)) {
          Alert.alert('Aviso', 'Preencha o campo CPF no formato válido. Ex: 000.000.000-00');
        } else if (password !== confirmPassword){
            Alert.alert('Aviso', 'as senhas não coincidem!');
        }else {
            Alert.alert('Sucesso', 'Conta criada com sucesso!')
        }
    }

    return(
        <View style={styles.container}> 
            
            <View>
                <Text style={styles.createAccountText}>Criar Conta</Text>
                <Text style={styles.descriptionText}>Crie uma conta agora e ganhe seu cartão de crédito com R$ 1000,00 de limite</Text>
            <TextInput style={styles.input}  placeholder="Nome Completo" value={name} onChangeText={setName}/>
            <TextInput style={styles.input}  placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail}/>
            <TextInput style={styles.input}  placeholder="CPF" keyboardType="number-pad" value={cpf} onChangeText={setCpf}/>
            <TextInput style={styles.input}  placeholder="Password" secureTextEntry value={password} onChangeText={setPassword}/>
            <TextInput style={styles.input}  placeholder="Confirm Password"  secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword}/>
        
            </View>
        
            <TouchableOpacity onPress={handleCreateAccount} style={styles.buttonLogin}>
                <Text>Criar Conta</Text>
            </TouchableOpacity>
        
            <TouchableOpacity >
            <Text style={[styles.linkText, {textAlign:"center"}]}>Já tem uma conta? Faça o login!</Text>
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
    createAccountText:{
        color:"#FFF",
        fontSize:30,
        marginBottom:20,
    },
    descriptionText:{
        color:"#FFF",
        marginBottom:20,
    },
    buttonLogin:{
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 5,
        marginBottom:25,
        marginTop:25,
        alignItems:"center"
    }
})


