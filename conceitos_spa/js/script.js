function router(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()

}
//mapeamento da rota 
const route = {
    "/": "../pages/home.html",
    "/contact": "../pages/contact.html",
    "/about": "../pages/about.html",
    404: "../pages/error.html"

}

function handle(){
    const {pathname} = window.location
    // console.log(pathname)

    route = router(pathname) || router(404)

    fetch(router).then(data => data.text())
}