import React from "react";
import PageCarousel from "../components/PageCarousel";

class PreviousConferences extends React.Component {
  componentDidMount() {
    document.title = "Previous Conferences";
  }
  render() {
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title_container text-center">
                  <div className="section_title">
                    <h1>Previous Conferences</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
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
