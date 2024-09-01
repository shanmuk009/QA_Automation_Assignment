class GmailLoginPage{

    email_input_selector="input[type='email']"
    next_btn_selector=".TNTaPb div div button"
    password_input_selector="input[name='Passwd']"
    show_password_checkbox="input[type='checkbox']"
    
    navigateToSignInPage() {
        cy.fixture("gmailsigninpage.json").then((data) => {
            cy.visit(data.signInUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.6533.120 Safari/537.36'

                }
            })
        })

    }
    enterEmail(){
        cy.fixture("gmailsigninpage.json").then((data)=>{
            cy.get(this.email_input_selector).type(data.email)
        }) 
    }
    enterPassword(){
        cy.fixture("gmailsigninpage.json").then((data)=>{
            cy.get(this.password_input_selector).type(data.password)
        }) 
    }
    selectShowPwdCheckBox(){
        cy.get(this.show_password_checkbox).check()
        cy.get(this.password_input_selector).invoke('type').should('eq','text')
    }
    clickOnNextBtn(){
        cy.get(this.next_btn_selector).click()
    }
      

}
export default new GmailLoginPage()