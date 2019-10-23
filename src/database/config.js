import * as firebase from 'firebase'

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}
