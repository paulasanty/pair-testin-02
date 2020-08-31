/// <reference types="cypress"/>

import * as POSTBooks from '../requests/POSTBooks.request'

context('POST Books', () => {
    it('Adicionar um novo livri', () => {
        POSTBooks.addBooks().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.Title).to.eq("A gata")
        })
    });
});