import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenStack } from "react-native-screens";

const MainScreen = () =>{
return(
    <SafeAreaView style={styles.arkaplan}>
<Text>ADASDAS</Text>
    </SafeAreaView>
    
)
}
const styles = StyleSheet.create({
    arkaplan: {
      backgroundColor:'black',
      width:'100%',
      height:'100%'
    }
  })
  
export default MainScreen;