importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD...",
  authDomain: "allo-parabole-4c1b2.firebaseapp.com",
  projectId: "allo-parabole-4c1b2",
  messagingSenderId: "929513021834",
  appId: "1:929513021834:web:xxxxxx"
});

const messaging = firebase.messaging();