import Element from "../resources/model/element";

abstract class BasePage {

    private I: CodeceptJS.I
    private timeOut: number = 10;

    constructor(I: CodeceptJS.I) {
        this.I = I;
    }

    protected locator = (element: Element) => {
        return locate(element.locator).as(element.name)
    }

    // action
    public openPage = async (pageUrl = '') => {
        this.I.amOnPage(pageUrl);
    }

    protected click = async (locator: CodeceptJS.Locator) => {
        this.I.waitForElement(locator, this.timeOut)
        this.I.click(locator);
    }

    protected select = async (locator: CodeceptJS.Locator, value: string) => {
        this.I.waitForElement(locator, this.timeOut)
        this.I.selectOption(locator, value)
    }


    protected type = async (locator: CodeceptJS.Locator, value: string) => {
        this.I.waitForElement(locator, this.timeOut)
        this.I.fillField(locator, value);
    }

    // verify
    public verifyElementDisplay = async (locator: CodeceptJS.Locator) => {
        this.I.waitForElement(locator, this.timeOut);
        this.I.seeElement(locator)
    }

    public verifyElementNotDisplay = async (locator: CodeceptJS.Locator) => {
        this.I.dontSeeElement(locator)
    }
}

export default BasePage;