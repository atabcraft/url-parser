import { UrlParseResult } from "./url-parse-result";
import axios from "axios";

export class UrlParse {
  private URL_EXPRESSION = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s{2,}\]|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\]\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s\]]{2,}|www\.[a-zA-Z0-9]+\.[^\s\]]{2,}/gi;
  public URL_REGEX = new RegExp(this.URL_EXPRESSION);

  async parseText(text: string): Promise<string> {
    let lParathensis = text.indexOf("[");
    const rParanthesis = text.lastIndexOf("]");

    //search first bracket you can find that is not escaped
    while(lParathensis > 0 && text[lParathensis - 1] === "\\") {
      let positionToStartSearchFor = lParathensis +1;
      if (positionToStartSearchFor >= text.length - 1) positionToStartSearchFor = text.length;
      lParathensis = positionToStartSearchFor;
    }
    if( lParathensis >=0 && rParanthesis){
      const textBetween = text.substring(lParathensis+1, rParanthesis);
      const result = [...textBetween.matchAll(this.URL_REGEX)] || [];
      if ( result?.length == 0) return "";
      return (result.pop() as RegExpMatchArray)[0];
    }
    return ""
  }

  async procesUrl(url: string): Promise<UrlParseResult> {
    console.log(url);
    const html = await axios.get(url);
    console.log(html);
    return new UrlParseResult(url, "title", "email");
  }
}
