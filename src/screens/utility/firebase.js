import firebase, { initialitizeApp } from "@react-native-firebase/app"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from "@react-native-firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDADAE6Pxupt1QFaL4hUwLRGD5H1TAfp2Y",
    authDomain: "aktuel-urunler-7b6d1.firebaseapp.com",
    databaseURL:"https://aktuel-urunler-7b6d1.firebaseio.com",
    projectId: "aktuel-urunler-7b6d1",
    storageBucket: "aktuel-urunler-7b6d1.appspot.com",
    messagingSenderId: "400586033795",
    appId: "1:400586033795:web:4b8c044aef533d859b29b6",
    measurementId: "G-QGKRSCVSER"
  };

  if (firebase.apps.length == 0) {
    const app = initialitizeApp(firebaseConfig)

  }
  
  export { auth, firestore, storage }