class GitHub{
  constructor(){
    this.client_id = apiInfo.client_id;
    this.client_secret = apiInfo.client_secret;
  }

  async getUser(user){
    
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=$this.client_id&client_secret=${this.client_secret}`);
    if(profileResponse.ok){
      const profile = await profileResponse.json();
       return {
        profile
      };
    } else {
      throw Error('User Not Found...');
    }
  }
}