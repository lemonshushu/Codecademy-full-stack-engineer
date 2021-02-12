import React, { Component } from 'react'
import './SearchBar.css';


export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
       term: '',
       location: '',
       sortBy: 'best_match',
    }
    this.sortByOptions = {
      'Best Match':'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    }
  }

  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    }
    else {
      return '';
    }
  }

  handleSortByChange(sortByOption){
    this.setState({
      sortBy: sortByOption,
    })
  }
  

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      const sortByOptionValue = this.sortByOptions[sortByOption];
      return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    })
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
}