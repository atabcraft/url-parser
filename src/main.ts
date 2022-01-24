import { UrlParse } from "./url-parse/url-parse";
import { UrlParseResult } from "./url-parse/url-parse-result";

export const runParser = async (): Promise<UrlParseResult>  => {
  const urlParser = new UrlParse();
  const url = await urlParser.parseText("[ https://www.index.hr/oglasi/ ]");
  return await urlParser.procesUrl(url);
}

