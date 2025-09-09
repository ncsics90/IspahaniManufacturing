// // global-setup.js
// import { chromium } from '@playwright/test';
// import { login_page } from './pages/loginPage';
// import { loginData } from './data/logindata';
// import { login } from './actions/loginActions';

// async function globalSetup() {
//   // Launch browser
//   const browser = await chromium.launch({ headless: true });
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Navigate to login and perform login
//   const Login = new login_page(page);
//   await Login.navigateUrl(loginData.baseUrl);
//   await login(page, Login, loginData.username, loginData.password);

//   // Save storage state for all tests to reuses
//   await context.storageState({ path: 'storageState.json' });

//   // Close browser after setup
//   await browser.close();
// }

// export default globalSetup;
