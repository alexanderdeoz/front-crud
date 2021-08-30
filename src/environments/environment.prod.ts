const WEB = 'http://backend-cruddriver.test';
const API = 'http://backend-cruddriver.test/api/v1';
export const environment = {
  production: false,
  WEB,
  STORAGE_URL: WEB + '/storage/',
  API_URL_AUTHENTICATION: API + '/Authentication/',
  API_URL_PRIVATE: API + '/private/',
  API_URL_PUBLIC: API + '/public/',
};
