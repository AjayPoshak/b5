import React, { Component } from 'react'
import SearchBooks from '../../components/Search'
import BookDetails from './BookDetails'
import {connect} from 'react-redux'
import {fetchBookDetails} from './AddBookActionCreators'
// import '../../styles/reset.css'
// import '../../styles/AddBook.css'
import '../../styles/less/demo.less'

class AddBook extends Component {

  componentDidMount () {
    this.props.dispatch(fetchBookDetails('http://www.58f204ba33e3131200bdde85.mockapi.io/getBookDetails'));
  }
  render () {
    return (
      <div>
        <h2 className='page-header'>Add Books to reading list</h2>
        <section className='book-entry-container'>
          <SearchBooks />
          {/* <BookDetails data={this.props.bookDetail.data} />
          <section className='add-book-btn'>Add Book</section> */}
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookDetail: state.AddBook
  }
}

export default connect(mapStateToProps)(AddBook);
