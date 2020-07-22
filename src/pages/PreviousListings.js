import React from "react";
import PageCarousel from "../components/PageCarousel";

class PreviousListings extends React.Component {
  componentDidMount() {
    document.title = "Previous Conferences";
  }
  render() {
    return (
      <div>
        <div class="intro">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title_container text-center">
                  <div class="section_title">
                    <h1>Listings</h1>
                  </div>
                </div>
                <div class="intro_text text-center">
                  <p>Prev Listings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviousListings;
