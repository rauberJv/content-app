import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyCQSsLlSrpXTwwnI7H7botplNtLYvtqaQs",
        authDomain: "book-of-terminology.firebaseapp.com",
        projectId: "book-of-terminology",
        storageBucket: "book-of-terminology.appspot.com",
        messagingSenderId: "250383345304",
        appId: "1:250383345304:web:0544fce8d3e6083b3812ed",
        measurementId: "G-ZSE4G69DXR"
    };

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    
    nuxtApp.vueApp.provide('firestore', firestore);
    nuxtApp.provide('firestore', firestore);
});