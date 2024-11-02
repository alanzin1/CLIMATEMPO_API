const weatherKey = process.env.WEATHER_KEY;
const unsplashKey = process.env.UNSPLASH_KEY;

async function buscar(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${weatherKey}&lang=pt_br&units=metric`
  ).then((reposta) => reposta.json());
  dadosTela(dados);
}

async function buscarImagem(cidade) {
  const resposta = await fetch(
    `https://api.unsplash.com/search/photos?query=${cidade}&client_id=${unsplashKey}`
  );
  const data = await resposta.json();

  if (data.results.length > 0) {
    const imagemUrl = data.results[0].urls.regular;
    document.body.style.backgroundImage = `url(${imagemUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  } else {
    console.log("Nenhuma imagem encontrada");
  }
}
