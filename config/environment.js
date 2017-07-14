'use strict'

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'my-app',
    environment: environment
  }

  if (environment === 'production') {
    ENV.rootURL = '/glimmer-weather-demo/'
    ENV.locationType = 'hash'
  }

  return ENV
}
