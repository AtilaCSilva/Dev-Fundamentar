const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/Serviços de forma fácil'
    },

    {
      title: 'E',
      message: 'JS usa js para renderinzar html'
    },

    {
      title: 'M',
      message: 'uito fácil de usar'
    },

    {
      title: 'A',
      message: 'lém de ser muito utilizado por back-ends'
    },

    {
      title: 'I',
      message: 'nstall EJS'
    },

    {
      title: 'S',
      message: 'intax muito simples'
    }
  ]

  const subtitle =
    'Uma linguagem de modelagem para a criação de página HTML utilizando JS'

  res.render('pages/index', {
    qualitys: items,
    subtitle: subtitle
  })
})

app.get('/sobre', (req, res) => {
  res.render('pages/about')
})

app.get('/fontes', (req, res) => {
  res.render('pages/refers')
})

app.listen(8080)
console.log('servidor rodando')
