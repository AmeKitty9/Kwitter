// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC8LF2RVWEnsOOsaCtgCq0I-qLKGaNlrIU",
      authDomain: "qwitter-d06fa.firebaseapp.com",
      databaseURL: "https://qwitter-d06fa-default-rtdb.firebaseio.com",
      projectId: "qwitter-d06fa",
      storageBucket: "qwitter-d06fa.appspot.com",
      messagingSenderId: "155730099955",
      appId: "1:155730099955:web:8df7d5731d94bd12f00186"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class = 'room_name' id =" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}