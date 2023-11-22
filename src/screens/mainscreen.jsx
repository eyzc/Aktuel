import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity,Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenStack } from "react-native-screens";



import { auth,firestore,storage } from "./utility/firebase";


const MainScreen = () =>{
    const [abc, setAbc] = useState("https://firebasestorage.googleapis.com/v0/b/aktuel-urunler-7b6d1.appspot.com/o/Bim%2Fpngwing.com%20(1).png?alt=media&token=f6a37e1c-d5ae-4c5a-bf11-f552f7619bf1")

    const fetchData = async () =>{
        const data = await firestore().collection('Market').get()
        console.log(data.docs[0].data().foto1)
        setAbc(data.docs[0].data().foto1)
    }
    

return(
    <View style={styles.arkaplan}>
        <TouchableOpacity
        onPress={fetchData}
        >
        <Image
style={styles.imageS}
 source={{uri: abc}}>
</Image>
        
        </TouchableOpacity>
    

    </View>
    
)
}
const styles = StyleSheet.create({
    arkaplan: {
      backgroundColor:'white',
      width:'100%',
      height:'50%'
    },
    imageS:{
        height:300,
        width:300,
        resizeMode:'center'
    }
  })
  
export default MainScreen;