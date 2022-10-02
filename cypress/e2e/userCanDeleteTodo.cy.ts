describe('When the user wants to delete a Todo', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: () => {
        localStorage.setItem('toDos', JSON.stringify([{ text: "Laundry", id: '1' }, { text: "Make Todo App", id: '2' }, { text: "Walk dog", id: '3' }]))
      }
    })
  });

  it('is expected to render a delete button', () => {
    cy.get('[data-cy=todo-list]').children().first().get('svg').should('be.visible')
  });

  it('is expected to remove the deleted todo when clicked', () => {
    cy.get('[data-cy=todo-list]').children().first().within(() => {
      cy.get('[data-cy=todo-icons]').last().click()
    })
    cy.get('[data-cy=todo-list]').children().should('not.include.text', 'Laundry')
  });

  it('is expected to remove the todo from localStorage', () => {
    cy.get('[data-cy=todo-list]').children().first().within(() => {
      cy.get('[data-cy=todo-icons]').last().click().should(() => {
        expect(JSON.parse(localStorage.getItem('toDos') || "[]")).to.not.contain('Laundry')
      })
    })
  });
});