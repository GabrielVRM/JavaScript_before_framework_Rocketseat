// Classe que vai conter logica dos dados 

 export class Favorites {
    constructor (root){
        this.root = document.querySelector(root)
    }
}


// classe que vai criar visualização e eventos html
export class FavoritesView extends Favorites {
    constructor(root){
        super(root)
        console.log(this.root)
this.update()
      
    }
    update(){
          this.removeAllTr()
    }

    removeAllTr(){
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')
        .forEach( tr => {
            tr.remove()
        })
    }
}