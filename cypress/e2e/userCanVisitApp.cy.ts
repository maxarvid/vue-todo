describe('When the user visits the application', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to display application title', () => {
    cy.get('[data-cy=app-title]').should('contain.text', 'Todo Vue App')
  })

  it('is expected to display an input field for Todos', () => {
    cy.get('[data-cy=todo-input]').should('be.visible')
  });
})
