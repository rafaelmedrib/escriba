/* eslint-disable max-classes-per-file */
import ICodeMessages from '../interfaces/ICodeMessages';

namespace Exceptions {
  export class BaseError extends Error {
    code: string;

    code_message: ICodeMessages;

    constructor(code_message: ICodeMessages, name: string) {
      super(`${name}: ${code_message.message}`);
      this.name = name;
      this.code = code_message.code;
      this.message = code_message.message;
      this.code_message = code_message;
    }
  }

  export class NotFoundError extends BaseError {
    constructor(code_message: ICodeMessages) {
      super(code_message, 'NotFoundError');
    }
  }

  export class InternalServerError extends BaseError {
    constructor(code_message: ICodeMessages) {
      super(code_message, 'InternalServerError');
    }
  }
}

export default Exceptions;
