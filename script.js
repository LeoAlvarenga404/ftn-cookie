// variáveis

let listOfPhrases = ['Não ser amado é falta de sorte, mas não amar é a própria infelicidade.','A perseverança é a mãe da boa sorte.', 'Hoje é um novo dia. Não fique pensando no ontem.', 'Não há a necessidade de caminhar rápido. Apenas siga caminhando.', 'Respeite seu corpo e trate com carinho a sua mente.', 'Algumas coisas ruins acontecem para aprendermos a ficar mais fortes.', 'Nunca é tarde para fazer o que ainda movimenta os seus sonhos.', 'A única forma de chegar ao impossível é acreditar que é possível.', 'Mudar é bom! Aprenda a se redescobrir.', 'Seja um borboleta e passe por uma bela metamorfose!', 'Você já fez uma caminhada tão bonita até agora. Parabenize-se.', 'Faça as pazes com a vida e ande de mãos dadas com ela.', 'Ter sucesso é estar em paz com as nossas escolhas.']

let frases = document.querySelector('.frase')

const firstPage = document.querySelector('.first-page')

const secondPage = document.querySelector('.second-page')

const openCookie = document.querySelector('.open-cookie')

const button = document.querySelector('button')

let randomPhrase = Math.round(Math.random() * 10)

// funções 
openCookie.addEventListener('click', function changePage() {
  firstPage.classList.add('hidden')
  frases.innerText = `${listOfPhrases[randomPhrase]}`
  secondPage.classList.remove('hidden')
} )

button.addEventListener('click', function newChangePage() {
  firstPage.classList.remove('hidden')
  secondPage.classList.add('hidden')
  randomPhrase = Math.round(Math.random() * 10)
})

