require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict roast fortune street name return pitch proud hunt kitten bottom gather'; 
let testAccounts = [
"0xadfe091613c4fc4e4d5f83d21732ecb232aaddcba0b1bfd18890eda14137c15e",
"0xfbe032155f6985c571f2ed7d77ac560f09b81eec04d36ee9a9d40b02507aa29e",
"0x79ff6d31882b0fac59b4010a08982724c322785d0b5b13eb86e991c0170be2a1",
"0x9306120ca61f003366f50366dac85191330c747a895755cbb0b37eb218e7b91f",
"0x6541c210b09919971471d6fb59dcf2036fb89cc8254ddb4383594c069ba4171a",
"0x953e0ffdaa853dcedbf1ea0289f346b16a9e93f91da3b99f91e4fb737959a020",
"0xdff029dd82bafac572f71d28434b5e7d0c650ea5b6e74f07a26e51b1cba8fa77",
"0x1458bd615274c3bbacc77194ab9c778a41c5b46f482869214bbc447ac0820676",
"0x7c5682c6f927ac25454c99775fd3a0e50ba53067a666025a16e1500108d1eb4e",
"0x8928da3b17bc2df70d0098f864ed583f424cae345ea8f3d16903dbb386067c9a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

