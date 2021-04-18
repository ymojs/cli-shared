import isWindows from './isWindows';
import { resolve } from 'path';

const HOME_DIR = (isWindows() ? process.env.USERPROFILE : process.env.HOME) || __dirname;

const NODE_ENV = process.env.NODE_ENV;

const DEFAULT_ENV = 'production';

const ymojsHome = resolve(HOME_DIR, '.ymojs');

const nodeEnv = NODE_ENV || DEFAULT_ENV;

export {
  ymojsHome,
  nodeEnv
}