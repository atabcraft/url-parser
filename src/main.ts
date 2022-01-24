import { UrlParse } from "./url-parse/url-parse";
import { UrlParseResult } from "./url-parse/url-parse-result";

export const runParser = async (): Promise<UrlParseResult>  => {
  const urlParser = new UrlParse();
  const url = await urlParser.parseText("[ https://www.heroinesinc.org/copy-of-contact ]");
  return await urlParser.procesUrl(url);
}

