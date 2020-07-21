class GitHub{
  constructor(){
    this.config = {
      headers: {
        Authorization:  apiInfo.token
      }
    };
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config);
    if(profileResponse.ok){
      const profile = await profileResponse.json();
      if(reposResponse.ok){
        const repos = await reposResponse.json();
        return {
          profile,
          repos
        }
      } else {
        return {
          profile
        };
      }
    } else {
      throw Error('User Not Found...');
    }
  }
}