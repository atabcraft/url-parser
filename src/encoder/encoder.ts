import * as crypto from "crypto";

export class Encoder {
  encodeSHA256(text:string): string{
    return crypto.createHmac('sha256', 'password')
    .update(text)
    .digest('hex');
  }
}
