describe('When user intends to complete a Todo', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: () => {
        localStorage.setItem('toDos', JSON.stringify([{ text: 'Get groceries', id: '1', completed: false }]))
      }
    })
  });

  it('is expected to render a completion icon', () => {
    cy.get("[data-cy=todo-icons]").children().first().should('be.visible')
  });

  it.only('is expected to store the change in localStorage upon click', () => {
    cy.get("[data-cy=todo-icons]").children().first().click().should(() => {
      expect(JSON.parse(localStorage.getItem('toDos') || '[]')[0].completed).to.be.true
    })
  })

  it('is expected to put a strikethrough on Todo upon click', () => {
    cy.get("[data-cy=todo-icons]").children().first().click()
    cy.get("[data-cy=todo-list]").children().first().should('have.css', 'text-decoration: line-through')
  });
});