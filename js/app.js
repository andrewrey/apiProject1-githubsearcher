// Initialize Github class
let github = new GitHub();
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
        if(data.profile.message === 'Not Found'){
          // Show Alert
        } else {
          // Show Profile
          console.log(data);
        }
      });
  } else {
    // Clear Profile
  }
})