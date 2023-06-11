import Generated from "../../common/generated";
import { customScenario } from "../../configuration/controller";
import PagesFactory from "../../pages/pageFactory"
import ResultEnum from "../../resources/enum/resultEnum";

Feature("Search")

const departingValue: string =  Generated.getDepartingListValue().find(departingValue => departingValue.isAvailable).text;
const returingValue: string = Generated.getReturningListValue().find(returingValue => returingValue.isAvailable).text;

customScenario("TC0201 - Search available slot", async ({ I, current }) => {
    const pages = new PagesFactory(I);
    const searchPage = pages.getSearchPage();

    await searchPage.openPage(current.url);
    await searchPage.selectDeparting(departingValue);
    await searchPage.selectReturning(returingValue);
    await searchPage.clickSearchButton();

    const resultPage = pages.getResultPage();
    await resultPage.verifyHeaderPageDisplay();
    await resultPage.verifyDescriptionDipsplay(ResultEnum.SEAT_AVAILABLE);
    await resultPage.verifyDescriptionDipsplay(ResultEnum.CALL_NOW);

}).tag("TC0201")