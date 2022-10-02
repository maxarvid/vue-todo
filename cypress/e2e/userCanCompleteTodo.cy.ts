describe('When user intends to complete a Todo', () => {
  beforeEach(() => {
    cy.visitWithTodo({ text: 'Get groceries', id: '1', completed: false })
  });

  it('is expected to render a completion icon', () => {
    cy.get("[data-cy=todo-icons]").children().first().should('be.visible')
  });

  it('is expected to store the change in localStorage upon click', () => {
    cy.get("[data-cy=todo-icons]").children().first().click().should(() => {
      expect(JSON.parse(localStorage.getItem('toDos') || '[]')[0].completed).to.be.true
    })
  })

  it('is expected to put a strikethrough on Todo upon click', () => {
    cy.get("[data-cy=todo-icons]").children().first().click()
    cy.get("[data-cy=todo-text]").should('have.class', 'line-through')
  });

  it('is expected not to display the complete icon after completion', () => {
    cy.get("[data-cy=todo-icons]").children().first().click()
    cy.get("[data-cy=todo-icons]").children().should('have.length', 2)
  })
});