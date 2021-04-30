import React from "react";
import PageCarousel from "../components/PageCarousel";

class Speakers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "Organisers - ICITA Conference";
  }

  render() {
    const { data } = this.state;
    return (
      <div className="speakers">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container text-center">
                <div className="section_subtitle">Key note</div>
                <div className="section_title">
                  <h1>Speakers</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row speakers_row">
            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img src={require("../assets/blank.png")} alt="" />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#">TBC</a>
                  </div>
                  <div className="speaker_title">TBC</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img src={require("../assets/blank.png")} alt="" />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#">TBC</a>
                  </div>
                  <div className="speaker_title">TBC</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img src={require("../assets/blank.png")} alt="" />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#">TBC</a>
                  </div>
                  <div className="speaker_title">TBC</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img src={require("../assets/blank.png")} alt="" />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#">TBC</a>
                  </div>
                  <div className="speaker_title">TBC</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img src={require("../assets/blank.png")} alt="" />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#">TBC</a>
                  </div>
                  <div className="speaker_title">TBC</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img src={require("../assets/blank.png")} alt="" />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#">TBC</a>
                  </div>
                  <div className="speaker_title">TBC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
