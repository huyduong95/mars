import ResultPage from "./result/resultPage"
import SearchPage from "./search/searchPage"

class PagesFactory {

    I: CodeceptJS.I

    constructor(I: CodeceptJS.I) {
        this.I = I
    }

    getSearchPage() {
        return new SearchPage(this.I)
    }

    getResultPage() {
        return new ResultPage(this.I)
    }


}

export default PagesFactory