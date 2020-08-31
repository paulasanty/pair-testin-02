/// <reference types="cypress"/>

const payloadAlterBook = require('../payloads/alter-book.json')

function alterBooks(idBook) {
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers:{
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadAlterBook

    })
}

export{ alterBooks}