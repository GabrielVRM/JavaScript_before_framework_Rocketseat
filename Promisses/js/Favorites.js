// Classe que vai conter logica dos dados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load()
  }

  load(){
    this.entries = [
        {
          login: "GabrielVRM",
          name: "Gabriel Vieira",
          public_repos: "87",
          followers: "120000",
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
console.log(row)
    })
  }

  createRow() {
    const tr = document.createElement("tr");
    const data = `
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

    tr.innerText = data;

    return tr;
  }

  removeAllTr() {
    const tbody = this.root.querySelector("table tbody");

    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
