const button = document.querySelector('button');
let resultdiv = document.createElement('div');
  resultdiv.id = "result";
  document.getElementById("wrapper").appendChild(resultdiv);

// Event listener
button.addEventListener('click', displayStats);

function displayStats() {
  const input = document.getElementById("input");
  const city = input.options[input.selectedIndex].value;

  let population = 0;
  let literacy = 0;
  let language = '';

  switch (city) {
    case 'Bengaluru':
      population = 100;
      language = 'English';
      literacy = 90;
      break;
    case 'Chennai':
      population = 1000;
      language = 'Tamil';
      literacy = 80;
      break;
    case 'Coimbatore':
      population = 10000;
      language = 'Tamil';
      literacy = 70;
      break;
    case 'Trichy':
      population = 1500;
      language = 'Tamil';
      literacy = 60;
      break;
  }

  let msg = `The city name is ${city} and has a population of ${population} and language is  ${language} `;
  console.log(msg);

  let text = `The city name is ${city} and has a population of ${population} and language is  ${language} `;
  
  document.getElementById("result").innerHTML += text; // Use += to append
}
