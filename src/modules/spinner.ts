import ora from 'ora';
import chalk from 'chalk';

const spinner = ora();
let preMsg: {
  symbol: string,
  msg: string;
};

function startSpinner(_symbol: string, _msg?: string) {
  let symbol = _symbol;
  const msg: string = _msg || _symbol;
  if (!_msg) {
    symbol = chalk.green('✔');
  }
  if (preMsg) {
    spinner.stopAndPersist({
      symbol: preMsg.symbol,
      text: preMsg.msg
    })
  }
  spinner.text = ` ${msg}`;
  preMsg = {
    symbol: symbol,
    msg: msg
  };
  spinner.start();
}

function stopSpinner(persist: boolean = true) {
  if (persist) {
    spinner.stopAndPersist({
      symbol: preMsg.symbol,
      text: preMsg.msg
    });
  } else {
    spinner.stop();
  }
}

function failSpinner(msg: string) {
  spinner.fail(msg);
}

export {
  startSpinner,
  stopSpinner,
  failSpinner
}