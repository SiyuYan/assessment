let reporter = require('cucumber-html-reporter');

let options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber.json',
  output: 'reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  screenshotsDirectory: 'screenshots/',
  storeScreenshots: true,
  metadata: {
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
    
 