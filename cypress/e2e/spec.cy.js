describe('template spec', () => {
  it('passes',{tags:'@smoke'}, () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('[id="username"]').type('student')
    cy.get('[id="password"]').type('incorrectPassword');
    cy.get('[id="submit"]').click()
    cy.log('Hello')
      })
})