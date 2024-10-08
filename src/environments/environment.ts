// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF-_2xCh0qNCUI5QvkiX4uq2D9Kh-zsyY",
  authDomain: "tellevoapp-7960e.firebaseapp.com",
  projectId: "tellevoapp-7960e",
  storageBucket: "tellevoapp-7960e.appspot.com",
  messagingSenderId: "209164025276",
  appId: "1:209164025276:web:b7888790f03cd447f3ffb9",
  measurementId: "G-09H8B2BTF2"
};

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCF-_2xCh0qNCUI5QvkiX4uq2D9Kh-zsyY",
    authDomain: "tellevoapp-7960e.firebaseapp.com",
    projectId: "tellevoapp-7960e",
    storageBucket: "tellevoapp-7960e.appspot.com",
    messagingSenderId: "209164025276",
    appId: "1:209164025276:web:b7888790f03cd447f3ffb9",
    measurementId: "G-09H8B2BTF2"
  }
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
