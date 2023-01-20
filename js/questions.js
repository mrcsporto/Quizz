// creating an array and passing the number, questions, options, and answers
let questions = [
    {
   
    question: "Qual o menor país do mundo?",
    answer: "Vaticano",
    options: [
      "Vaticano",
      "China",
      "Mônaco",
      "Malta",
    ]
  },
    {
   
    question: "Quantas casas decimais tem o número pi?",
    answer: "Infinitas",
    options: [
      "Infinitas",
      "Duas",
      "Cem",
      "Milhares",
    ]
  },
    {
    
    question: "Em qual local da Ásia o português é língua oficial?",
    answer: "Macau",
    options: [
      "Macau",
      "Timor Leste",
      "Singapura",
      "Brunei",
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

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
   
console.log(shuffledQuestion) 


