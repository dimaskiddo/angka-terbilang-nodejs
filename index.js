// Definisi Array Angka dan Satuan
const arrAngka =  ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
const arrSatuan = ['', 'ribu', 'juta', 'milyar', 'triliun', 'quadriliun', 'quintiliun', 'sextiliun', 'septiliun', 'oktiliun', 'noniliun', 'desiliun', 'undesiliun', 'duodesiliun', 'tredesiliun', 'quattuordesiliun', 'quindesiliun', 'sexdesiliun', 'septendesiliun', 'oktodesiliun', 'novemdesiliun', 'vigintiliun']

// toTerbilang Function
function toTerbilang(angka) {
  // Definisi Variabel Hasil Konversi Terbilang
  let resTerbilang = ''

  // Trim Inputan Angka
	// dan Cari Panjang Angka String
  let strAngka = String(angka).trim()
  let lenAngka = strAngka.length - 1

  // Loop Angka String dan Konversi
  for (let i=0; i <= lenAngka; i++) {
    // Cari Posisi Digit
    let posDigit = lenAngka - i
    let grpDigit = posDigit % 3

    // Konversi Angka String ke Angka Int
    let intAngka = Number(strAngka[i])

    // Konversi Angka ke Bilangan
    switch (intAngka) {
      case 1:
        switch (grpDigit) {
          case 2:
            // Proses Ratusan
            resTerbilang += 'seratus '
            break

          case 1:
            // Konversi Angka String Selanjutnya ke Angka Int Selanjutnya
            let nextIntAngka = Number(strAngka[i+1])

            switch (nextIntAngka) {
              case 1:
                // Proses Sebelas
                resTerbilang += 'sebelas '
                break

              case 0:
                // Proses Sepuluh
                resTerbilang += 'sepuluh '
                break

              default:
                // Proses Belasan
                resTerbilang += arrAngka[nextIntAngka] + ' belas '
                break
            }

            // Skip Angka Selanjutnya
            i++

            // Cari Ulang Posisi Digit
            posDigit--
            grpDigit--
            break

          case 0:
            if (i == lenAngka || lenAngka > 4) {
              // Proses Satu
              resTerbilang += arrAngka[intAngka] + ' '
            } else {
              // Proses Seribu
              resTerbilang += 'seribu '
              continue
            }
        }
        break

      case 0:
        if (i == lenAngka && lenAngka == 0) {
          // Proses Nol
          return 'nol'
        }
        continue
      
      default:
        // Proses Angka
        resTerbilang += arrAngka[intAngka] + ' '

        switch (grpDigit) {
          case 2:
            // Proses Ratusan
            resTerbilang += 'ratus '
            break

          case 1:
            // Proses Puluhan
            resTerbilang += 'puluh '
            break
        }
        break
    }

    // Proses Satuan
    if (grpDigit == 0) {
      resTerbilang += arrSatuan[posDigit/3] + ' '
    }
  }

  // Trim Hasil Konversi dan Return
  return resTerbilang.trim()
}

module.exports = {
  toTerbilang
}