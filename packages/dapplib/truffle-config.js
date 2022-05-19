require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember million gloom kite obscure siren'; 
let testAccounts = [
"0x2ddf018f25c52cfbaaabd212f3b74d71209af86877b34de3e7c4fd877c50f7e7",
"0x20c4cf62d25458db75ac609f6262144d29a34501a86c1f19db7fa6869869f590",
"0x657d46870a88574aa90be6305753dcef9dda837e09834e0a1a34401eb917e16c",
"0xd13e33a18e2fbc9f3163f81a314c44da684b26a26691dbf81296c70f308d66d1",
"0xd7fc2178242c8be7a5c442aaaa320c2d71d7a5ae16c880f3f6cdf89eff5b4891",
"0xd3c5f56d4fd1b9013f67291706cd60ae22f9ab6ec391d0d7bae2f140e88f9d57",
"0xe054502661e1f9cf5598d1b825b5f17449c732f7372db15953244fabe4ead5f4",
"0x445db4795e836d8b41f1ada4a89f045530159598c03bae039ce1dcc56f53fb67",
"0x74ec281676348f581579cbe299d80099f70f3e3339a85293f09a979412a89713",
"0x970276cbda80069cae198e20d7a0856cf5f2e42c966c489f96bbe4ea110dfe12"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


