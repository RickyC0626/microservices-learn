import { add } from "../../use-cases";

export const getSum = (request: any): Promise<object> => {
  try {
    const { nums } = request.body;
    const sum = add(...nums);

    return Promise.resolve({
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: {
        result: sum
      }
    });
  } catch(err: any) {
    return Promise.reject({
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 400,
      body: {
        error: 'Sum must not exceed MAX_VALUE'
      }
    });
  }
};