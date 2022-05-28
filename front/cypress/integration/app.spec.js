describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')


    cy.visit('http://localhost:3000/login')
    cy.visit('http://localhost:3000/esqueci-a-senha')
    cy.visit('http://localhost:3000/cadastro')
    cy.visit('http://localhost:3000/termos-de-uso')
    cy.visit('http://localhost:3000/politica-de-privacidade')


    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="login"]').click()
    cy.get('a[href*="esqueci-a-senha"]').click()
    cy.get('a[href*="cadastro"]').click()
    cy.get('a[href*="termos-de-uso"]').click()
    cy.get('a[href*="politica-de-privacidade"]').click()
    
    // The new url should include "/about"
    cy.url().should('include', '/contato')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page')
  })
})