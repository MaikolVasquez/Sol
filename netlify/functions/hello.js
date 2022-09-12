exports.handler = async (event, context) => {
  const data = fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    return data
  });

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  };