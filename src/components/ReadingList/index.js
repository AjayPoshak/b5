import React, {Component} from 'react'
import {connect} from 'react-redux'
import Cards from '../Views/Cards'
import {fetchingReadingData} from './ActionCreators'
// import '../../styles/reset.css'
// import '../../styles/readingList.css'

class ReadingList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchingReadingData("http://58f204ba33e3131200bdde85.mockapi.io/readingList"));
  }
  renderBookCards(){
      const {data} = this.props.readingList
      if (data && data.length > 0) {
        const BookCards = data.map((book, index) => {
          return <Cards data={book} key={index}/>
        })
        return BookCards
      }
      return null
  }
  render() {
    const bookCards = this.renderBookCards();
    return (
      <section className="reading-list-container">
        <section className="header">
          <img className="avatar" src="https://avatars2.githubusercontent.com/u/7375457?v=3&s=460" alt=""/>
          <p>Ajay&rsquo; Reading List</p>
        </section>
        <section className="card-container">
          {bookCards}
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {readingList: state.readingList}
}

export default connect(mapStateToProps)(ReadingList);
