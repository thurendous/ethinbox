const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const provider = ganache.provider();
const web3 = new Web3(provider);
//这里使用的provider是我们使用的来链接ganache的情况下使用的。
// here we use Web3 only one time. Cuz we just want to 
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;
const INITIAL_STRING = "Hi there! ";

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi there! "] })
        .send({ from: accounts[0], gas: "1000000" })

    inbox.setProvider(provider);


    // using the instance of Web3  如果参数是一个的箭头函数 x => x^2
    // 这里我们的web3可以和很多的数字货币互动，这里是使用的eth

    // 我们调用的任何web3的方法都是天生异步的。也就是说这里是天生的Promise。

    // the contract



});

describe("Inbox", () => {
    it("deploys a contract", () => {
        // console.log(accounts);
        // console.log(inbox);
        assert.ok(inbox.options.address);
        //这里的ok的作用是确保这里的value是存在的。而这里的option.address的意思是这个合约的地址所在。如果被部署到了以太坊上的话，那么就基本可以确定这个合约部署成功了。
    });
    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        //这里的inbox就是代表这个只能合约实例了。methods就是他的一个属性。
        assert.strictEqual(message, INITIAL_STRING);
    });
    it('can change the message ', async () => {
        // 这里首先是一个异步的操作，所以我们使用async
        // 然后这里使用的是await来操作异步操作，我们这里使用了一个合约的方法setmessage
        await inbox.methods.setMessage('Bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Bye');
    })
});





