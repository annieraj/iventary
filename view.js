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

        var storage = firebase.storage();
        var storageRef = storage.ref();
        const db = firebase.firestore();
      

;

        
       
       
 
db.collection('items').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})

const accountList = document.querySelector('#tbody') ;
function renderAccount(doc){
    console.log('data',doc.id);
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_price = document.createElement('td');
    let td_qty = document.createElement('td');
    let del= document.createElement('button');

    var a = document.createElement('a');  
    //var a1 = document.createElement('a');  
                  
    // Create the text node for anchor element. 
    

    tr.setAttribute('data-id', doc.id);
  
    td_name.textContent = doc.data().name;
    td_price.textContent = doc.data().price;
    td_qty.textContent = doc.data().quantity;
    var link = document.createTextNode("UPDATE"); 
    
    del.innerHTML=" Delete ";
    // Append the text node to anchor element. 
    a.appendChild(link);  
      
    // Set the title. 
    a.title = "update";  
      
    // Set the href property. 
    a.href = "./update.html?doc=" +doc.id + "&name="+doc.data().name;  

     
    del.addEventListener("click", function() {
        db.collection("items").doc(doc.id).delete().then(function() {
        alert("do u want to delete ..?");
        window.location="./sam.html";
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    });
      
    // Append the anchor element to the body. 
   




    tr.appendChild(td_name);
    tr.appendChild(td_price);
    tr.appendChild(td_qty);
    tr.appendChild(a);
    tr.appendChild(del);

    accountList.appendChild(tr).style.height='70px';     
}
