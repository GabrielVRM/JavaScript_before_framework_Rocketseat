import { GitHub } from "./GithubUser.js";

// Classe que vai conter logica dos dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);

    this.load()

  }




  load(){
    this.entries = JSON.parse(localStorage.getItem('@github-favorites')) || []
    
  }
  save(){
    localStorage.setItem('@github-favorites', JSON.stringify(this.entries))
  }

  async add(username){
    try{
      const userExists = this.entries.find(entry => entry.login == username )

if(userExists) {
  throw new Error ('usuario já cadastrado')
}
      const user = await GitHub.Search(username)
      console.log(user)
    if(user.login === undefined){
      throw new Error ('Usuario não encontrado!')
    }
    this.entries = [user, ...this.entries]
    this.update()
    this.save()

    }catch(error){
alert(error.message)
    }
  }
  delete(user){
    const filterEntries = this.entries.filter(entry => entry.login !== user.login)
   this.entries = filterEntries
   this.update();
   this.save()

  }
}

// classe que vai criar visualização e eventos html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.tbody = this.root.querySelector("table tbody");
    this.update();
    this.onadd();
  }

  onadd(){
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
    const {value} = this.root.querySelector('.search input')
    
    this.add(value)
    }
      }
  update() {
    this.removeAllTr()
  
    this.entries.forEach( user => {
 const row = this.createRow()

 row.querySelector('.user img').src = `https://github.com/${user.login}.png`
 row.querySelector('a').href = `https://github.com/${user.login}`
 row.querySelector('p').innerText = `${user.login}`
 row.querySelector('span').innerText = `${user.name}`
 row.querySelector('.repositories').innerText = `${user.public_repos}`
 row.querySelector('.followers').innerText = `${user.followers}`
 row.querySelector('.remove').onclick = () => {
  const isOk = confirm('Tem certeza que deseja deletar essa linha?')
  if(isOk){
this.delete(user)
  }
}

 this.tbody.append(row)
})
  }

  createRow() {
    const tr = document.createElement("tr");
   tr.innerHTML = `
            <td class="user">
            <img src="https://github.com/maykbrito.png" alt="Imagem de Mayk Brito">
            <a href="https://github.com/maykbrito" target="_blank">
            <p>Mayk Brito</p>
            <span>maykbrito</span>
                </a>
                </td>
                <td class="repositories">
                76
                </td>
                <td class="followers">
                9589
                </td>
                <td>
                <button class="remove">&times;</button>  
                </td>
                `
    return tr;
  }

  removeAllTr() {

    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
