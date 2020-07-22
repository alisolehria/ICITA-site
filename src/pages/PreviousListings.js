import React from "react";
import PageCarousel from "../components/PageCarousel";

class PreviousListings extends React.Component {
  componentDidMount() {
    document.title = "Previous Conferences";
  }
  render() {
    return <div>Previous Listings</div>;
  }
}

export default PreviousListings;
