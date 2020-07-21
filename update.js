
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
//const docRef =firestore.doc("items/laptops");
//const outputHeader = document.querySelector("#view");
const inputHeader = document.querySelector("#name");
const inputHeader1 = document.querySelector("#price");
const inputHeader2 = document.querySelector("#quantity");
const updateButton = document.querySelector("#updateButton");
const updateButton1 = document.querySelector("#e");
var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('doc'));

var washingtonRef = db.collection("items").doc(urlParams.get('doc'));
washingtonRef.get().then(function (doc) {
    if( doc && doc.exists){
       console.log(doc.data().name) ;
       //const mydata= doc.data();
       //inputHeader.value=   mydata.name;
       inputHeader.value= doc.data().name;
       // inputHeader.innerHTML= doc.data().name;
        inputHeader1.value= doc.data().price;
        inputHeader2.value= doc.data().quantity;

            }           
         }) .catch(function (error) {
    console.log("go an error", error);
         });
updateButton.addEventListener ("click", function() {
    alert("Do you want to update ");
    
    const textToSave= inputHeader.value;
    const textToSave1= inputHeader1.value;
    const textToSave2= inputHeader2.value;
   
    

// Set the "capital" field of the city 'DC'
return washingtonRef.update({
    name: textToSave,
    price: textToSave1,
    quantity: textToSave2
})
.then(function() {
    console.log("Document successfully updated!" + urlParams.get('doc'));
    window.location="./sam.html";
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
   
  });
 



