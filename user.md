使用config
``` 
    onLaunch: function (options) {
		let env = options.query.env ? options.query.env : "product";
		var config = require("config/config." + env + ".js");
		this.globalData.config = config.config; 
    }
```