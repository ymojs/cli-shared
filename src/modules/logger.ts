import EventEmitter from 'events';
import { join } from 'path';
import { ensureFileSync, appendFileSync } from 'fs-extra';
import Console from '@ymo/console';
import formatDate from './formatDate';
import * as env from './env';
import * as spinner from './spinner';

class Logger extends EventEmitter {
  private logFilePath: string
  
  constructor() {
    super();
    this.logFilePath = join(env.ymojsHome, this._getLogName());
    Console.init({
      env: env.nodeEnv
    });
  }

  public log(logInfo: string) {
    ensureFileSync(this.logFilePath);
    const msg = this._format(logInfo);
    appendFileSync(this.logFilePath, msg);
  }

  public spinnerLog(logInfo: string) {
    spinner.startSpinner(logInfo);
  }

  public stopSpinner() {
    spinner.stopSpinner();
  }

  public failSpinner(text: string) {
    spinner.failSpinner(text);
  }

  private _getDateString(fmt: string): string {
    return formatDate(new Date(), fmt);
  }

  private _getLogName(): string {
    const prefix = 'cli_log_';
    const ext = '.log';
    const date = this._getDateString('YYYY_MM_DD');
    return prefix + date + ext;
  }

  private _format(logInfo: string): string {
    const date = this._getDateString('YYYY-MM-DD HH:mm:ss');
    return `[${date}]: ${logInfo}\r\n`;
  }
}

export default new Logger();