// Classe que vai consultar a API do github
export class GitHub {
    static Search (username){
 const endpoint = `https://api.github.com/users/${username}`
 
 return fetch(endpoint)
 .then(data => data.json())
 .then(({login, name, public_repos, followers}) => ({
   login,
   name, 
   public_repos, 
   followers
 
 }) )
    }
 
   
 }