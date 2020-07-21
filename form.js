
var config =
{
  apiKey: "AIzaSyA8-WF6szTB2JNWwhJsqJb_rd_v_-YD54M",
authDomain: "example-68958.firebaseapp.com",
databaseURL: "https://example-68958.firebaseio.com",
projectId: "example-68958",
storageBucket: "example-68958.appspot.com",
messagingSenderId: "63828575276"
};
firebase.initializeApp(config);

 const db = firebase.firestore();
const inputHeader = document.querySelector("#name");
const inputHeader1 = document.querySelector("#quantity");
const inputHeader2 = document.querySelector("#price");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click",function () {
    
    const name= inputHeader.value;
   const quantity= inputHeader1.value;
    const price= inputHeader2.value;
   
    
    db.collection("items").add({
        name: name,
        quantity:quantity,
        price:price
       
    })
    .then(function(docRef) {
        alert("successfully saved");
        window.location="./index.html";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
   
   
})



