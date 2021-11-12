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

user_name1 = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name1 + "! ";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}