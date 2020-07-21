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
var urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('doc'));