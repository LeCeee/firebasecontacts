var config = {
    apiKey: "AIzaSyD_UZkVQlybgXUDy1GZfcV62mkoiFHUlZI",
    authDomain: "contactform-96021.firebaseapp.com",
    databaseURL: "https://contactform-96021.firebaseio.com",
    projectId: "contactform-96021",
    storageBucket: "contactform-96021.appspot.com",
    messagingSenderId: "187546889106"
  };
  firebase.initializeApp(config);

  var messageRef = firebase.database().ref('messages')
document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var name = getInput('name');
    var company  = getInput('company');
    var email= getInput('email');
    var phone = getInput('phone');
    var message = getInput('message');

    saveMessages(name,company,email,phone,message);
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';

    },3000);

    document.getElementById('contactForm').reset();

    console.log(name);
}


function getInput(id){
    return   document.getElementById(id).value;
}

function saveMessages(name,company,email,phone,message) {
    var newMessageRef = messageRef.push({
        name:name,
        company: company,
        email:email,
        phone:phone,
        message:message
    });
}