class JobsPage {

    jobs_tabs_selector=".tab-list>div"
    job_articles_list_selector="li.placeHolderLi.experience>span"

    
    selectTabInJobs(desiredIdValue) {
        cy.get(this.jobs_tabs_selector)
            .should('have.length', 4)
            .each(($element) => {
                cy.wrap($element)
                    .invoke('attr', 'id')
                    .then((idValue) => {
                        if (idValue === desiredIdValue) {
                            cy.wrap($element).click()
                        }
                    })
            })

    }

    selectJobArticleWithRequiredExp(years) {
        const urls=[];
        cy.get(this.job_articles_list_selector).each(($article) => {
            cy.wrap($article)
              .invoke('text')
              .then((textcont) => {
                // Check if the text content matches the 'years' variable
                if (textcont.includes(years)) {
                  // Click on the job article to trigger the navigation
                  cy.wrap($article).click();
          
                  // Use window.open stub only if not already stubbed
                  cy.window().then((win) => {
                    if (!win.open.restore) {
                      cy.stub(win, 'open').as('windowOpen');
                    }
                  });
          
                  // Wait for the window.open to be called and capture the URL
                  cy.get('@windowOpen').should('be.called').then((stub) => {
                    const url = stub.getCall(0).args[0]; // Extract the URL from the first call to open
                    urls.push("https://www.naukri.com/" + url)
                    cy.visit("https://www.naukri.com/" + url);
                  });
                }
              });
          });

          for(var i=0;i<urls.length;i++){
            console.log(urls[i])

          }
          




    }


}
export default new JobsPage()