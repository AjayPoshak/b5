import React, {Component} from 'react'
// import '../../styles/Cards.css'

class Cards extends Component {
  render() {
    return (
      <section className="cards">
        <div className="metadata">
          <p>{this.props.data.updatedOn}</p>
          <p>{this.props.data.classification}</p>
        </div>
        <p className="title">{this.props.data.title}</p>
        <div className="quotes">
          {Object.keys(this.props.data.quotes).map((q, index) => {
            return (
              <span key={this.props.data.quotes[q].quote_id}>
                <p>{this.props.data.quotes[q].q1}</p>
              </span>
            )
          })}
        </div>
        <div className="cover-image">
          <img src={this.props.data.cover_image} alt={this.props.data.title}/>
        </div>
        <div className="authors">
          {Object.keys(this.props.data.authors).map((author, index) => {
            return (
              <span key={this.props.data.authors[author].author_id}>
                <img src={this.props.data.authors[author].author_image} alt={this.props.data.authors[author].author_name}/>
                <p>{this.props.data.authors[author].author_name}</p>
              </span>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Cards;
