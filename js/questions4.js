// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    question: "Relacionado ao Seguro de Responsabilidade Civil, o(a) associado(a) que tiver conhecimento ou expectativa de sinistro deverá",
    answer: "Comunicar imediatamente a seguradora",
    options: [
      "Comunicar imediatamente a seguradora",
      "Comunicar após a condenação judicial",
      "Comunicar após 30 dias do evento",
      "Nenhuma alternativa correta",
    ]
  },
  {
    question: "A falta de pagamento da taxa associativa da APCD/ABCD acarretará ao(à) associado(a):",
    answer: "Desligamento do quadro associativo e perda do seguro de responsabilidade civil",
    options: [
      "Desligamento do quadro associativo e perda do seguro de responsabilidade civil",
      "Apenas a perda do seguro de responsabilidade civil",
      "Apenas o desligamento do quadro associativo",
      "Nenhuma alternativa correta",
    ]
  },
  {
    question: "Você sabia que a SPDATA em parceria com a APCD/ABCD, desenvolvel um programa de gestão para consultórios e clínica por R$ 49,90 ao mês durante o CIOSP, com certificado digital incluso? Com esse programa o(a) profissional poderá:",
    answer: "Prescrever medicamento e atestar na forma digital",
    options: [
      "Prescrever medicamento e atestar na forma digital",
      "Consultar restaurantes e cinemas",
      "Ler noticia esportivas",
      "Nenhuma alternativa correta ",
    ]
  },
  {
    question: "Assinale a alternativa corresponde a um benefício da APCD/ABCD:",
    answer: "Todas alternativas estão corretas",
    options: [
      "Desconto em petshop",
      "Desconto em plano de saúde para pet",
      "Desconto em Escolas de Idioma",
      "Todas alternativas estão corretas",
    ]
  },
  {
    question: "O seguro de responsabilidade civil, beneficio gratuito ofertado pela APCD/ABCD, visa dar maior segurança ao profissional no:",
    answer: "Exercício da Profissão Odontológica",
    options: [
      "Exercício da Profissão Odontológica",
      "Exercício das suas atividades esportivas",
      "Churrasco em família",
      "Nenhuma alternativa correta",
    ]
  },
  {
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      "",
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