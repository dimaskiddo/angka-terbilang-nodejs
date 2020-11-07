const angka = require("..");

test('belasan', () => {
  expect(angka.toTerbilang('11000')).toBe("sebelas ribu");
  expect(angka.toTerbilang('10000')).toBe("sepuluh ribu");
  expect(angka.toTerbilang('11001')).toBe("sebelas ribu satu");
  expect(angka.toTerbilang('11011')).toBe("sebelas ribu sebelas");
  expect(angka.toTerbilang('1011021')).toBe("satu juta sebelas ribu dua puluh satu");
  expect(angka.toTerbilang('190118')).toBe("seratus sembilan puluh ribu seratus delapan belas");
  expect(angka.toTerbilang('16915')).toBe("enam belas ribu sembilan ratus lima belas");
  expect(angka.toTerbilang('1017911')).toBe("satu juta tujuh belas ribu sembilan ratus sebelas");
  expect(angka.toTerbilang('110011')).toBe("seratus sepuluh ribu sebelas");
});

test('jutaan', () => {
  expect(angka.toTerbilang('1000000')).toBe("satu juta");
  expect(angka.toTerbilang('1001000')).toBe("satu juta seribu");
  expect(angka.toTerbilang('1011000')).toBe("satu juta sebelas ribu");
  expect(angka.toTerbilang('131021111')).toBe("seratus tiga puluh satu juta dua puluh satu ribu seratus sebelas");
  expect(angka.toTerbilang('11021111')).toBe("sebelas juta dua puluh satu ribu seratus sebelas");
  expect(angka.toTerbilang('212121212')).toBe("dua ratus dua belas juta seratus dua puluh satu ribu dua ratus dua belas");
  expect(angka.toTerbilang('121212121')).toBe("seratus dua puluh satu juta dua ratus dua belas ribu seratus dua puluh satu");
});

test('big-number', () => {
  expect(angka.toTerbilang('1000000001000000001')).toBe("satu quintiliun satu milyar satu");
  expect(angka.toTerbilang('1000200001000000001')).toBe("satu quintiliun dua ratus triliun satu milyar satu");
  expect(angka.toTerbilang('9885888242291758493761')).toBe("sembilan sextiliun delapan ratus delapan puluh lima quintiliun delapan ratus delapan puluh delapan quadriliun dua ratus empat puluh dua triliun dua ratus sembilan puluh satu milyar tujuh ratus lima puluh delapan juta empat ratus sembilan puluh tiga ribu tujuh ratus enam puluh satu");
  expect(angka.toTerbilang('700960052123456600111229373574356912338626529885888242291758493761')).toBe("tujuh ratus vigintiliun sembilan ratus enam puluh novemdesiliun lima puluh dua oktodesiliun seratus dua puluh tiga septendesiliun empat ratus lima puluh enam sexdesiliun enam ratus quindesiliun seratus sebelas quattuordesiliun dua ratus dua puluh sembilan tredesiliun tiga ratus tujuh puluh tiga duodesiliun lima ratus tujuh puluh empat undesiliun tiga ratus lima puluh enam desiliun sembilan ratus dua belas noniliun tiga ratus tiga puluh delapan oktiliun enam ratus dua puluh enam septiliun lima ratus dua puluh sembilan sextiliun delapan ratus delapan puluh lima quintiliun delapan ratus delapan puluh delapan quadriliun dua ratus empat puluh dua triliun dua ratus sembilan puluh satu milyar tujuh ratus lima puluh delapan juta empat ratus sembilan puluh tiga ribu tujuh ratus enam puluh satu");
  expect(angka.toTerbilang('70096005212345660011122937357435691233862652988588824229175849376100')).toBe("tujuh puluh ribu sembilan puluh enam vigintiliun lima novemdesiliun dua ratus dua belas oktodesiliun tiga ratus empat puluh lima septendesiliun enam ratus enam puluh sexdesiliun sebelas quindesiliun seratus dua puluh dua quattuordesiliun sembilan ratus tiga puluh tujuh tredesiliun tiga ratus lima puluh tujuh duodesiliun empat ratus tiga puluh lima undesiliun enam ratus sembilan puluh satu desiliun dua ratus tiga puluh tiga noniliun delapan ratus enam puluh dua oktiliun enam ratus lima puluh dua septiliun sembilan ratus delapan puluh delapan sextiliun lima ratus delapan puluh delapan quintiliun delapan ratus dua puluh empat quadriliun dua ratus dua puluh sembilan triliun seratus tujuh puluh lima milyar delapan ratus empat puluh sembilan juta tiga ratus tujuh puluh enam ribu seratus");
  expect(angka.toTerbilang('7009600521234566001112293735743569123386265298858882422917584937610000')).toBe("tujuh juta sembilan ribu enam ratus vigintiliun lima ratus dua puluh satu novemdesiliun dua ratus tiga puluh empat oktodesiliun lima ratus enam puluh enam septendesiliun satu sexdesiliun seratus dua belas quindesiliun dua ratus sembilan puluh tiga quattuordesiliun tujuh ratus tiga puluh lima tredesiliun tujuh ratus empat puluh tiga duodesiliun lima ratus enam puluh sembilan undesiliun seratus dua puluh tiga desiliun tiga ratus delapan puluh enam noniliun dua ratus enam puluh lima oktiliun dua ratus sembilan puluh delapan septiliun delapan ratus lima puluh delapan sextiliun delapan ratus delapan puluh dua quintiliun empat ratus dua puluh dua quadriliun sembilan ratus tujuh belas triliun lima ratus delapan puluh empat milyar sembilan ratus tiga puluh tujuh juta enam ratus sepuluh ribu");
  expect(angka.toTerbilang('700960052123456600111229373574356912338626529885888242291758493761000010')).toBe("tujuh ratus juta sembilan ratus enam puluh ribu lima puluh dua vigintiliun seratus dua puluh tiga novemdesiliun empat ratus lima puluh enam oktodesiliun enam ratus septendesiliun seratus sebelas sexdesiliun dua ratus dua puluh sembilan quindesiliun tiga ratus tujuh puluh tiga quattuordesiliun lima ratus tujuh puluh empat tredesiliun tiga ratus lima puluh enam duodesiliun sembilan ratus dua belas undesiliun tiga ratus tiga puluh delapan desiliun enam ratus dua puluh enam noniliun lima ratus dua puluh sembilan oktiliun delapan ratus delapan puluh lima septiliun delapan ratus delapan puluh delapan sextiliun dua ratus empat puluh dua quintiliun dua ratus sembilan puluh satu quadriliun tujuh ratus lima puluh delapan triliun empat ratus sembilan puluh tiga milyar tujuh ratus enam puluh satu juta sepuluh");
});

