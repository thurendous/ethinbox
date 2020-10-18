const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require('./compile');


const provider = new HDWalletProvider(
    '',
    ''
);

const web3 = new Web3(provider);
//如此一来就解锁了这个账户了，我们使用这个解锁的账户创造了一个provider提供给我们使用，提供了我们需要的eth，提供了我们需要的API。我们就使用这个provider来链接我们的rinkeby网络把。

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to', result.options.address);
};
deploy();



