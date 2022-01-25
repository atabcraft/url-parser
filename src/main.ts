import { readFile } from "fs/promises";
import path from "path";
import { UrlParse } from "./url-parse/url-parse";
import { UrlParseResult } from "./url-parse/url-parse-result";

export const runParser = async (): Promise<UrlParseResult>  => {
  const myArgs = process.argv.slice(2);
  const fullPath = path.join(__dirname, myArgs[0]);
  const text = await readFile(fullPath, {encoding: "utf-8"});
  const urlParser = new UrlParse();
  const url = await urlParser.parseText(text);
  const result = await urlParser.procesUrl(url);
  console.log(result);
  return result;
}


