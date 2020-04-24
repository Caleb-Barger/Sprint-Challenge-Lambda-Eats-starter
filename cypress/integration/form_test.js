import {v4 as uuid} from 'uuid'

const name = uuid().slice(0,6)
const number=`${uuid().slice(0,3)}-${uuid().slice(0,3)}-${uuid().slice(0,4)}`
const address = `${uuid().slice(0,5)} St.`
const specialInstructions = uuid().slice(0,19)

describe('Form Component Testing', ()=> {
    it('can navigate to the page', ()=> {
        cy.visit('http://localhost:3000/pizza')
    })

    it('can submit a form', ()=> {
        cy.get('input[name="name"')
            .type(name)
    
        cy.get('input[name="number"')
            .type(number)

        cy.get('input[name="address"')
            .type(address)

        cy.get('select[name="size"]')
            .select('M')

        cy.get('input[name="specialInstructions"')
            .type(specialInstructions)  

        cy.get('input[name="quantity"')
            .clear()
            .type(1)

        cy.get('button[name="my-button"]')
            .click()
        
    })




    
    
})