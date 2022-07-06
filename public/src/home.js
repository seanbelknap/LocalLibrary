const _getTotalCount = arr => arr.length;
const getTotalBooksCount = books => _getTotalCount(books);

const getTotalAccountsCount = accounts => _getTotalCount(accounts)


function getBooksBorrowedCount(books) {
  return books.reduce((acc, book)=> {
      let { borrows } = book;
      if(!borrows[0].returned){
        acc++
      }
      return acc
  }, 0)
}

function _topFive (mapArray){
  mapArray.sort((nameA, nameB) => nameA.count < nameB.count ? 1 : -1)
  mapArray.length = 5;
  return mapArray;
}

function getMostCommonGenres(books) {
  const genreAndCount= (genre) => {
    let count = 0;
    for(let book of books){
      if(book.genre === genre) count++
    }
    return {name: genre, count: count};
  }
  const genreList = books.reduce((acc, book)=> {
    if(!acc.includes(book.genre)) acc.push(book.genre)
    return acc
  }, [])
  let genreNames = genreList(books, genre).map(genre => genreAndCount(genre));
  return _topFive(genreNames);
}

function getMostPopularBooks(books) {
  const bookAndCount= (title) => {
    let count = 0;
    for(let book of books){
      if(book.title === title) {
        count += book.borrows.length
      }
    }
    return {name: title, count};
  }
  const titlelist = books.reduce((acc, book)=> {
   if(!acc.includes(book.title)) acc.push(book.title)
    return acc
  }, [])
  console.log(titlelist);
  let listNames = titlelist.map(title => bookAndCount(title));
  console.log(listNames);
  return _topFive(listNames);
}


function getMostPopularAuthors(books, authors) {
  const authorAndCount = (author) => {
    let count = 0;
    for(let book of books){
      if(book.authorId === author.id){
        count+= book.borrows.length
      }
    }
    return {name: `${author.name.first} ${author.name.last}`, count: count};
  }
  let authorNames = authors.map(author => authorAndCount(author))
  return  _topFive(authorNames);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
