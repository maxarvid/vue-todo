describe('When the user edits a Todo', () => {
  beforeEach(() => {
    cy.visitWithTodo()
  });

  it('is expected to display an edit icon', () => {
    cy.get('[data-cy="todo-icons"] > :nth-child(2)').should('be.visible')
  });

  it('is expected to allow user to edit a todo when icon is clicked', () => {
    cy.get('[data-cy="todo-icons"] > :nth-child(2)').click()
    cy.get('[data-cy=todo-input]').first().should('have.value', 'Adjust bicycle brakes')
  });

  it('is expected to save the edits the user makes to the Todo', () => {
    cy.get('[data-cy="todo-icons"] > :nth-child(2)').click()
    cy.get('[data-cy=todo-input]').first().type(' when you get home')
    cy.get('[data-cy=todo-input]').first().next().click()
    cy.get('[data-cy=todo-list').first().should('contain.text', 'Adjust bicycle brakes when you get home')
  });
});