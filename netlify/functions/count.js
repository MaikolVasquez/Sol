exports.handler = function (event, context) {
    return {
      statusCode: 202,
      body: JSON.stringify({ message: "Hello World" }),
    };
  };