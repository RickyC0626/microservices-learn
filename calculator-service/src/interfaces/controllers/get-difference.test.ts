import getDifference from "./get-difference";

describe("get difference", () => {
  it("should successfully calculate difference of nums", async () => {
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        nums: [9, 5, 1]
      }
    };
    const expected = {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      body: {
        result: 3
      }
    };
    await getDifference(request).then(actual => expect(actual).toEqual(expected));
  });

  it("should report errors", async () => {
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        nums: [0, Number.MAX_VALUE, Number.MAX_VALUE]
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
    await getDifference(request).catch(actual => expect(actual).toEqual(expected));
  });
});