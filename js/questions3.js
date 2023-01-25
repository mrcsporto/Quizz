// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    question: "A Consultiva Contabilidade oferta aos associados da APCD/ABCD valores diferenciados na contratação de:",
    answer: "Serviços contábeis e folha de pagamento",
    options: [
      "Serviços contábeis e folha de pagamento",
      "Assessoria Esportiva",
      "Assessoria Artística",
      "Nenhuma Alternativa Correta",
    ]
  },
  {
    question: "Para o(a) associado(a) ter acesso à revista da APCD, é preciso:",
    answer: "Acessar a área do associado da APCD",
    options: [
      "Acessar o site do CFO",
      "Acessar as redes sociais",
      "Acessar a área do associado da APCD",
      "Nenhuma alternativa correta",
    ]
  },
  {
    question: "A APCD/ABCD possui parceria com a Giuliana Flores e Cestas Michelli, onde os associados possuem descontos na aquisição de:",
    answer: "Flores e Cestas Especiais",
    options: [
      "Flores e Cestas Especiais",
      "Artigos Automotivos",
      "Artigos Esportivos",
      "Nenhuma alternativa correta",
    ]
  },
  {
    question: "Você sabia que os associados APCD/ABCD possuem descontos em lojas online de cosméticos, beleza e  perfumaria? Assinale a alternativa que contém esses parceiros:",
    answer: "L'Occitane, O Boticário, Sephora e Jequiti",
    options: [
      "L'Occitane, O Boticário, Sephora e Jequiti",
      "Shop Club Eletrolux, Trem de Histórias e Tricae",
      "Petz, Mobly e Under Armour",
      "Centauro e Giuliana Flores",
    ]
  },
  {
    question: "Você sabia que a APCD conta com Classificados? Nele os associados poderão anunciar:",
    answer: "Venda de equipamentos odontológicos e vagas de emprego",
    options: [
      "Venda de equipamentos odontológicos e vagas de emprego",
      "Venda de artigos esportivos",
      "Vagas de garagem em condomínio",
      "Nenhuma alternativa correta",
    ]
  },
  {
    question: "O(a) associado(a) que completa 65 anos e contribuiu na categoria sócio efetivo durante 360 meses, está isento do pagamento da taxa associativa. Qual a categoria deste(a) associado(a)?",
    answer: "Remido",
    options: [
      "Remido",
      "Efetivo",
      "Isento",
      "Aposentado",
    ]
  },
];


let shuffledQuestion = questions
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value).slice(0,3).sort(() => Math.random() - 0.5)
   
shuffledQuestion = shuffledQuestion.map(function(item) {
  item.options.sort(function() {
      return 0.5 - Math.random();
  });
  return item;
});

console.log(shuffledQuestion)