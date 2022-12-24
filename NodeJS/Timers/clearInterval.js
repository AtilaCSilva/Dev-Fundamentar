// IráS cancelar o setInterval
const timeOut = 1000
const checking = () => console.log('checking!')

let cancel = setInterval(checking, timeOut)

setTimeout(() => {
  clearInterval(cancel)
}, 10000)
