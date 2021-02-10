// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBmAz-8VUws9vfZh1zlkUQa3KDd-3AUfZ4",
    authDomain: "projectk-8a369.firebaseapp.com",
    databaseURL: "https://projectk-8a369-default-rtdb.firebaseio.com",
    projectId: "projectk-8a369",
    storageBucket: "projectk-8a369.appspot.com",
    messagingSenderId: "129144464059",
    appId: "1:129144464059:web:9672800072873c7876ff9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

u_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + u_name +"! ";


function addroom(){
  room_name=document.getElementById("room_name").value;
  console.log("c");
  localStorage.setItem("room_name",room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);
      window.location = "page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
 });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}



function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }