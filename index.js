// Definisi Array Angka dan Satuan
const arrAngka =  ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
const arrSatuan = ['', 'ribu', 'juta', 'milyar', 'triliun', 'quadriliun', 'quintiliun', 'sextiliun', 'septiliun', 'oktiliun', 'noniliun', 'desiliun', 'undesiliun', 'duodesiliun', 'tredesiliun', 'quattuordesiliun', 'quindesiliun', 'sexdesiliun', 'septendesiliun', 'oktodesiliun', 'novemdesiliun', 'vigintiliun']

// toTerbilang Function
function toTerbilang(strAngka) {
  // Jika Inputan Bukan Angka Maka Return Error
  if (isNaN(strAngka)) {
    return 'Error, input is not a valid number!'
  }

  // Cari Panjang Angka String
  const lenAngka = strAngka.length - 1

  // Jika Panjang Angka Nol dan Angka Pertama adalah Nol Maka Proses Nol
  if (lenAngka === 0 && Number(strAngka[0]) === 0) {
    return 'nol'
  }

  // Jika Angka Over dari Satuan Maka Return Error
  if ((lenAngka / 3) > arrSatuan.length) {
    return "Error, number is to big!"
  }

  // Set Variabel Hasil Konversi
  let resTerbilang = ''

  // Set Penghitung Nol
  let cntZero = 0

  // Loop Angka String dan Konversi
  for (let i=0; i <= lenAngka; i++) {
    // Set Variable Sementara Hasil Konversi
    let tmpTerbilang = ''

    // Cari Posisi Digit
    let posDigit = lenAngka - i
    let grpDigit = posDigit % 3

    // Konversi Angka String ke Angka Integer
    let intAngka = Number(strAngka[i])

    // Konversi Angka ke Bilangan
    switch (intAngka) {
      case 1:
        switch (grpDigit) {
          case 2:
            // Proses Ratusan
            tmpTerbilang += 'seratus'
            break

          case 1:
            // Konversi Angka String Selanjutnya ke Angka Integer Selanjutnya
            let nextIntAngka = Number(strAngka[i+1])

            switch (nextIntAngka) {
              case 1:
                // Proses Sebelas
                tmpTerbilang += 'sebelas'
                break

              case 0:
                // Proses Sepuluh
                tmpTerbilang += 'sepuluh'
                break

              default:
                // Proses Belasan
                tmpTerbilang += arrAngka[nextIntAngka] + ' belas'
                break
            }

            // Skip Angka Selanjutnya
            i++

            // Cari Ulang Posisi Digit
            posDigit--
            grpDigit--
            break

          case 0:
            if ((intAngka === 1 && posDigit === 3) && (cntZero === 2 || lenAngka === 3)) {
              // Tambah Spasi
              if (resTerbilang !== '') {
                resTerbilang += ' '
              }

              // Proses Seribu
              resTerbilang += 'seribu'

              // Reset Penghitung Nol
              cntZero = 0
              continue
            } else {
              // Proses Satu
              tmpTerbilang += arrAngka[intAngka]
            }
        }
        break

      case 0:
        // Hitung Nol
        cntZero++
        break
      
      default:
        // Proses Angka
        tmpTerbilang += arrAngka[intAngka]

        switch (grpDigit) {
          case 2:
            // Proses Ratusan
            tmpTerbilang += ' ratus'
            break

          case 1:
            // Proses Puluhan
            tmpTerbilang += ' puluh'
            break
        }
        break
    }

    // Prepand Spasi
    if (tmpTerbilang !== '') {
      // Tambah Spasi      
      if (resTerbilang !== '') {
        resTerbilang += ' ' + tmpTerbilang
      } else {
        resTerbilang += tmpTerbilang
      }
    }

    // Cari Posisi Satuan
    let posSatuan = posDigit / 3

    // Konversi Satuan
    if (grpDigit === 0 && posSatuan !== 0) {
      if (cntZero !== 3) {
        // Proses Satuan
        resTerbilang += ' ' + arrSatuan[posSatuan]
      }

      // Reset Pneghitung Nol
      cntZero = 0
    }
  }
  
  // Trim Hasil Konversi dan Return
  return resTerbilang
}

module.exports = {
  toTerbilang
}
