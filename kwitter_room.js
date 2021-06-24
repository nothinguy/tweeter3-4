// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBDeF-O9YKecVu5cpcYbxzP7y0uY18bmB4",
  authDomain: "kwitter-36ac1.firebaseapp.com",
  databaseURL: "https://kwitter-36ac1-default-rtdb.firebaseio.com",
  projectId: "kwitter-36ac1",
  storageBucket: "kwitter-36ac1.appspot.com",
  messagingSenderId: "399806602887",
  appId: "1:399806602887:web:e666ca93cc29795d7e2222",
  measurementId: "G-T6ZCBTN9DB"
};
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
 
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name "
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}


function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id =  " + Room_names + " onclick = 'redirectToRoomName(this.id)'># " + Room_names + "</div> <hr> "
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