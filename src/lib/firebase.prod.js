import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore'
// import 'firebase/auth';
import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyC9jdXpr0LCOwceFdTHp62TB2JM8ztnD-U",
    authDomain: "netflix-clone-ccf37.firebaseapp.com",
    projectId: "netflix-clone-ccf37",
    storageBucket: "netflix-clone-ccf37.appspot.com",
    messagingSenderId: "964123523246",
    appId: "1:964123523246:web:304bf2123ea0ba8060953f"
};

const App = initializeApp(config);

seedDatabase(App);

export { App };