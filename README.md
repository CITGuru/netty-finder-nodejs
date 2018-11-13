# NettyFinder :rocket:

This is a nodejs verison of the original [netty-finder](https://github.com/BolajiAyodeji/netty-finder) that was written in JavaScript

# Installation

## GitHub

```bash
$ git clone https://github.com/CITGuru/netty-finder-nodejs.git
$ cd netty-finder-nodejs
$ npm install
```

## NPM

```bash
$ npm install netty_finder
```

# Usage

```js

const Network = require('netty_finder')

let detector = new Network("08155737518"),
network = detector.getNetworkName()

console.log(network)

$>>s 9mobile

```

# About Author

This was originally built by [Bolaji Ayodeji](https://github.com/BolajiAyodeji) so all rights goes to him, I only interpreted the javascript code to es6 and package to npm

# Contribution
 
For now, I dont accept contributions except its from the javascript [netty_finder](https://github.com/BolajiAyodeji/netty-finder), so I suggest you contribute there. Any changes from there will be added to the python version


