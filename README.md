# NodeJS package for Converting Decimal to an Indonesian Wording format

***This package is still in early development and might contain a bug***

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
<script src="https://unpkg.com/@dimaskiddo/angka-terbilang-nodejs/index.min.js"></script>
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
npm run build
```

## Built With

* [NodeJS](https://nodejs.org/) - NodeJS Programming Languange

## Authors

* **Dimas Restu Hidayanto** - *Initial Work* - [DimasKiddo](https://github.com/dimaskiddo)

See also the list of [contributors](https://github.com/dimaskiddo/angka-terbilang-nodejs/contributors) who participated in this project
