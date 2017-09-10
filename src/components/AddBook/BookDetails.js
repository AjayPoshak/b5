import React, {Component} from 'react'

class BookDetails extends Component {
    renderAuthors() {
        const {authors} = this.props.data
        console.log(authors)
        if(authors && authors.length > 0){
            const authorsArr = authors.map((item, index) => {
                console.log(item)
                return (<div key={`${item.id}`}>
                  <img src={`${item.authorImage}`} alt={`${item.authorName}`} />
                  <p>{`${item.authorName}`}</p>
                </div>)
            })
          return authorsArr
        }
        return null
    }

    renderQuotes(){
        const {quotes} = this.props.data
        if(quotes && quotes.length > 0){
            const quotesArr = this.props.data.quotes.map((q, index) => {
                return(<p key={`${q.id}`}>{`${q.q1}`}</p>)
            })
            return quotesArr
        }
        return null
    }

    render () {
        const { title, thumbNail, coverImage } = this.props.data
        const authors = this.renderAuthors()
        const quotes = this.renderQuotes()

        return (
          <section className='add-books-container'>
            <div className='book-title'>
              <img src={`$thumbnail`} alt='book title' />
              <p>{`${title}`}</p>
            </div>
            <div className='author-area'>
              <h2 className='section-heading'>Authors</h2>
              {authors}
            </div>
            <div className='book-quotes'>
              <h2 className='section-heading'>Write Something about Book</h2>
              {quotes}
            </div>
            <div className='cover-image'>
              <h2 className='section-heading'>Cover Image<span className='sub-text'>(Or you can choose to upload your own book image)</span></h2>
              <img src={`${coverImage}`} alt={`${title}`} />
            </div>
          </section>
        )
      }
}

export default BookDetails
