// clearTimeout vai cancelar o timeOut
const timeout = 3000
let timer = setTimeout(() => {
  console.log('done!')
}, timeout)

clearTimeout(timer)
