import fetch from "node-fetch";

const info = fetch("https://api.chucknorris.io/jokes/random")
.then(async response => response.json())
.then(data => {
  return data
});

exports.handler = async function (event, context) {
  const data =  { message:await info }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};