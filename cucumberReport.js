const report = require('multiple-cucumber-html-reporter')

report.generate({
  jsonDir: './cypress/cucumber-json/',
  reportPath: './cypress/cucumber-report/',
  metadata: {
    browser: {
      name: 'chrome',
      version: '91',
    },
    device: 'Local test machine',
    platform: {
      name: 'ubuntu',
      version: '20.04',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Automated Tests' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
      { label: 'Execution End Time', value: new Date().toLocaleString() },
    ],
  },
  displayDuration: true,
  durationInMS: true,
  openReportInBrowser: true,
  pageTitle: 'Relatório de Testes',
  reportName: 'Relatório Detalhado de Testes',
  plainDescription: true,
  displayReportTime: true,
})