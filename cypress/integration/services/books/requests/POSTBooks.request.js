/// <reference types="cypress"/>

const payloadAddBooks = require('../payloads/add-books.json')

function addBooks() {
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBooks
    })
    
}

export { addBooks}