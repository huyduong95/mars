import CommonUtil from "../../common/common";
import Generated from "../../common/generated";
import { customScenario } from "../../configuration/controller";
import PagesFactory from "../../pages/pageFactory"
import ResultEnum from "../../resources/enum/resultEnum";

Feature("Search")

const departingValue: string = Generated.getDepartingListValue().find(departingValue => departingValue.isAvailable).text;
const returingValue: string = Generated.getReturningListValue().find(returingValue => returingValue.isAvailable).text;
const promotionalCode = "JK5-PLQ-432"
const discountPercentage = "50"
const validPromoMessage = CommonUtil.formatString(
    ResultEnum.VALID_PROMO_MESSAGE, promotionalCode, discountPercentage.toString());

customScenario("TC0303 - Apply Check Digit Larger Than 10 - Promotional Code", async ({ I, current }) => {
    const pages = new PagesFactory(I);
    const searchPage = pages.getSearchPage();

    await searchPage.openPage(current.url);
    await searchPage.selectDeparting(departingValue);
    await searchPage.selectReturning(returingValue);
    await searchPage.typePromotionalCode(promotionalCode);
    await searchPage.clickSearchButton();

    const resultPage = pages.getResultPage();
    await resultPage.verifyDescriptionDipsplay(validPromoMessage);

}).tag("TC0303")