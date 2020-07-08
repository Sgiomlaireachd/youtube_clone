import React from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { setSearchQuery } from "../../redux/searchReducer";
import { getVideosFeed } from "../../redux/videosReducer";

class SearchBarContainer extends React.Component {
  onInputChange = (e) => {
    e.preventDefault();
    this.props.setSearchQuery(e.target.value);
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    this.props.getVideosFeed(this.props.searchQuery);
  };

  render() {
    return (
      <SearchBar
        onInputChange={this.onInputChange}
        onFormSubmit={this.onFormSubmit}
        searchQuery={this.props.searchQuery}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.search.searchQuery,
});

export default connect(mapStateToProps, { setSearchQuery, getVideosFeed })(
  SearchBarContainer
);
