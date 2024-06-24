// src/firebase-init.js
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase-config';

const app = initializeApp(firebaseConfig);
// Si necesitas usar Analytics, descomenta la siguiente línea
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);

export { app };
