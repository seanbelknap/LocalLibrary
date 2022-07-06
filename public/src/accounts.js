const findAccountById = (accounts, id) => accounts.find((account) => account.id === id)

//destructing possible
function sortAccountsByLastName(accounts) {
  // const {name: [first, last ]} = accounts;
  return accounts.sort(({name: {last : accountA}}, {name: {last : accountB}} ) =>
    accountA.toLowerCase() > accountB.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
