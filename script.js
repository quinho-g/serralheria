let dados = document.getElementById('dados')
let imgcatalogo = document.getElementById('img-catalogo')
let nome = document.getElementById('nome-dado')
let tempo = document.getElementById('tempo-dado')
let valor = document.getElementById('valor-dado')
let garantia = document.getElementById('garantia-dado')
let descriçao = document.getElementById('descri-dado')
function sobecata(trabalho){
        dados.style.display = 'grid'
            dados.scrollTop = 0
             switch (trabalho) {
                case 'portao1': 
                    imgcatalogo.src = "portao1.jpg"
                    nome.innerText = "Portão de entrada unica"
                    tempo.innerText = "40 Dias"
                    valor.innerText = "R$ 15.000"
                    garantia.innerText = "30 Dias"
                    descriçao.innerText = "Portão compacto e funcional, ideal para entrada de pedestres."
                break
                case "portao2":
                    imgcatalogo.src = "portao2.jpg"
                    nome.innerText = "Portão de garagem e entrada unica"
                    tempo.innerText = "60 Dias"
                    valor.innerText = "R$ 30.000"
                    garantia.innerText = "30 Dias"
                    descriçao.innerText = "Modelo integrado com acesso para pedestres e veículos."  
                    break
                case "portao3":
                    imgcatalogo.src = "portao3.jpg"
                    nome.innerText = "Portão completo de chapas cruzadas"
                    tempo.innerText = "20 Dias"
                    valor.innerText = "R$ 20.000"
                    garantia.innerText = "30 Dias"
                    descriçao.innerText = "Design moderno com chapas sobrepostas em estilo cruzado."
                break

                case "portao4": 
                    imgcatalogo.src = "portao4.jpg"
                    nome.innerText = "Grades para jardim"
                    tempo.innerText = "8 Dias"
                    valor.innerText = "R$ 2.000"
                    garantia.innerText = "7 Dias"
                    descriçao.innerText = "Grade leve e decorativa para segurança e charme no jardim."
                break
                case "portao5": 
                    imgcatalogo.src = "portao5.jpg"
                    nome.innerText = "Suporte para vasos e plantas"
                    tempo.innerText = "3 Dias"
                    valor.innerText = "R$ 800"
                    garantia.innerText = "7 Dias"
                    descriçao.innerText = "Estrutura prática para organizar e destacar seus vasos."
                break
                case "portao6":
                    imgcatalogo.src = "portao6.jpg"
                    nome.innerText = "Corrimão de escada"
                    tempo.innerText = "14 Dias"
                    valor.innerText = "R$ 2.000"
                    garantia.innerText = "7 Dias"
                    descriçao.innerText = "Corremão simples e seguro para apoio em escadas."
                break
                case "portao7":
                    imgcatalogo.src = "portao7.jpg"
                    nome.innerText = "Guarda corpo de escadas com vidros"
                    tempo.innerText = "14 Dias"
                    valor.innerText = "R$ 6.000"
                    garantia.innerText = "7 Dias"
                    descriçao.innerText = "Combinação elegante de metal e vidro para escadas internas."
                break

                case "portao8": 
                    imgcatalogo.src = "portao8.jpg"
                    nome.innerText = "Portão estilizado com rasgo e barras paralelas"
                    tempo.innerText = "50 Dias"
                    valor.innerText = "R$ 26.000"
                    garantia.innerText = "30 Dias"
                    descriçao.innerText = "Estilo contemporâneo com barras paralelas para um visual limpo e sofisticado."
                break
            }
        
}
function fechacata() {
    dados.style.display = 'none'
}






