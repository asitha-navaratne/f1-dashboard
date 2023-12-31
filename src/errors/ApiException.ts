class ApiException extends Error {
  constructor(msg: string, code: number) {
    super(msg);
    this.code = code;

    Object.setPrototypeOf(this, ApiException.prototype);
  }

  code = 400;
}

export default ApiException;
