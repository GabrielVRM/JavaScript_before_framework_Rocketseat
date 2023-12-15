// Classe que vai conter logica dos dados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
     this.tbody = this.root.querySelector("table tbody");

    this.load()
  }

  load(){
    this.entries = [
        {
          login: "GabrielVRM",
          name: "Gabriel Vieira",
          public_repos: "87",
          followers: "19200",
        },
        {
          login: "Diegogb",
          name: "Diego Reis",
          public_repos: "100",
          followers: "12000",
        },
      ]
  }
}

// classe que vai criar visualização e eventos html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    console.log(this.root);
    this.update();
  }
  update() {
    // this.removeAllTr()
  
    this.entries.forEach( user => {
 const row = this.createRow()

 row.querySelector('.user img').src = `https://github.com/${user.login}.png`
 row.querySelector('a').hrefn = `https://github.com/${user.login}`
 row.querySelector('p').innerText = `${user.login}`
 row.querySelector('span').innerText = `${user.name}`
 row.querySelector('.repositories').innerText = `${user.public_repos}`
 row.querySelector('.followers').innerText = `${user.followers}`


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
                <td>&times;</td>  
                `;
    return tr;
  }

  removeAllTr() {

    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
