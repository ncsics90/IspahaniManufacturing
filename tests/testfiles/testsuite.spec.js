import { test, expect } from '@playwright/test';
import { login_page } from '../../pages/loginPage';
import { loginData } from '../../data/logindata';
import { login, assertionLogin } from '../../actions/loginActions';
import { greenLeafReceiving_page } from '../../pages/greenLeafReceivingPage';
import { greenleaf } from '../../data/greenLeafReceivingData';
import { greenLeaf } from '../../actions/greenLeafReceivingActions';


test.use({ storageState: 'storageState.json' });

test('Login', async ({ page }) => {
  const Login = new login_page(page);

  await Login.navigateUrl(loginData.baseUrl);
  await login(page, Login, loginData.username, loginData.password);

  const cleanText = await assertionLogin(Login);
  expect(cleanText).toBe(loginData.expectedUser);

  const Green_Leaf = new greenLeafReceiving_page(page);
  await greenLeaf(page, Green_Leaf, greenleaf.division, greenleaf.field, greenleaf.qty, greenleaf.date);
});
