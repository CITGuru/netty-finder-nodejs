const Network = require('netty_finder')

let detector = new Network("08155737518"),
network = detector.getNetworkName()

console.log(network)