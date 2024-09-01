describe('Price Comparison: Amazon vs Flipkart', () => {
  const productName = 'oppo F23 5G';
  
  it('Retrieve and store text from Amazon URL', () => {
    cy.visit('https://www.amazon.in');
    cy.get('#twotabsearchtextbox').type(`${productName}{enter}`);

    cy.get("span[class='a-price']>span:first-child").first() // Replace with the selector for the text on Amazon
      .invoke('text')
      .then((text) => {
        cy.task('storeAmazonText', text); // Store the text using the custom task
      });
  });

  it('Retrieve and store text from Flipkart URL and compare with Amazon', () => {
    cy.visit('https://www.flipkart.com'); 
    cy.get('input[name="q"]').type(`${productName}{enter}`);
    cy.get('.Nx9bqj._4b5DiR').first() 
      .invoke('text')
      .then((text) => {
        cy.task('storeFlipkartText', text); // Store the text using the custom task

        // Retrieve both texts and compare them
        cy.task('getAmazonText').then((amazonText) => {
          cy.task('getFlipkartText').then((flipkartText) => {
            expect(flipkartText).to.not.equal(amazonText); // Compare the texts
          });
        });
      });
  });

})
