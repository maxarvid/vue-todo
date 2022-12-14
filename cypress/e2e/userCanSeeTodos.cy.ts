describe('When the user wants to see their todos', () => {
  describe('with Todos stored in localStorage', () => {
    beforeEach(() => {
      cy.visitWithTodos()
    });

    it('is expected to display the three todos in the app', () => {
      cy.get('[data-cy=todo-list]').children().should('have.length', 3)
    });

    it('is expected that the first Todo is "Laundry"', () => {
      cy.get('[data-cy=todo-list]').children().first().should('include.text', 'Laundry')
    });

  });

  describe('with no Todos stored in localStorage', () => {
    beforeEach(() => {
      cy.visit('/')
    });

    it('is expected to not display any todos', () => {
      cy.get('[data-cy=todo-list').should('not.exist')
    });
  });
});