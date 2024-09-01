describe('Login In to Amazon and add products',()=>{

    it("Amazon login page ",()=>{
        cy.visit("https://www.amazon.in/")
        cy.get("a#nav-link-accountList").click()
        cy.get("input#ap_email_login").type('shanmukhbandaru@gmail.com')
        cy.get("input.a-button-input").click()
        cy.get("input#ap_password").type('Shancol@24')
        cy.get("input#signInSubmit").click()
    })
})