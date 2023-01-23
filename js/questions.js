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

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
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