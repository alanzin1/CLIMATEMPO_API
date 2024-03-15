const key = "e6607e129c0edfe68d62728a3c2d5f19"

function dadosTela(dados){
    console.log(dados)
    document.querySelector(".titulo-cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) +"°C"
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "umidade: "+ dados.main.humidity+"%"
}

async function buscar(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(reposta => reposta.json())
    dadosTela(dados)
}

function clique(){
    const cidade = document.querySelector(".input-cidade").value
    buscar(cidade)
}
