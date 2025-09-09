import { expect } from '@playwright/test';
import { fillInput, clickElement, clickByText, fillInputnumstr } from '../utils/actions';

export class greenLeafReceiving_page {

    constructor(page) {
        this.page = page
        this.manufacturing_menu = page.getByRole('button').filter({ hasText: 'production_quantity_limits' })
        this.tea_subMenu = page.getByRole('button', { name: 'Tea' })
        this.greenLeaf_childMenu = page.getByRole('button', { name: 'Green Leaf Receiving' })
        this.greenLeaf_add_button = page.locator('form span').filter({ hasText: 'Green Leaf Receiving' }).getByRole('button')
        this.greenLeaf_click_leafType = page.getByRole('button', { name: '--Select Leaf Type--' })
        this.greenLeaf_select_leafType = page.getByRole('option', { name: 'Estate Leaf', exact: true })
        this.greenLeaf_click_division = page.getByRole('button', { name: 'Division *' })
        this.greenLeaf_select_division = page.getByRole('option', { name: 'Golconda' })

        this.greenLeaf_click_field = page.getByRole('button', { name: 'Field *' })
        this.greenLeaf_select_field = page.getByRole('option', { name: '2VP' })

        this.greenLeaf_click_qty = page.locator('//*[@id="root"]/div/div[3]/div/div/div[2]/div/form/div/div/div[2]/div[1]/div[1]/div[4]/div/div/input')

        this.greenLeaf_click_date = page.getByRole('button', { name: 'change date' })
        this.greenLeaf_select_date = page.getByRole('button', { name: '20', exact: true })

        this.greenLeaf_add_list = page.getByRole('button', { name: 'Add' })

        this.greenLeaf_save = page.getByRole('button', { name: 'Save' })

    }

    async clickManufacturing() {
        await clickElement(this.manufacturing_menu, 'Manufacturing Menu Main');
    }

    async clickTea() {
        await clickElement(this.tea_subMenu, 'Tea Menu Sub');
    }

    async clickGreanLeafReceiving() {
        await clickElement(this.greenLeaf_childMenu, 'Green Leaf Menu Child');
    }

    async clickGreanLeafAdd() {
        await clickElement(this.greenLeaf_add_button, 'Green Leaf Add Button');
    }

    async clickLeafType() {
        await clickElement(this.greenLeaf_click_leafType, 'Click Leaf Type');
    }

    async selectLeafType() {
        await clickByText(this.greenLeaf_select_leafType, 'Estate Leaf', 'Selct Leaf Type');
    }

    async clickDivision() {
        await clickElement(this.greenLeaf_click_division, 'Click Division');
    }

    async selectDivision(division) {
        await clickByText(this.greenLeaf_select_division, division, 'Selct Division');
    }


    async clickQty() {
        await clickElement(this.greenLeaf_click_qty, 'Click Qty');
    }

    async fillQty(glQty) {
        await fillInputnumstr(this.greenLeaf_click_qty, glQty, 'Fill Qty');
    }

    async clickDatePicker() {
        await clickElement(this.greenLeaf_click_date, 'Click Calender');
    }

    async selectDate(date) {
        await clickByText(this.greenLeaf_select_date, date, 'Selct Calender');
    }

    async clickAddLists() {
        await clickElement(this.greenLeaf_add_list, 'Add to the list');
    }

    async clickSave() {
        await clickElement(this.greenLeaf_save, 'Save the record');
    }

    async confirmkSave() {
        await clickElement(this.greenLeaf_save, 'Save confirmed');
    }
}