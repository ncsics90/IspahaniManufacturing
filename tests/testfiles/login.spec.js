import { test, expect } from '@playwright/test';
import { login_page } from '../../pages/loginPage';
import { loginData } from '../../data/logindata';
import { login, assertionLogin } from '../../actions/loginActions';


test('test', async ({ page }) => {

  const Login = new login_page(page)

  await Login.navigateUrl(loginData.baseUrl)
  await login(page, Login, loginData.username, loginData.password)

  const cleanText = await assertionLogin(Login);
  //console.log('Extracted Text:', cleanText);
  expect(cleanText).toBe(loginData.expectedUser);

});