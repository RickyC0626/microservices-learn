import { getSum } from "./get-sum";

describe("get sum", () => {
  it("should successfully calculate sum of nums", async () => {
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        nums: [5, 6, 7]
      }
    };
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: {
        result: 18
      }
    }
    await getSum(request).then(actual => expect(actual).toEqual(expected));
  });

  it("should report errors", async () => {
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        nums: [Number.MAX_VALUE, Number.MAX_VALUE]
      }
    };
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 400,
      body: {
        error: "Sum must not exceed MAX_VALUE"
      } 
    };
    await getSum(request).catch(actual => expect(actual).toEqual(expected));
  });
});