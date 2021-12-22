import { subtract } from "../../use-cases";

export const getDifference = (request: any): Promise<object> => {
  try {
    const { nums } = request.body;
    const diff = subtract(...nums);

    return Promise.resolve({
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: {
        result: diff
      }
    });
  } catch(err: any) {
    return Promise.reject({
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 400,
      body: {
        error: err.message
      }
    });
  }
};