const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? O que eu poderia fazer para melhorar?',
  'O que me deixou feliz?',
  'Quantas pessoas eu ajudei hoje?'
]

const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + ' > ') // saída de dados como resultado
}

ask()
const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit() // parar o processo
  }
})

process.on('exit', () => {
  console.log(`
  "Bacana Atila!
  
  que você aprendeu hoje foi:
  ${answers[0]}
  
  O que te aborreceu e oque você poderia melhorar foi:
  ${answers[1]}
  
  O que te deixou feliz:
  ${answers[2]}

  Você ajudou ${answers[3]} pessoa(s) hoje!!

  Volte amanhã para novas reflexões!!
  "`)
})
