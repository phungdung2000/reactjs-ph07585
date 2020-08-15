import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBMWUTBlAIOM65SSc4ic0KfjfcFvA5969A",
  authDomain: "reactapp-d3e5b.firebaseapp.com",
  databaseURL: "https://reactapp-d3e5b.firebaseio.com",
  projectId: "reactapp-d3e5b",
  storageBucket: "reactapp-d3e5b.appspot.com",
  messagingSenderId: "114761771265",
  appId: "1:114761771265:web:f9589a93624001c747d300"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase;