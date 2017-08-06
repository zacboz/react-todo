import firebase from "firebase";

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVXXP8rE33mjPg2yKZl07wt7uiyI7aaUE",
    authDomain: "boswell-todo-app.firebaseapp.com",
    databaseURL: "https://boswell-todo-app.firebaseio.com",
    projectId: "boswell-todo-app",
    storageBucket: "boswell-todo-app.appspot.com",
    messagingSenderId: "384295531643"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
