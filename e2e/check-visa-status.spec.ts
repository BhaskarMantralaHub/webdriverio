describe('Check visa status', () => {
    it('test step #1', async () => {
        await browser.url("https://egov.uscis.gov/casestatus/landing.do");
        await (await $("#receipt_number")).setValue("IOE8878754150");
        await (await $(`[name="initCaseSearch"]`)).click();
        const status = await (await $(`.rows>h1`)).getText();
        console.log(`Status is ${status}`);
    })
})