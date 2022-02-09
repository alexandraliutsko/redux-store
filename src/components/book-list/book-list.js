import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./book-list.css";

import { withBookstoreService } from "../hoc/with-bookstore-service";
import BookListItem from "../book-list-item/book-list-item";
import { booksLoaded } from "../../actions";

class BookList extends Component {
  componentDidMount() {
    // 1. receive data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // 2. dispatch action to store
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;

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
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ booksLoaded }, dispatch);
}

// withBookstoreService - gives service data to components props
// connect - gives state data to component
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
