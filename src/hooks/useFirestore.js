import {useState, useEffect} from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const useFirestore = (col) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDBLE-I2bEdRPm4ycO-KtZMdF3Fhcx6QWk",
        authDomain: "personalsite-16deb.firebaseapp.com",
        projectId: "personalsite-16deb",
        storageBucket: "personalsite-16deb.appspot.com",
        messagingSenderId: "326454824650",
        appId: "1:326454824650:web:ee0db51b60c3a5ddac6e33",
        measurementId: "G-VNCXBELTRL"
      };
      
    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, col), (snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });

        return () => unsub();

    }, [collection])

    return { docs }; 

}

export default useFirestore;