
function doGoogle()
{
     
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

     // Google provider object is created here. 
    const googleAuth =  
      new firebase.auth.GoogleAuthProvider(); 

    // using the object we will authenticate the user. 
    firebase.auth().signInWithPopup(googleAuth)
    .then(function(user){
      //alert('successfully logged in user'+user.displayName);
      window.location.assign("home.html");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        errBox=document.getElementById("error");
        errBox.classList.remove("d-none");
        errBox.innerHTML=errorMessage;
      });
}
function doEmailLogin()
{
    email=document.getElementById("inputUsername").value;
    password=document.getElementById("inputPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        //alert('successfully logged in user'+user.displayName);
        window.location.assign("home.html");
      })
      .catch((error) => {
        var errCode = error.code;
        var errorMessage = error.message;
        errBox=document.getElementById("error");
        errBox.classList.remove("d-none");
        errBox.innerHTML=errorMessage;
      });
}

  
 function doRegister()
  {
    var email = document.getElementById("inputUsername").value;
    var password = document.getElementById("inputPassword").value;
    var confirmPassword = document.getElementById("inputConfirmPassword").value;
    var errBox = document.getElementById("error");
  
    if (password !== confirmPassword) {
      errorMessage="passwords must match."
      errBox.innerHTML=errorMessage;
      errBox.classList.remove("d-none");
      return;
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result){
        //user registered and logged in automatically
        console.log("User registered!");
        firebase.auth().currentUser.sendEmailVerification();
        window.location.assign("survey.html");
        return true;
      }).catch(function(error) {
        //error occurred, show error message
        let errorCode = error.code;
        let errorMessage = error.message;
        errBox=document.getElementById("error");
        errBox.classList.remove("d-none");
        errBox.innerHTML=errorMessage;
      });
    }
  }

  function loadUserProfile()
  {
    firebase.auth().currentUser;
    //if (fbUser==null) {
      //window.location.assign("index.html");
    //  return;
    //} else 
    //{
    curUser=firestore.collection("user").doc(fbUser.uid);
    return curUser;
    //}
  }

 
/**
 * This Code Creates a user profile document with ID -> uid in the `Users` collection.
 *
 * @param {Object} userRecord Contains the auth, uid and displayName info.
 * @param {Object} context Details about the event.
 */
const createProfile = (userRecord, context) => {
  const { email, username, uid } = userRecord;

  return firebase.firestore()
    .collection("user")
    .doc(uid)
    .set({ email, username })
    .catch(console.error);
};

module.exports = {
  authOnCreate: functions.auth.user().onCreate(createProfile),
};