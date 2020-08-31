/// <reference types="cypress"/>

import * as DELETEBooks from '../requests/DELETEBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('Delete Books', () => {
    it('Delete um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            cy.log(resAllBooks.body[0].ID)
            DELETEBooks.deleteBook(resAllBooks.body[0].ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200)
            })
        })
    })

    it('Criar e excluir um livro', () => {
        POSTBooks.addBooks().then((resaddBook) => {
            DELETEBooks.deleteBook(resaddBook.body.ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200)
            })
        })

    })
})