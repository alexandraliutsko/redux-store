const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  };
};

export {
  booksLoaded,
  booksRequested,
  booksError
};
