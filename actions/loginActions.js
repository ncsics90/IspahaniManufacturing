import { expect } from '@playwright/test';

export async function login(page, loginPage, username, password) {
  await loginPage.fillUsername(username);
  await loginPage.fillPassword(password);
  await loginPage.clickSignIn();
}

export async function assertionLogin(loginPage) {
  const text = await loginPage.verifyLogin(); // this already waits for visibility + extracts
  return text;
}