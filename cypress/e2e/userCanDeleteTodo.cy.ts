describe('When the user wants to delete a Todo', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: () => {
        localStorage.setItem('toDos', JSON.stringify(["Laundry", "Make Todo App", "Walk dog"]))
      }
    })
  });

  it('is expected to render a delete button', () => {
    cy.get('[data-cy=todo-list]').children().first().get('[data-cy=todo-delete-btn]').should('be.visible')
  });

  it('is expected to remove the deleted todo when clicked', () => {
    cy.get('[data-cy=todo-list]').children().first().get('[data-cy=todo-delete-btn]').click()
    cy.get('[data-cy=todo-list]').children().should('not.include.text', 'Laundry')
  });

  it('is expected to remove the todo from localStorage', () => {
    cy.get('[data-cy=todo-list]').children().first().get('[data-cy=todo-delete-btn]').should(() => {
      expect(JSON.parse(localStorage.getItem('toDos') || "[]")).to.not.include.text('Laundry')
    })
  });
});