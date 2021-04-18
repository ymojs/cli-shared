# @ymo/cli-shared

### Usage
```javascript
import { logger } from "@ymo/cli-shared";

logger.spinnerLog("start");
```

### Modules
- env
  - env.ymojsHome
  - env.nodeEnv
- logger
  - logger.log(logInfo: string)
  - logger.spinnerLog(text: string)
  - logger.stopSpiner()
  - logger.failSpiner(text: string)
- formatDate(date: Date | string | number, fmt: stringA): string
- isWindows(): boolean