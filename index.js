async function display(){
    let link=await fetch("https://nekos.best/api/v2/neko")
let res =await link.json()
console.log(res)
let img=res.results[0].url
let name=res.results[0].artist_name
let Artict_Acc=res.results[0].artist_href
let img_URL=res.results[0].source_url
let car = document.getElementById("car")
car.innerHTML=`
<div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Anime Arts</h5>
                <p class="card-text">Artist Name:${name}</p>
                <a href="#" class="btn btn-primary" onclick="display()">Get more</a>
`
}
