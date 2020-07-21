// Initialize Github class
let github = new GitHub();

// Initialize UI class
let ui = new UI();



// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e)=>{
  // Get Input Text
  const userText = e.target.value;

  if(userText !== ''){
    //Make http call
    github.getUser(userText)
      .then(data => {  
        // Show profile
        ui.showProfile(data.profile);
      })
      .catch(error => ui.showAlert(error.message, 'alert alert-danger'));
  } else {
    // Clear Profile
    ui.clearProfile();
  }
})