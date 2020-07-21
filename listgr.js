
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
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_price = document.createElement('td');
    let td_qty = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    
    td_name.textContent = doc.data().name;
    td_price.textContent = doc.data().price;
    td_qty.textContent = doc.data().quantity;
    if(td_qty.textContent>4){
    tr.appendChild(td_name);
    tr.appendChild(td_price);
    tr.appendChild(td_qty);

    accountList.appendChild(tr);
    }
}