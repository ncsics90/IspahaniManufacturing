import { expect } from '@playwright/test';
import { navigateTo, fillInput, clickElement, extractText } from '../utils/actions';

export class login_page {

    constructor(page) {

        this.page = page
        this.username_textbox = page.locator('input[name="username"]')
        this.password_textbox = page.locator('input[name="password"]')
        this.login_button = page.getByRole('button', { name: 'Sign in now' })
        this.loggedUserLabel = page.locator('//*[@id="root"]/div/div[1]/header/div/div[2]/div[1]/p[1]')

    }

    async navigateUrl(url) {
        await navigateTo(this.page, url)

    }

    async fillUsername(username) {
        await fillInput(this.username_textbox, username, 'Username');
    }

    async fillPassword(password) {
        await fillInput(this.password_textbox, password, 'Password');
    }

    async clickSignIn() {
        await clickElement(this.login_button, 'Sign In Button');
    }

    async verifyLogin() {
        await expect(this.loggedUserLabel).toBeVisible(); 
        return await extractText(this.loggedUserLabel, 'Logged User Name');
    }

}