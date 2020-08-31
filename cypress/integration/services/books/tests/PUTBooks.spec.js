/// <reference types="cypress"/>
import * as PUTBooks from '../requests/PUTBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('PUT Books', () => {
    it('Alterar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.alterBooks(resAllBooks.body[0].ID).should((resAlterBooks) => {
                expect(resAlterBooks.status).to.eq(200)
                expect(resAlterBooks.body).to.be.not.null
                expect(resAlterBooks.body.Title).to.eq('The dog')
            })
        })
    });

    it('Criar um livro', () => {
        POSTBooks.addBooks().then((resAddBook) => {
            PUTBooks.alterBooks(resAddBook.body.ID).should((resAlterBooks) => {
                expect(resAlterBooks.status).to.eq(200)
                expect(resAlterBooks.body).to.be.not.null
                expect(resAlterBooks.body.Title).to.eq('The dog')
            })
        })
    });
});