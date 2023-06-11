import Generated from "../../common/generated";
import { customScenario } from "../../configuration/controller";
import PagesFactory from "../../pages/pageFactory"
import ResultEnum from "../../resources/enum/resultEnum";

Feature("Search")

let departingValue: string;
let departingIndex: number;
let returingValue: string;
let returingIndex: number;

const precondition = () => {
    const departingList = Generated.getDepartingListValue();
    const departingData = departingList.find(departingValue => departingValue.index < departingList.length);
    departingValue = departingData.text;
    departingIndex = departingData.index;

    const returningData = Generated.getReturningListValue().find(returingValue => returingValue.index === departingIndex + 1);
    returingValue = returningData.text;
    returingIndex = returningData.index;
}

customScenario("TC0203 - Search slot which less one year than departing", async ({ I, current }) => {
    precondition();
    const pages = new PagesFactory(I);
    const searchPage = pages.getSearchPage();

    await searchPage.openPage(current.url);
    await searchPage.selectDeparting(departingValue);
    await searchPage.selectReturning(returingValue);
    await searchPage.clickSearchButton();

    const resultPage = pages.getResultPage();
    await resultPage.verifyHeaderPageDisplay();

    await resultPage.verifyDescriptionNotDipsplay(ResultEnum.SEAT_AVAILABLE);
    await resultPage.verifyDescriptionNotDipsplay(ResultEnum.CALL_NOW);

    await resultPage.verifyDescriptionDipsplay(ResultEnum.LESS_ONE_YEAR_MESSAGE);

}).tag("TC0203")