const chromedriver = require('chromedriver');

module.exports = {
  test_settings: {
    default: {
        screenshots: {
            enabled: true,
            path: 'screenshots'
          },
      webdriver: {
        start_process: false,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};