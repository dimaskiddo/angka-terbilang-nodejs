# NodeJS package for Converting Decimal to an Indonesian Wording format

This package will help you to convert a decimal to an Indonesian wording format, for example `123` will be converted to `seratus dua puluh tiga`. This package was inspired from [develoka/angka-terbilang-js](https://github.com/develoka/angka-terbilang-js) by [Develoka Team](https://github.com/develoka).

## Getting Started

These instructions will get you this package can be used in your project.

### Prerequisites

Prequisites Packages:
* NodeJS (NodeJS Programming Language)

### Using This Package

Below is the instructions to use this package:
* Install this package to your project
```sh
npm install --save @dimaskiddo/angka-terbilang-nodejs
```
* Import this package to your code
```js
...
const angka = require('@dimaskiddo/angka-terbilang-nodejs')
...
```
* Use ToTerbilang function to convert your decimal string
```js
...
console.log(angka.toTerbilang('123'))
...
```

### Example Usage of Package

Below is the simple example source code:
```js
const angka = require('@dimaskiddo/angka-terbilang-nodejs')
console.log(angka.toTerbilang('123'))
```

### Example Usage for in Browser Javascript

Below is the example of using for in Browser Javascript:
```html
<script src="https://unpkg.com/@dimaskiddo/angka-terbilang-nodejs@latest/index.min.js"></script>
console.log(angka.toTerbilang('123'))
```

## Development

### Editing

* Clone this repository in to your local computer
```sh
git clone -b master https://github.com/dimaskiddo/angka-terbilang-nodejs.git
```
* Edit `index.js` file in the root of cloned repository directory

### Running The Tests

To run the test you can run the following command

```sh
npm run test
```

### Rebuilding

After editing you also need to rebuild the minified and browser javascript version by running the following command

```sh
npm run minified
```

Or you can run the full build with the test with following command

```sh
npm run build
```

## Benchmarking

Benchmark is done with four (4) other packages that has the same function. It's done by converting a decimal number with units hundreds of thousands, hundreds of millions, hundreds of billions, hundreds of trillions.

Benchmark tools are provided by [Develoka Team](https://github.com/develoka)

### Benchmark Results

Benchmark @ November 8th 2020 14:55
| Package                                  | Angka Ratusan Ribu | Angka Ratusan Juta | Angka Ratusan Milyar | Angka Ratusan Triliun |
| ---------------------------------------- | ------------------ | ------------------ | -------------------- | --------------------- |
| [@dimaskiddo/angka-terbilang-nodejs](https://github.com/dimaskiddo/angka-terbilang-nodejs) | 2,836,662 ops/sec  | 2,029,144 ops/sec  | 1,386,470 ops/sec    | 1,095,911 ops/sec     |
| [@develoka/angka-terbilang-js](https://github.com/develoka/angka-terbilang-js) | 2,385,251 ops/sec  | 1,832,777 ops/sec  | 1,371,450 ops/sec    | 1,085,423 ops/sec     |
| [dikyarga/angka-menjadi-terbilang](https://github.com/dikyarga/angka-menjadi-terbilang) | 113,920 ops/sec    | 97,849 ops/sec     | 85,656 ops/sec       | 75,029 ops/sec        |
| [BosNaufal/terbilang-js](https://github.com/BosNaufal/terbilang-js) | 194,925 ops/sec    | 133,416 ops/sec    | 76,289 ops/sec       | 47,955 ops/sec        |
| [rimara14/terbilang](https://github.com/rimara14/terbilang) | 532,279 ops/sec    | 312,694 ops/sec    | 188,072 ops/sec      | 2,504,031 ops/sec     |

### Benchmark Device

```
Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz
CPU: 2 Core with Hypterthreading (4 vCPU)
RAM: 8 GB
Disk Type: SSD

Operating System: MacOS High Sierra 10.13.6
NodeJS: 10.18.0
```

### Benchmark Notes

The result might be different depending on Bechmark Device that used to run

## Built With

* [NodeJS](https://nodejs.org/) - NodeJS Programming Languange

## Authors

* **Dimas Restu Hidayanto** - *Initial Work* - [DimasKiddo](https://github.com/dimaskiddo)
* **R. M. Dwi Rizki** - *Fungsional Test and Benchmarking* - [rmdwirizki](https://github.com/rmdwirizki)

See also the list of [contributors](https://github.com/dimaskiddo/angka-terbilang-nodejs/contributors) who participated in this project

```