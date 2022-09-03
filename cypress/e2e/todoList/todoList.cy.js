
beforeEach(() =>{
    cy.request('http://localhost:3000/reset')
    cy.visit('http://localhost:3000/')
})

describe('Todo List Complied', () => {
    it('Step 1- page initial compiled', () => {
        
        cy.contains('Mi lista de tareas')
    })

    it('Step 2- add new task', () => {

        cy.get('input[name="input-task"]')
            .type('Nueva tarea');
            cy.get('#form-submit').click();
        cy.get('.label-task').contains('Nueva tarea')
    })
})