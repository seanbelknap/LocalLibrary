const findAccountById = (accounts, id) =>
  accounts.find((account) => account.id === id);

//destructing possible
function sortAccountsByLastName(accounts) {
  return accounts.sort(
    ({ name: { last: accountA } }, { name: { last: accountB } }) =>
      accountA.toLowerCase() > accountB.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows({ id: accountId }, books) {
  return books.reduce((acc, book) => {
    let { borrows } = book;
    for (let borrower of borrows) {
      if (borrower.id === accountId) {
        acc++;
      }
    }
    return acc;
  }, 0);
}

function getBooksPossessedByAccount({id: accountId}, books, authors) {
  return books.reduce((acc, book) => {
    let {borrows} = book;
    for(let borrower of borrows){
      if(borrower.id === accountId && borrower.returned === false){
         for(let author of authors){
          if(author.id === book.authorId){
            book.author = author;
            acc.push(book)
          }
         }
      }
    }
    return acc;
  }, [])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
