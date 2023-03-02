const links = document.getElementById("my-links")
const hamburger = document.getElementById("hamburger")
const dis = document.getElementById('dis')
console.log(dis)

hamburger.addEventListener('click',()=>{
    links.classList.toggle("active")
    hamburger.classList.toggle("open")
    dis.classList.toggle('show')
})
document.addEventListener('click',(e)=>{
    if(e.target != links && e.target != hamburger && links.classList.contains("active") && hamburger.classList.contains("open")){
        links.classList.remove('active')
        hamburger.classList.remove('open')
        dis.classList.remove("show")
    }
})