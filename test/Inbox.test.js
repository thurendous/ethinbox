const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
//这里使用的provider是我们使用的来链接ganache的情况下使用的。
// here we use Web3 only one time. Cuz we just want to 
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi there! "] })
        .send({ from: accounts[0], gas: "1000000" })


    // using the instance of Web3  如果参数是一个的箭头函数 x => x^2
    // 这里我们的web3可以和很多的数字货币互动，这里是使用的eth
    // use one of those accounts to deploy the contract
    // 我们调用的任何web3的方法都是天生异步的。也就是说这里是天生的Promise。

    // the contract



});

describe("Inbox", () => {
    it("deploys a contract", () => {
        console.log(accounts);
        console.log(inbox);

    })
})





