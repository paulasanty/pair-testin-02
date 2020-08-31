/// <reference types="cypress"/>

import * as GETBooks from '../requests/GETBooks.request';

describe('GET Books', () => {
    it('Listar todos os livros', () => {
        GETBooks.allBooks().should((response) => {
            cy.log(response.statusText)
        })
    });
});