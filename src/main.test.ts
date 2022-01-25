import {  runParser} from "./main";

describe('environmental variables', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV,
      IM_SECRET: "testveyhardsecrettoguess"
    };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test('integration test for real website valid url should return result', async () => {
    process.argv  = [
      ...process.argv.slice(0,2),
      "url-parse/input/i8.txt"
    ]
    const result = await runParser();
    expect(result.url).toBe('https://www.google.com')
    expect(result.email).toBeTruthy();
    expect(result.title).toBe("Google");
  });
});
