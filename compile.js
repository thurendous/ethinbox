// require("./contract/inbox.sol"); this is bad
// we should import some standard module
// 这里我们导入path来写目录是因为我们要导入这个东西来是我们的目录表示可以跨平台。
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "inbox.sol");
// this is going to generate a path that points directly to the inbox.sol file.
const source = fs.readFileSync(inboxPath, "utf8");
// to read the content of the file.

// console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[":Inbox"];


// we define the compile part: 1 means the number of the contracts we are gonna compile.


