import { readFile } from 'fs/promises';
import path from 'path';
import { UrlParse } from '../url-parse/url-parse';

test('i1 not within brackets shold be empty url', async () => {
  const url = await loadFileAndProcessTextForUrl('./input/i1.txt');
  expect(url).toBe("www.google.com")
});

/**
 * Read path url and process text from it.
 */
const loadFileAndProcessTextForUrl = async (partiallPath: string) => {
  const urlParse: UrlParse = new UrlParse();
  const fullPath = path.join(__dirname, partiallPath);
  const text = await readFile(fullPath, {encoding: "utf-8"});
  return await urlParse.parseText(text);
}
