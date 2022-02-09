import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./book-list.css";

import { withBookstoreService } from "../hoc/with-bookstore-service";
import BookListItem from "../book-list-item/book-list-item";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return <li key={book.id}><BookListItem book={book} /></li>
          })
        }
      </ul>
    );
  };
}

// gets state and returns necessary properties
const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());

      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
    }
  }
}

// withBookstoreService - gives service data to components props
// connect - gives state data to component
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
