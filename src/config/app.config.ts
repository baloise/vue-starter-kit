export const appConfig = {
  env: process.env.VUE_APP_ENV_NAME as string,
  logEnabled: (process.env.VUE_APP_LOG_ENABLED as string) === 'true',
  apiPath: process.env.VUE_APP_API_PATH as string,
  version: JSON.parse(decodeURI(process.env.PACKAGE_JSON as string)).version,
}
