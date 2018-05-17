const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'step_definitions', '--format', 'node_modules/cucumber-pretty', '--format', 'json:reports/cucumber.json', 'features'],
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: 'custom-assertions',
  page_objects_path: 'pages',
  globals_path: 'utils/globals.js',
  // test_workers: true,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
  },
  test_settings: {
    default: {
      launch_url: 'https://shop.circles.life/login',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      silent: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['incognito', 'no-sandbox', 'disable-gpu'],
        },
      },
      skip_testcases_on_fail: false,
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path,
        },
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        marionette: true,
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckodriver.path,
        },
      },
    },
  },
};
