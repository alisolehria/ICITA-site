import React from "react";
import Introduction from "./Introduction";
import Footer from "../components/Footer";
import PageCarousel from "../components/PageCarousel";

class CallForPapers extends React.Component {
  componentDidMount() {
    document.title = "Call For Papers";
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
                    <h1>Call</h1>
                  </div>
                </div>
                <div class="intro_text text-center">
                  <p>Call goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallForPapers;