test('all-zero', () => {
  expect(angka.toTerbilang('1')).toBe("satu");
  expect(angka.toTerbilang('10')).toBe("sepuluh");
  expect(angka.toTerbilang('100')).toBe("seratus");
  expect(angka.toTerbilang('1000')).toBe("seribu");
  expect(angka.toTerbilang('10000')).toBe("sepuluh ribu");
  expect(angka.toTerbilang('100000')).toBe("seratus ribu");
  expect(angka.toTerbilang('1000000')).toBe("satu juta");
  expect(angka.toTerbilang('10000000')).toBe("sepuluh juta");
  expect(angka.toTerbilang('100000000')).toBe("seratus juta");
  expect(angka.toTerbilang('1000000000')).toBe("satu milyar");
  expect(angka.toTerbilang('10000000000')).toBe("sepuluh milyar");
  expect(angka.toTerbilang('100000000000')).toBe("seratus milyar");
  expect(angka.toTerbilang('1000000000000')).toBe("satu triliun");
  expect(angka.toTerbilang('10000000000000')).toBe("sepuluh triliun");
  expect(angka.toTerbilang('100000000000000')).toBe("seratus triliun");
  expect(angka.toTerbilang('1000000000000000')).toBe("satu quadriliun");
  expect(angka.toTerbilang('10000000000000000')).toBe("sepuluh quadriliun");
  expect(angka.toTerbilang('100000000000000000')).toBe("seratus quadriliun");
  expect(angka.toTerbilang('1000000000000000000')).toBe("satu quintiliun");
  expect(angka.toTerbilang('10000000000000000000')).toBe("sepuluh quintiliun");
  expect(angka.toTerbilang('100000000000000000000')).toBe("seratus quintiliun");
  expect(angka.toTerbilang('1000000000000000000000')).toBe("satu sextiliun");
  expect(angka.toTerbilang('10000000000000000000000')).toBe("sepuluh sextiliun");
  expect(angka.toTerbilang('100000000000000000000000')).toBe("seratus sextiliun");
  expect(angka.toTerbilang('1000000000000000000000000')).toBe("satu septiliun");
  expect(angka.toTerbilang('10000000000000000000000000')).toBe("sepuluh septiliun");
  expect(angka.toTerbilang('100000000000000000000000000')).toBe("seratus septiliun");
  expect(angka.toTerbilang('1000000000000000000000000000')).toBe("satu oktiliun");
  expect(angka.toTerbilang('10000000000000000000000000000')).toBe("sepuluh oktiliun");
  expect(angka.toTerbilang('100000000000000000000000000000')).toBe("seratus oktiliun");
});
