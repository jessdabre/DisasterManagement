const firebaseConfig = {
  apiKey: "AIzaSyDeOqeLcqGVfjAPFfvbWjKhbphwxHDR5Mo",
  authDomain: "disastermanagement-402118.firebaseapp.com",
  databaseURL: "https://disastermanagement-402118-default-rtdb.firebaseio.com",
  projectId: "disastermanagement-402118",
  storageBucket: "disastermanagement-402118.appspot.com",
  messagingSenderId: "646530051011",
  appId: "1:646530051011:web:98d15e0321a6ec9400ab76",
  measurementId: "G-D42ZG3BYN2"
};

//initialize
firebase.initializeApp(firebaseConfig);
var LoginInfoDB = firebase.database().ref('LoginInfo');
document.getElementbyId("loginform").addEventListener("submit", subitForm);


function subitFrom(e){
  e.preventDefault();
}
