class LoginPage {

    login_link_btn_selector = "a#login_Layer"
    username_selector = "input[placeholder='Enter your active Email ID / Username']"
    password_selector = "input[placeholder='Enter your password']"
    login_btn_selector = "button.btn-primary.loginButton"

    navigateToLoginPage() {
         cy.visit(Cypress.env('url').loginpageurl, { headers: { 'Accept-Encoding': 'gzip, deflate' } },{ failOnStatusCode: false })
        // cy.visit(Cypress.env('url').loginpageurl, {
        //     headers: {
        //         'Accept-Encoding': 'gzip, deflate',
        //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        //     },
        //     failOnStatusCode: false
        // });
    }
    clickOnLoginLinkBtn() {
        cy.get(this.login_link_btn_selector).click()
    }
    enterUserNameAndPassword() {
        cy.fixture('loginpage.json').then((data) => {
            cy.get(this.username_selector).type(data.username)
            cy.get(this.password_selector).type(data.password)
        })

    }
    clickOnLoginBtn() {
        cy.get(this.login_btn_selector).click()
    }

    logIn(){
        this.navigateToLoginPage()
        this.clickOnLoginLinkBtn()
        this.enterUserNameAndPassword()
        this.clickOnLoginBtn()
    }

}

export default new LoginPage();