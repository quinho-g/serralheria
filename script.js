const imgcatalogo = document.getElementById('img-catalogo')
function sobecata(portao){
        imgcatalogo.style.display = 'flex'
        imgcatalogo.src = `${portao}`
}
function fechacata() {
    imgcatalogo.style.display = 'none'
}






