import firebase from "firebase";

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

var firebaseRef = firebase.database().ref();

//set wipes and replaced
firebaseRef.set({
  app: {
    name: "Todo App",
    version: "1.0.0"
  },
  isRunning: true,
  user: {
    name: "Zac",
    age: 31
  }
})

// var notesRef = firebaseRef.child("notes");
//
// notesRef.on("child_added", (snapshot) => {
//   console.log("child_added", snapshot.key, snapshot.val());
// });
//
// notesRef.on("child_changed", (snapshot) => {
//   console.log("child_changed", snapshot.key, snapshot.val());
// })
//
// notesRef.on("child_removed", (snapshot) => {
//   console.log("child_removed", snapshot.key, snapshot.val());
// })
//
// var newNoteRef = notesRef.push({
//   text: "Walk the dog!"
// });

var todosRef = firebaseRef.child("todos");

todosRef.on("child_added", (snapshot) => {
  console.log("New todo added", snapshot.key, snapshot.val());
})

todosRef.push({
  text: "Todo 1"
});
todosRef.push({
  text: "Todo 2"
});

//update app name, user name
// firebaseRef.update({
//   "app/name": "Todo App",
//   "user/name": "Jan"
// })

//update app name and user name with child method
// firebaseRef.child("app").update({name: "Todo Application1"});
//
// firebaseRef.child("user").update({name: "Doc Holiday"});

// firebaseRef.child("app/name").remove();
// firebaseRef.child("app").update({
//   version: "2.0",
//   name: null //removes data
// });

//set val = null to remove isRunning
// firebaseRef.update({isRunning: null})
//use child to remove user age
// firebaseRef.child("user/age").remove();

// firebaseRef.child("app").once("value").then((snapshot) => {
//   console.log("Got entire database", snapshot.key, snapshot.val());
// }, (e) => {
//   console.log("Unable to fetch value", e);
// })

// var logData = (snapshot) => {
//   console.log("Got value", snapshot.val());
// }
//
// firebaseRef.on("value", logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

//use .on to listen to changes to user object
// firebaseRef.child("user").on("value", (snapshot) => {
//   console.log("user ref changed", snapshot.val());
// })
// //update data in user
// firebaseRef.child("user").update({name: "Mike"});
// //update app name
// firebaseRef.child("app").update({name: "Something"});
