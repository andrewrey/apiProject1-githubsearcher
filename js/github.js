class GitHub{
  constructor(){
    this.client_id = '67e4256d4c8820a1b182';
    this.client_secret = 'c0789615153eab6d7380c9d9e8151b96b9ba5b7b';
  }

  async getUser(user){
    
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=$this.client_id&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
      
      return {
        profile
      }
  }
}