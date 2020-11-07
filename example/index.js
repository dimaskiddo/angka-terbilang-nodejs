const angka = require('..')
const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Angka Terbilang in NodeJS')
console.log('---------------------------')

reader.question("Masukan Angka: ", function(input) {
  console.log(angka.toTerbilang(input))
  process.exit(0)
})
