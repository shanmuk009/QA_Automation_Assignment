class HomePage {

    user_title_selector = ".name-wrapper div"
    prof_img_selector = "img[alt='naukri user profile img']"
    logout_link_selector = "a[data-type='logoutLink']"
    view_profile_selector=".view-profile-wrapper a"
    menu_items_selector="a.nI-gNb-menuItems__anchorDropdown"


     validateUserTitle() {
        cy.fixture('homepage.json').then((data) => {
            cy.get(this.user_title_selector,{timeout:20000}).should('have.text', data.user_title);
        })
    }
    clickOnViewProfile(){
        cy.get(this.view_profile_selector).click()
    }

    logout() {
        cy.get(this.prof_img_selector).click()
        cy.get(this.logout_link_selector).click()
        cy.url().should('eq', Cypress.env('url').loginpageurl);
    }

    selectMenuItem(name){
        cy.get(this.menu_items_selector).contains(name).click()
    }
}
export default new HomePage();