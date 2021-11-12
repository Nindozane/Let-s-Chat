//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyC-yK_bjMhGAsDdbtye525O2gqRC_uzE_s",
    authDomain: "class-awesomeness.firebaseapp.com",
    databaseURL: "https://class-awesomeness-default-rtdb.firebaseio.com",
    projectId: "class-awesomeness",
    storageBucket: "class-awesomeness.appspot.com",
    messagingSenderId: "94933655167",
    appId: "1:94933655167:web:e2b53eb276ce6276d0e94a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}