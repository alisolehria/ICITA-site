import React from "react";
import PageCarousel from "../components/PageCarousel";

class PreviousConferences extends React.Component {
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
                    <h1>Previous Conferences</h1>
                  </div>
                </div>
                <div class="intro_text text-center">
                  <p>Previous conferneces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviousConferences;
