// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain:  import.meta.env.VITE_FB_AUTH_DOMAIN,
    projectId:  import.meta.env.VITE_FB_PROJECT_ID,
    storageBucket:  import.meta.env.VITE_FB_STORAGE_BUCKET,
    messagingSenderId:  import.meta.env.VITE_FB_MSG_SENDER_ID,
    appId:  import.meta.env.VITE_FB_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);  // reference storage
