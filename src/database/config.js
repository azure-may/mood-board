import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAB4d3QFRvrfw48gOwL_UKD1c3d-p3BTfw",
  authDomain: "mood-board-b9808.firebaseapp.com",
  databaseURL: "https://mood-board-b9808.firebaseio.com",
  projectId: "mood-board-b9808",
  storageBucket: "mood-board-b9808.appspot.com",
  messagingSenderId: "866398373422",
  appId: "1:866398373422:web:ebb27b58bfa394c21e01bf",
  measurementId: "G-0P5W0LZJ06"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}