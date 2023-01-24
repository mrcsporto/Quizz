// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    question: "A APCD/ABCD em parceria com a Qualicorp Benefícios oferta aos seus associados:",
    answer: "Planos de Saúde com condições especiais de preço e carência",
    options: [
      "Planos de Saúde com condições especiais de preço e carência",
      "Seguros de vida",
      "Seguro residencial",
      "Seguro de veicular",
    ]
  },
  {
    question: "Você sabia que a APCD/ABCD possui parceria com a bilheteria.com. Com isso os associados possuem descontos em:",
    answer: "Todas as alternativas estão corretas",
    options: [
      " Peças de Teatro",
      "Cinema",
      "Parques",
      "Todas as alternativas estão corretas",
    ]
  },
  {
    question: "A APCD/ABCD oferta aos seus associados de forma gratuita:",
    answer: "Seguro de Responsabilidade Civil",
    options: [
      "Seguro de Responsabilidade Civil",
      "Ingressos para GP de Formula 1",
      "Ingressos para Cinema",
      "Todas as alternativas estão corretas",
    ]
  },
  {
    question: "Você sabia que a Canon  oferta até 30% de desconto os associados da APCD/ABCD para aquisição de:",
    answer: "Câmeras fotográficas e periféricos",
    options: [
      "Câmeras fotográficas e periféricos",
      "Equipamentos odontológicos",
      "Ingressos para circo",
      "Pipoca no CIOSP",
    ]
  },
  {
    question: "O(a) associado(a) APCD/ABCD possui desconto em diversas farmácias. Em quais farmácias os associados da APCD/ABCD possuem descontos?",
    answer: "Todas as alternativas estão corretas",
    options: [
      "Drogaria São Paulo e Drogaria Pacheco",
      "Droga Raia",
      "Drogasil",
      "",
    ]
  },
  {
    question: "A GPNC Seguradora, parceira da APCD/ABCD, oferta quais seguros aos associados com condições especiais:",
    answer: "Todas as alternativas estão correta",
    options: [
      "Seguro de Vida",
      "Seguro de Perda de Renda",
      "Seguro de Automóveis",
      "Todas as alternativas estão corretas",
    ]
  },


];


let shuffledQuestion = questions
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

shuffledQuestion = shuffledQuestion.map(function (item) {
  item.options.sort(function () {
    return 0.5 - Math.random();
  });
  return item;
});

console.log(shuffledQuestion)