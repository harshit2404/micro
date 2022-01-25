async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from harry' }),
  };
}

export const handler = hello;


