describe("nike automation :interview question",()=>{

    it("Test ",()=>{

        cy.visit("https://www.nike.com/")
        cy.viewport(1080,720)
        cy.get('button[id=nav-search-icon]').should('be.visible').click({force: true})
    
        cy.get("#gn-search-input").click().type("Nike Dunk Low Retro") //Products. Nike.com
        cy.get("button[id=nav-search-icon]").click()
        cy.title().should('eq', 'Nike. Just Do It. Nike IN')

        //cy.get('button[aria-label="Filter for Grey"]',{ timeout: 20000 }).should('be.visible').click()
        cy.get("a.product-card__img-link-overlay[aria-label='Nike Dunk Low Retro']").first().click()
    })
})