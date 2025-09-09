import { test } from '@playwright/test';
import { greenLeafReceiving_page } from '../../pages/greenLeafReceivingPage';
import { greenleaf } from '../../data/greenLeafReceivingData';
import { greenLeaf } from '../../actions/greenLeafReceivingActions';
import { login_page } from '../../pages/loginPage';
import { loginData } from '../../data/logindata';
import { login, assertionLogin } from '../../actions/loginActions';

test.beforeEach(async ({ page }) => {
  const Login = new login_page(page);
  await Login.navigateUrl(loginData.baseUrl);
  await login(page, Login, loginData.username, loginData.password);
});

// Reuse the session from login.spec.js
//test.use({ storageState: 'storageState.json' })

test('Green Leaf Receiving', async ({ page }) => {
  const Green_Leaf = new greenLeafReceiving_page(page);
  await greenLeaf(page, Green_Leaf, greenleaf.division, greenleaf.field, greenleaf.qty, greenleaf.date);
});
