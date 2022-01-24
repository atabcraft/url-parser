import { readFile } from 'fs/promises';
import path from 'path';
import { UrlParse } from '../url-parse/url-parse';

test('i1 not within brackets shold be empty url', async () => {
  const url = await loadFileAndProcessTextForUrl('./input/i1.txt');
  expect(url).toBe("")
});

test('i2 within brackets shold detect url', async () => {
  const url = await loadFileAndProcessTextForUrl('./input/i2.txt');
  expect(url).toBe("www.google.com")
});

test('i3 within brackets shold detect url', async () => {
  const url = await loadFileAndProcessTextForUrl('./input/i3.txt');
  expect(url).toBe("www.google.com")
});

test('i4 multiple urls within brackets shold detect last one', async () => {
  const url = await loadFileAndProcessTextForUrl('./input/i4.txt');
  expect(url).toBe("www.second.com")
});

test('i5 multiple levels of bracket and urls within brackets shold detect last one', async () => {
  const url = await loadFileAndProcessTextForUrl('./input/i5.txt');
  expect(url).toBe("www.second.com")
});

test('i6 multiple levels of bracket and urls within brackets shold detect last one', async () => {
  const url = await loadFileAndProcessTextForUrl('./input/i6.txt');
  expect(url).toBe("www.third.com")
});

test('i7 escaping bracket should affect detection of url', async () => {
  const url = await loadFileAndProcessTextForUrl('./input/i7.txt');
  expect(url).toBe("")
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
