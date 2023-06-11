import CommonUtil from "../../common/common";
import SearchEnum from "../../resources/enum/searchEnum";
import Element from "../../resources/model/element";
import BasePage from "../basePage";

class SearchPage extends BasePage {

    // Locator
    private departingXpath: Element = {
        name: "Departing Drodpown",
        locator: "//select[@id='departing']"
    }
    private returningXpath: Element = {
        name: "Returning Dropdown",
        locator: "//select[@id='returning']"
    }

    private promotionalCode: Element = {
        name: "Promotional Code",
        locator: "//input[@id='promotional_code']"
    }

    private searchButton: Element = {
        name: "Search button",
        locator: "//input[@type='submit'][@value='{0}']"
    }


    // Action
    public selectDeparting = async (departingValue: string) => {
        this.select(this.locator(this.departingXpath), departingValue);
    }

    public selectReturning = async (returningValue: string) => {
        this.select(this.locator(this.returningXpath), returningValue);
    }

    public typePromotionalCode = async (promotionalCode: string) => {
        await this.type(this.locator(this.promotionalCode), promotionalCode);
    }

    public clickSearchButton = async () => {
        const xpath = CommonUtil.formatString(this.searchButton.locator, SearchEnum.SEARCH_BUTTON);
        await this.click(locate(xpath).as(this.searchButton.name));
    }

}

export default SearchPage