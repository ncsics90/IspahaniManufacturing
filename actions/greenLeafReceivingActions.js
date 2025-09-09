import { expect } from '@playwright/test';

export async function greenLeaf(page, greenLeafReceivingPage, division, field, glQty, date) {

    await greenLeafReceivingPage.clickManufacturing();
    await greenLeafReceivingPage.clickTea();
    await greenLeafReceivingPage.clickGreanLeafReceiving();

    await greenLeafReceivingPage.clickGreanLeafAdd();

    await greenLeafReceivingPage.clickLeafType();
    await greenLeafReceivingPage.selectLeafType();

    //await greenLeafReceivingPage.clickDivision();
    //await greenLeafReceivingPage.selectDivision(division);

    //await greenLeafReceivingPage.clickField();
    //await greenLeafReceivingPage.selectField(field);

    await greenLeafReceivingPage.clickQty();
    await greenLeafReceivingPage.fillQty(glQty);

    //await greenLeafReceivingPage.clickDatePicker();
    //await greenLeafReceivingPage.selectDate(date);

    await greenLeafReceivingPage.clickAddLists();
    await greenLeafReceivingPage.clickSave();
    await greenLeafReceivingPage.confirmkSave();
}