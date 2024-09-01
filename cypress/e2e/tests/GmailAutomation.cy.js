import GmailSigninPage from "../../pageObjects/GmailSigninPage"
import GoogleHomePage from "../../pageObjects/GoogleHomePage"

describe("Gmail signIn Automation",()=>{

    it("sign In Google Account and Go to Gmail Page",()=>{
        GmailSigninPage.navigateToSignInPage()
        GmailSigninPage.enterEmail()
        GmailSigninPage.clickOnNextBtn()
        GmailSigninPage.enterPassword()
        GmailSigninPage.clickOnNextBtn()

    })
})