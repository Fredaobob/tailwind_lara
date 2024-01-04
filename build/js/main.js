const listaDePalavras = [
    "laranja",
    "sol",
    "amor",
    "paz",
    "mochila",
    "abacaxi",
    "avião",
    "sapato",
    "submarino",
    "curvex",
    "abajur",
    "unha",
    "violino",
    "não",
    "telescópio",
    "verde",
    "microfone",
    "vidro",
    "privada",
    "papel",
    "touca",
    "creme",
    "flor"
  ];
  
  const formatosDePoema = [
    (s, a, adj, c) => `Ontem a noite, eu fiz um bolo, e comi com ${adj}, foi bem ${a}. Quero repetir quando eu estiver com ${c}.`,
    (s, a, adj, c) => `Num dia ensolarado, ${s} brilhava no céu. Era um momento de ${adj} e ${c}.`,
    (s, a, adj, c) => `Na calada da noite, uma ${s} apareceu. A cena era ${adj} e me fez lembrar de ${c}.`,
    (s, a, adj, c) => `Num campo vasto, corri descalço sobre ${s}. O sentimento era ${adj} e me transportou para ${c}.`,
    (s, a, adj, c) => `Ao som de uma melodia suave, dancei com ${s}. Foi uma experiência ${adj}, repleta de ${c}.`,
    (s, a, adj, c) => `Encontrei ${s} em meu caminho. Era ${adj} e me trouxe lembranças de ${c}.`,
    (s, a, adj, c) => `No silêncio da madrugada, contemplei ${s}. Sua presença era ${adj} e inspirou pensamentos de ${c}.`,
    (s, a, adj, c) => `Caminhei por um jardim, onde ${s} desabrochavam. A cena era ${adj} e me fez refletir sobre ${c}.`,
    (s, a, adj, c) => `Sob um céu estrelado, divaguei com ${s}. A sensação era ${adj}, repleta de pensamentos sobre ${c}.`,
    (s, a, adj, c) => `Em uma tarde tranquila, dividi uma xícara de chá com ${s}. O momento foi ${adj} e cheio de ${c}.`,
    (s, a, adj, c) => `No fundo do mar, mergulhei com ${s}. A experiência foi ${adj}, envolta em mistérios de ${c}.`,
    (s, a, adj, c) => `Ao vento suave, voei com ${s}. A liberdade era ${adj} e me levou a lembranças de ${c}.`,
    (s, a, adj, c) => `Entre as montanhas, encontrei ${s}. A vista era ${adj} e me levou a pensamentos de ${c}.`,
    (s, a, adj, c) => `Na primavera, caminhei entre ${s}. A cena era ${adj} e trouxe à mente memórias de ${c}.`,
    (s, a, adj, c) => `Sob a luz da lua, refleti com ${s}. O momento era ${adj} e evocou reflexões sobre ${c}.`,
    (s, a, adj, c) => `Entre ruas movimentadas, encontrei ${s}. A cidade era ${adj} e me conduziu a recordações de ${c}.`,
    (s, a, adj, c) => `No ápice da montanha, contemplei ${s}. A vista era ${adj} e despertou pensamentos sobre ${c}.`,
    (s, a, adj, c) => `Em um bosque tranquilo, meditei com ${s}. A serenidade era ${adj} e me guiou a reflexões sobre ${c}.`,
    (s, a, adj, c) => `Num campo de flores, dancei com ${s}. A alegria era ${adj} e preencheu meu coração de ${c}.`,
    (s, a, adj, c) => `Sob um arco-íris, sonhei com ${s}. A cena era ${adj} e me transportou para o mundo de ${c}.`
  ];
  
  function gerarPoema() {
    const formatoEscolhido = randomChoice(formatosDePoema);
    const poemaGerado = construirPoema(formatoEscolhido);
    document.getElementById("poemOutput").innerText = poemaGerado;
  }
  
  function construirPoema(formato) {
    const sujeito = randomChoice(listaDePalavras);
    const acao = randomChoice(listaDePalavras);
    const adjetivo = randomChoice(listaDePalavras);
    const complemento = randomChoice(listaDePalavras);
    return formato(sujeito, acao, adjetivo, complemento);
  }
  
  function randomChoice(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
  }
  
  // ... Seu código existente ...

function adicionarPalavra() {
  const novaPalavra = document.getElementById("wordInput").value;
  if (novaPalavra.trim() !== "") {
      listaDePalavras.push(novaPalavra);
      document.getElementById("wordInput").value = ""; // Limpa o campo de entrada
      alert(`Palavra "${novaPalavra}" adicionada com sucesso!`);
  } else {
      alert("Por favor, digite uma palavra válida.");
  }
}

document.getElementById("addWordBtn").addEventListener("click", adicionarPalavra);

// ... Seu código existente ...

  
  document.getElementById("poemContainer").addEventListener("click", gerarPoema);
  

  document.addEventListener("DOMContentLoaded", function() {
    var trilhaSonora = document.getElementById("trilhaSonora");

    // Define o volume desejado (0.5 neste exemplo)
    trilhaSonora.volume = 0.5;

    // Inicia a reprodução automaticamente
    trilhaSonora.play();
});
