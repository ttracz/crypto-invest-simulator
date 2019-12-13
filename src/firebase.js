import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyA03twXWclqrMZ5PvrD2p-GShkePrtRwbI",
    authDomain: "crypto-invest-simulator.firebaseapp.com",
    databaseURL: "https://crypto-invest-simulator.firebaseio.com",
    projectId: "crypto-invest-simulator",
    storageBucket: "crypto-invest-simulator.appspot.com",
    messagingSenderId: "202882126326",
    appId: "1:202882126326:web:f531750afd1b41fd1f37d7",
    measurementId: "G-ZD6GEMMC8W"
};
let fire = firebase.initializeApp(config);
export default fire;
