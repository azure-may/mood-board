import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC5eJYwS9xSwOGQfRxeY90bCmqztjgEsu8",
  authDomain: "mood-board-97e63.firebaseapp.com",
  databaseURL: "https://mood-board-97e63.firebaseio.com",
  projectId: "mood-board-97e63",
  storageBucket: "mood-board-97e63.appspot.com",
  messagingSenderId: "128283375811",
  appId: "1:128283375811:web:3d5723ffdae69168b0ca76",
  measurementId: "G-D7Z575T66P"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}