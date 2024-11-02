ClimaConect 🌤️

Um aplicativo simples que mostra o clima atual de uma cidade e altera o plano de fundo de acordo com a imagem da cidade pesquisada.

🔗 Índice

-Descrição

-Funcionalidades

-Tecnologias Utilizadas

-Instalação

-Configuração

-Uso

📖 Descrição

ClimaConect é um aplicativo de clima que utiliza a API OpenWeather para obter informações sobre o clima de uma cidade e a API Unsplash para mostrar uma imagem relacionada à cidade pesquisada como plano de fundo da página.

🚀 Funcionalidades

Buscar o clima de qualquer cidade pelo nome.
Mostrar informações como temperatura, umidade e descrição do clima.
Alterar o plano de fundo para uma imagem da cidade pesquisada.

🛠️ Tecnologias Utilizadas

HTML, CSS e JavaScript: para a estrutura, estilo e funcionalidades da interface.

OpenWeather API: para obter informações sobre o clima.

Unsplash API: para carregar uma imagem da cidade pesquisada como plano de fundo.

📦Instalação

Clone o repositório:

git clone https://github.com/alanzin1/CLIMATEMPO_API.git

Navegue para o diretório do projeto:

cd seu-repositorio

⚙️ Configuração

Crie um arquivo .env na raiz do projeto para armazenar suas chaves de API.

WEATHER_KEY=sua_chave_openweather

UNSPLASH_KEY=sua_chave_unsplash

No seu código JavaScript, certifique-se de que as chaves estão sendo acessadas corretamente. Se você não possui um sistema de bundling, defina as chaves diretamente.

▶️ Uso

Abra o arquivo index.html em seu navegador.

Digite o nome de uma cidade e clique no botão para buscar.

O aplicativo exibirá o clima da cidade, e o plano de fundo mudará para uma imagem da cidade.
