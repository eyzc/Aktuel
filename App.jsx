import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenStack } from "react-native-screens";
import MainScreen from "./src/screens/mainscreen.jsx"


const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="MainScreen"
    >
     <Stack.Screen
        name='MainScreen'
        component={MainScreen}
        options={{
          headerShown:false
        }}
       
      ></Stack.Screen>
        
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App