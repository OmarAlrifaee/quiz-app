export const data = [];
const mainData = [
  {
    qusition: "what is the must used programming language in 2023",
    answers: [
      { text: "java script", isTrue: true, id: 1 },
      { text: "php", isTrue: false, id: 2 },
      { text: "python", isTrue: false, id: 3 },
      { text: "rust", isTrue: false, id: 4 },
    ],
  },
  {
    qusition:
      "one of the the folowing frameworks use python as its main language",
    answers: [
      { text: ".net", isTrue: false, id: 1 },
      { text: "django", isTrue: true, id: 2 },
      { text: "react", isTrue: false, id: 3 },
      { text: "lavavel", isTrue: false, id: 4 },
    ],
  },
  {
    qusition: "what is the must used programming language in backEnd stack",
    answers: [
      { text: "dart", isTrue: false, id: 1 },
      { text: "java", isTrue: false, id: 2 },
      { text: "python", isTrue: false, id: 3 },
      { text: "php", isTrue: true, id: 4 },
    ],
  },
  {
    qusition: "what is the must used framework in frontEnd stack",
    answers: [
      { text: "angular", isTrue: false, id: 1 },
      { text: "vue", isTrue: false, id: 2 },
      { text: "astro", isTrue: false, id: 3 },
      { text: "react", isTrue: true, id: 4 },
    ],
  },
  {
    qusition: "choose the slowest programming language in the folowing answers",
    answers: [
      { text: "python", isTrue: true, id: 1 },
      { text: "c++", isTrue: false, id: 2 },
      { text: "c#", isTrue: false, id: 3 },
      { text: "mySql", isTrue: false, id: 4 },
    ],
  },
  {
    qusition: "one of the folowing answers is not a programming language",
    answers: [
      { text: "java script", isTrue: false, id: 1 },
      { text: "c++", isTrue: false, id: 2 },
      { text: "html", isTrue: true, id: 3 },
      { text: "python", isTrue: false, id: 4 },
    ],
  },
  {
    qusition: "a library in react used to navigate between the pages",
    answers: [
      { text: "react quiry", isTrue: false, id: 1 },
      { text: "react", isTrue: false, id: 2 },
      { text: "react router", isTrue: true, id: 3 },
      { text: "react redux", isTrue: false, id: 4 },
    ],
  },
];

// loop on the mainData array and get a random element and push it to the data array
while (mainData.length) {
  let randomNum = Math.floor(Math.random() * mainData.length);
  let randomEle = mainData[randomNum];
  // remove the element from the mainData array so it does'nt repeat
  mainData.splice(randomNum, 1);
  // push the ele to data array
  data.push(randomEle);
}
