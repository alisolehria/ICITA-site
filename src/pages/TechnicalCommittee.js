import React from "react";
import Introduction from "./Introduction";
import PageCarousel from "../components/PageCarousel";
import Footer from "../components/Footer";

class TechnicalCommittee extends React.Component {
  componentDidMount() {
    document.title = "Technical Committee";
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
                    <h1>Technical committee</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <p>TBA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicalCommittee;
