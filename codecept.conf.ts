export const config: CodeceptJS.MainConfig = {
  tests: 'test/**/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://marsair.recruiting.thoughtworks.net/HuyDuong',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file'
  },
  plugins: {
    allure: {
      enabled: true,
      outputDir: "./allure-results",
      require: '@codeceptjs/allure-legacy',
    },
  },
  name: 'MARS'
}