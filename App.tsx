import { View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Intro from "./src/screens/Intro";
import Login from "./src/screens/Login";
import CreateAccount from "./src/screens/CreateAccount";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CreateAccount">
          <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
        <StatusBar backgroundColor={"#150230"} />
      </NavigationContainer>
    </SafeAreaView>
  );
}
