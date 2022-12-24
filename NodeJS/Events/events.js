const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', message => {
  console.log('Eu ouvi você', message)
})

ev.emit('saySomething', 'Atila')
ev.emit('saySomething', 'Camila')
ev.emit('saySomething', 'Laura')
ev.emit('saySomething', 'Nathally')
ev.emit('saySomething', 'Jorge')
