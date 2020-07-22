import React from "react";
import PageCarousel from "../components/PageCarousel";

class Organizers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "Organizers";
    fetch(window.$strapiLink)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div class="intro">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title_container text-center">
                  <div class="section_title">
                    <h1>Organisers</h1>
                  </div>
                </div>
                <div class="intro_text text-center">
                  <p>Organisers section</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Organizers;
