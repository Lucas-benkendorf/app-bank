import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const Header = () => {
    const saldo = "R$ 1500.75"; 
    const name = "Lucas Gabriel Benkendorf Soligo".split("")
    const firstName = name[0]

    const [showBalance, setShowBalance] = useState(false)

    return (
        <View style={styles.header}>
         <View>
            <Text style={styles.totalMoney}>{showBalance ? saldo : '*****'}</Text>
            <Text style={styles.yourMoneyText}>Seu saldo</Text>
            {
                showBalance ? 
                (<Icon name='eye' size={25} color='#150230' onPress={()=> setShowBalance(!showBalance)} />)
                :
                (<Icon name='eye-off' size={25} color='#150230' onPress={()=> setShowBalance(!showBalance)} />)
            }
            
            
         </View>

         <View>
            <Image source={{uri:'https://lh3.googleusercontent.com/a/ACg8ocIFzMFqg18Z00YHBmn5izxxUfNZ8jML0FUXsIGbzJfomVv0bLbm=s192-c-mo', width:50, height:50,}} style={{borderRadius:25, alignSelf:'center'}} />        
            <Text style={styles.userName}>Lucas</Text>
         </View>
         </View>
    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    totalMoney:{
        fontSize: 28,
        color: '#150230',
        fontWeight:"bold",

    },
    yourMoneyText:{
        fontSize: 14,
        color: '#150230',
    },
    userName:{
        fontSize: 20,
        color: '#150230',
        fontWeight:"bold",
    }
  

});

export default Header;