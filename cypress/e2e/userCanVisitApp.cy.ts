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

  it('is expected to save a todo in localStorage upon submission', () => {
    cy.get('[data-cy=todo-input]').type('Wash clothes')
    cy.get('[data-cy=save-todo-btn').click().should(()=>{
      expect(localStorage.getItem('toDos')).to.contain.text('Wash clothes')
    })
    
  });
})
