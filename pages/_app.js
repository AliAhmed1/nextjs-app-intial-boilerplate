import '../styles/globals.css';
import firebase from 'firebase/compat/app';
// import 'firebase/firestore';

const firebaseConfig = {
  // Paste the configuration object you copied earlier here
  apiKey: "AIzaSyCtArjEfrVB2Hvdbr6igYzXSmZmkTMhkl8",
  authDomain: "fyp-frag.firebaseapp.com",
  databaseURL: "https://fyp-frag.firebaseio.com",
  projectId: "fyp-frag",
  storageBucket: "fyp-frag.appspot.com",
  messagingSenderId: "572246286961",
  appId: "1:572246286961:web:72971ebc3e7edecb7471d0",
  measurementId: "G-0XFNP9JZQQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }