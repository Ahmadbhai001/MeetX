// Import the functions you need from the SDKs you need
import { firebase } from "@react-native-firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATZ6WBl4JSHrmuu9QPSxmfcoiaH_L6XEU",
  authDomain: "meetxadmin.firebaseapp.com",
  projectId: "meetxadmin",
  storageBucket: "meetxadmin.appspot.com",
  messagingSenderId: "252575781606",
  appId: "1:252575781606:web:098af18053d0206d3ee127"
};

if(!firebase.apps.length){
  firebase.initializApp(firebaseConfig)}

  export {firebase};