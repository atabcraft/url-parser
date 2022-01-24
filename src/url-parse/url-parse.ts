import { UrlParseResult } from "./url-parse-result";

export class UrlParse {
  private URL_EXPRESSION = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  public URL_REGEX = new RegExp(this.URL_EXPRESSION);

  async parseText(text: string): Promise<string> {
    console.log(text);
    return "www.google.com"
  }

  async procesUrl(url: string): Promise<UrlParseResult> {
    console.log(url);
    return new UrlParseResult(url, "title", "email");
  }
}
