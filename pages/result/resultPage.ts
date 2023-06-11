import CommonUtil from "../../common/common";
import ResultEnum from "../../resources/enum/resultEnum";
import Element from "../../resources/model/element";
import BasePage from "../basePage";

class ResultPage extends BasePage {

    private headerXpath: Element = {
        name: "Header",
        locator: "//div[@id='content']//h2[text()='{0}']"
    }
    private descriptionXpath: Element = {
        name: "Description",
        locator: "//div[@id='content']//p[.='{0}']"
    }

    // Verify
    public verifyHeaderPageDisplay = async () => {
        const xpath = CommonUtil.formatString(this.headerXpath.locator, ResultEnum.SEARCH_RESULT);
        this.verifyElementDisplay(locate(xpath).as(this.headerXpath.name));
    }

    public verifyDescriptionDipsplay = async (description: string) => {
        const xpath = CommonUtil.formatString(this.descriptionXpath.locator, description);
        this.verifyElementDisplay(locate(xpath).as(this.descriptionXpath.name));
    }

    public verifyDescriptionNotDipsplay = async (description: string) => {
        const xpath = CommonUtil.formatString(this.descriptionXpath.locator, description);
        this.verifyElementNotDisplay(locate(xpath).as(this.descriptionXpath.name));
    }
}

export default ResultPage