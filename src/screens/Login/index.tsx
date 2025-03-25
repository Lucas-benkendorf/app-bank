import {Text, TextInput, View, StyleSheet,TouchableOpacity } from "react-native";


export default function Login({navigation}: any) {
    function handleNavigateToCreateAccount(){
        navigation.navigate("CreateAccount")
    }
    return(
<View style={styles.container}> 
    
    <View style={styles.viewLogin}>
    <TextInput style={styles.input}  placeholder="CPF" keyboardType="number-pad"/>
    <TextInput style={styles.input}  placeholder="Password" keyboardType="number-pad" secureTextEntry/>
    <TouchableOpacity>
    <Text style={styles.linkText}>Esqueceu sua senha ?</Text>
    </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.buttonLogin}>
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