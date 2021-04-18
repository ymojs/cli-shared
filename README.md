# Console

### Usage
```javascript
import Console from "@ymo/console";

Console.init({
  env: "development" // development和debug环境会代理console(log, warn, error)，添加颜色和前缀
})
```