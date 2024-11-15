const { getLxLyClient, tokens, configuration, from } = require('./utils/utils_lxly');

const execute = async () => {
  const client = await getLxLyClient();
  const erc20Token = client.erc20(tokens[0].ether, 0);
  const result = await erc20Token.getBalance(from);
  console.log("result", result);
}

execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(_ => {
  process.exit(0);
});
