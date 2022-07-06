const findAuthorById = (authors, id) => authors.find(author => author.id === id);

const findBookById = (books, id) => books.find(book => book.id === id) 

function partitionBooksByBorrowedStatus(books) {
  // return books.filter(book => )
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  const returnedBooks = books.filter(book => book.borrows[0].returned);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let result = [];

  for(let i = 10; i > 0; i--){
    let borrows = book.borrows[i];
    for(let key in accounts){
      if(borrows.id.includes(accounts[key].id)){
       result.push({...borrows, ...accounts[key]})
      }
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
  