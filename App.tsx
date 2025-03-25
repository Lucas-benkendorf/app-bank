import { View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Intro from "./src/screens/Intro";
import Login from "./src/screens/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar backgroundColor={"#150230"} />
      </NavigationContainer>
    </SafeAreaView>
  );
}
