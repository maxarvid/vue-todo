describe('When the user adds a Todo', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  describe('with an input', () => {
    beforeEach(() => {
      cy.get('[data-cy=todo-input]').type('Wash clothes')
    });

    it('is expected to save a todo in localStorage upon submission', () => {
      cy.get('svg').click().should(() => {
        expect(JSON.parse(localStorage.getItem('toDos') || '[]')[0].text).to.eq('Wash clothes')
      })
    });

    it('is expected to render the todo in the app', () => {
      cy.get('svg').click()
      cy.get('[data-cy=todo-list]').should('include.text', 'Wash clothes')
    });
  });

  describe('without an input', () => {
    it('is expected to not store a todo', () => {
      cy.get('svg').click().should(() => {
        expect(localStorage.getItem('toDos')).to.be.null
      })
    });
  });

})
