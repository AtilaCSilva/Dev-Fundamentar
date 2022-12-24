const getFlagsResult = require('./exportFunction')

console.log(`Oi ${getFlagsResult('--name')}, ${getFlagsResult('--greeting')}`)
