import React from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { setSearchQuery } from "../../redux/searchReducer";
import { getVideosFeed } from "../../redux/videosReducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const SearchBarContainer = (props) => {
  const onInputChange = (e) => {
    e.preventDefault();
    props.setSearchQuery(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    props.getVideosFeed(props.searchQuery);

    props.history.push("/");
  };

  return (
    <SearchBar
      onInputChange={onInputChange}
      onFormSubmit={onFormSubmit}
      searchQuery={props.searchQuery}
    />
  );
};

const mapStateToProps = (state) => ({
  searchQuery: state.search.searchQuery,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { setSearchQuery, getVideosFeed })
)(SearchBarContainer);
