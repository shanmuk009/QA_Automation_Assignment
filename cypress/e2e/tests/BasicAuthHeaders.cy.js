describe("Handle Basic auth headers in cypress", () => {

    it("Approach1-Login In using basic authentication ", () => {
        cy.visit("https://authenticationtest.com/HTTPAuth/",
            {
                auth: {
                    'username': 'user',
                    'password': 'pass'
                }
            }
        )
        cy.contains("Login Success").should('be.visible')
    })

    it("Approach2-Login In using basic authentication ", () => {
        cy.visit("https://user:pass@authenticationtest.com/HTTPAuth/")
        cy.contains("Login Success").should('be.visible')
    })

    it("Approach3-Login In using basic authentication ", () => {
        cy.BasicAuthLogin("https://authenticationtest.com/HTTPAuth/",'user','pass')
        cy.contains("Login Success").should('be.visible')
    })
    it("Approach4-Login In using basic authentication-env variables ", () => {
        cy.BasicAuthLogin("https://authenticationtest.com/HTTPAuth/",
            Cypress.env("credentials").username,Cypress.env("credentials").password)
        cy.contains("Login Success").should('be.visible')
    })
})