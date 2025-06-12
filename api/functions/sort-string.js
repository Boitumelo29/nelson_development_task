exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }
  
    try {
      const { data } = JSON.parse(event.body);
  
      if (!data || typeof data !== 'string') {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: '"data" must be a string' }),
        };
      }
  
      const sortedChars = data.split('').sort();
      return {
        statusCode: 200,
        body: JSON.stringify({ word: sortedChars }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }
  };
  