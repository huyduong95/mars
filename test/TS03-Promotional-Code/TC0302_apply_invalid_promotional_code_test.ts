import CommonUtil from "../../common/common";
import Generated from "../../common/generated";
import { customScenario } from "../../configuration/controller";
import PagesFactory from "../../pages/pageFactory"
import ResultEnum from "../../resources/enum/resultEnum";

Feature("Search")

const departingValue: string = Generated.getDepartingListValue().find(departingValue => departingValue.isAvailable).text;
const returingValue: string = Generated.getReturningListValue().find(returingValue => returingValue.isAvailable).text;
const promotionalCode: string = "INVALID_PROMO_CODE"
const validPromoMessage = CommonUtil.formatString(
    ResultEnum.INVALID_PROMO_MESSAGE, promotionalCode);

customScenario("TC0302 - Apply Invalid Promotional Code", async ({ I, current }) => {
    const pages = new PagesFactory(I);
    const searchPage = pages.getSearchPage();

    await searchPage.openPage(current.url);
    await searchPage.selectDeparting(departingValue);
    await searchPage.selectReturning(returingValue);
    await searchPage.typePromotionalCode(promotionalCode);
    await searchPage.clickSearchButton();

    const resultPage = pages.getResultPage();
    await resultPage.verifyDescriptionDipsplay(validPromoMessage);

}).tag("TC0302")