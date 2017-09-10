import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Searching} from './ActionCreators'

class SearchBooks extends Component {
  constructor(){
    super();
    this.search = this.search.bind(this);
  }

  search(event){
    // console.log(event.target.value);
    this.props.dispatch(Searching('https://www.googleapis.com/books/v1/volumes', event.target.value))
  }

  generateResultAuthors(){
    const {items} = this.props.searchData
    if(items && items.length > 0) {
        let authResult = []
        items.map((element, index) => {
            authResult = element.volumeInfo.authors.map((author, index) => {
                return <p>{`${author}`}</p>
            })
        })
        return authResult
    }
    return null
  }

  renderSearchResults(){
    const {items} = this.props.searchData
    const authors = this.generateResultAuthors()
    if(items && items.length > 0){
        const resultsArr = items.map((element, index) => {
            return (
                <div key={`${index}`}>
                    <img src={`${element.volumeInfo.imageLinks.smallThumbnail}`} alt={`${element.volumeInfo.title}`}/>

                    <p>{`${element.volumeInfo.title}`}</p>
                    <section className='authors'>
                        {authors}
                    </section>
                </div>
            )
        })
        return resultsArr
    }
    return null
  }

  render () {
    const searchResults = this.renderSearchResults();
    return (
      <section className='search-container'>
        <input type='search' placeholder='Search Books, Authors...' onKeyPress={this.search} onKeyDown={this.search}/>
        <section className='search-results'>
            <div className=''>
                <img src='http://books.google.com/books/content?id=bWhH1fjliCwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api' alt='ABC' />
                <p className='search-title'>The Wellington</p>
                <section className='authors'>
                    <p>Kamal Khatri</p>
                    <p>Chutyia Nai</p>
                    <p>Gabbar Gaandu</p>
                </section>
            </div>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        searchData: state.SearchData.data
    }
}

export default connect(mapStateToProps)(SearchBooks)
