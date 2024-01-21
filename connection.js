const firebaseConfig = {
  apiKey: "AIzaSyD6390Fa5DmjQBUSZ_lhddIi4ijUyySHP0",
  authDomain: "login-76465.firebaseapp.com",
  databaseURL: "https://login-76465-default-rtdb.firebaseio.com",
  projectId: "login-76465",
  storageBucket: "login-76465.appspot.com",
  messagingSenderId: "433659304050",
  appId: "1:433659304050:web:4f5267423ad66c93bd8aeb",
  measurementId: "G-H5P1EMSMEY"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var phn1 = getElementVal("phn1");
  var phn2 = getElementVal("phn2");
  var bg = getElementVal("bg");
  var condition = getElementVal("condition");
  var message = getElementVal("message");
  saveMessages(name,phn1,phn2,bg,condition,message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name,phn1,phn2,bg,condition,message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
        Name : name,
        Phonenumber1 : phn1,
        Phonenumber2 : phn2,
        BloodGroup : bg,
        MedicalCondition : condition,
        Message : message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
