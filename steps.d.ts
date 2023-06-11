type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends REST, Puppeteer, ChaiWrapper, GraphQL { } 

  interface I extends WithTranslation<Methods> {
  }
  namespace Translation {
    interface Actions { }
  }
}