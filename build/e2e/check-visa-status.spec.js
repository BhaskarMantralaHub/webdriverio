"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe('Check visa status', () => {
    it('test step #1', () => __awaiter(void 0, void 0, void 0, function* () {
        yield browser.url("https://egov.uscis.gov/casestatus/landing.do");
        yield (yield $("#receipt_number")).setValue("IOE8878754150");
        yield (yield $(`[name="initCaseSearch"]`)).click();
        const status = yield (yield $(`.rows>h1`)).getText();
        console.log(`Status is ${status}`);
    }));
});
