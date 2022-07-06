const _getTotalCount = arr => arr.length;
const getTotalBooksCount = books => getTotalCount(books);

const getTotalAccountsCount = accounts => getTotalCount(accounts)

function _groupByKey(key){

}
function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
