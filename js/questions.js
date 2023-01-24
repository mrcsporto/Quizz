// creating an array and passing the number, questions, options, and answers
let questions = [
    {
   
    question: "Qual seguro, ofertado de forma gratuita pela APCD/ABCD aos seus associados, visa indenizar o paciente em razão de um ato praticado pelo(a) cirurgião(ã)-dentista?",
    answer: "Seguro de Responsabilidade Civil",
    options: [
      "Seguro de Perda de Renda",
      "Seguro de Responsabilidade Civil",
      "Seguro de Consultório",
      "Seguro de Vida",
    ]
  },
    {
   
    question: "Qual benefício gratuito o(a) herdeiro(a) do(a) associado(a) da APCD/ABCD possui em caso de falecimento do(a) associado(a)?",
    answer: "Pecúlio por Morte",
    options: [
      "Pensão por Morte",
      "Pecúlio por Morte",
      "Auxílio-Doença",
      "Auxílio-Acidente",
    ]
  },
    {
    
    question: "A APCD criou um FAQ com conteúdos de orientação aos profissionais da odontologia. Ele é exclusivo para os associados da APCD/ABCD. Para ter acesso é preciso:",
    answer: "Acessar o portal do associado da APCD",
    options: [
      "Acessar o portal do associado da APCD",
      "Acessar o site do CFO",
      "Acessar o site da FAOA",
      "Nenhuma alternativa correta",
    ]
  },
    {
    
    question: "Assinale a alternativa que contém um benefício ofertado pelos parceiros da APCD/ABCD?",
    answer: "Todas as alternativas contêm um benefício ofertado pelos parceiros da APCD/ABCD",
    options: [
      "Seguro de Responsabilidade Civil Gratuito",
      "Pecúlio por Morte Gratuito",
      "Desconto nos cursos da FAOA",
      "Todas as alternativas contêm um benefício ofertado pelos parceiros da APCD/ABCD",
    ]
  },
    {
    
    question: "Você sabia que o Dr. Pet, parceiro da APCD/ABCD, oferta 25% de desconto para os associados na aquisição de:",
    answer: "Plano de saúde para cães e gatos ",
    options: [
      "Plano de saúde para cães e gatos ",
      "Produtos de beleza",
      "Ingressos de Cinema",
      "Ingressos para Teatro",
    ]
  },
    {
    
    question: "Você sabia que a revista da APCD é composta por diversos artigos científicos? Atualmente ela é exclusiva para:",
    answer: "Todos os associados da APCD/ABCD",
    options: [
      "Todos os associados da APCD/ABCD",
      "Todos os inscritos no CROSP",
      "Qualquer pessoa",
      "Todas as alternativas estão corretas",
    ]
  },
];


let shuffledQuestion = questions
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
shuffledQuestion = shuffledQuestion.map(function(item) {
  item.options.sort(function() {
      return 0.5 - Math.random();
  });
  return item;
});

console.log(shuffledQuestion)