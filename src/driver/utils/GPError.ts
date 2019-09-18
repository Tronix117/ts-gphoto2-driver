import {GPCodes} from "../types";

export class GPError extends Error {
  code: GPCodes;

  constructor(code: number, message?: string) {
    super(message);
    this.code = code;
  }
}

export default GPError;
