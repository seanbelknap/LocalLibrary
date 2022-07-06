const findAuthorById = (authors, id) => authors.find(author => author.id === id);

const findBookById = (books, id) => books.find(book => book.id === id) 

function partitionBooksByBorrowedStatus(books) {
  // return books.filter(book => )
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  const returnedBooks = books.filter(book => book.borrows[0].returned);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  return accounts.reduce((acc, account) => {
    let borrowers = book.borrows.find(borrow => borrow.id === account.id)
    if(borrowers){
      acc.push({...borrowers, ...account})
    }
    return acc
  }, [])
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
  