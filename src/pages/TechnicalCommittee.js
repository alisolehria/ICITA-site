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
        <div class="intro">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title_container text-center">
                  <div class="section_title">
                    <h1>Technical committee</h1>
                  </div>
                </div>
                <div class="intro_text text-center">
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
