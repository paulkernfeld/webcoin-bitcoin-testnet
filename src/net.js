var magic = 0x0709110b
var defaultPort = 18333

var staticPeers = ['localhost']
var dnsSeeds = [
  'testnet-seed.bitcoin.petertodd.org',
  'testnet-seed.bluematt.me',
  'testnet-seed.bitcoin.schildbach.de'
]
var webSeeds = [
  'wss://us-west.seed.webcoin.io:8193',
  'wss://us-east.seed.webcoin.io:8193',
  'wss://eu.seed.webcoin.io:8193',
  'wss://asia.seed.webcoin.io:8193'
  // TODO: add more
]

module.exports = {
  magic,
  defaultPort,
  staticPeers,
  dnsSeeds,
  webSeeds
}
