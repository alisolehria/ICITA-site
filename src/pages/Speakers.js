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
                  <img
                    src={require("../assets/img-comm/blank.png")}
                    alt=""
                    width="290"
                    height="270"
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  {/* <div className="speaker_name">
                    <a href="#/speaker1" style={{ fontSize: "14px" }}>
                      Dr.David Tien
                    </a>
                  </div>
                  <div className="speaker_title">
                    <a href="#/speaker1" style={{ color: "white" }}>
                      {" "}
                      Charles Sturt University, NSW Australia
                    </a>
                  </div> */}
                  TBC
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/img-comm/blank.png")}
                    alt=""
                    width="260"
                    height="270"
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  {/* <div className="speaker_name">
                    <a href="#/speaker2" style={{ fontSize: "14px" }}>
                      Dr.Anthony Brooks
                    </a>
                  </div>
                  <div className="speaker_title">
                    <a href="#/speaker2" style={{ color: "white" }}>
                      Aalborg University, Denmark
                    </a>
                  </div> */}
                  TBC
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/img-comm/blank.png")}
                    alt=""
                    width="230"
                    height="260"
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  {/* <div className="speaker_name">
                    <a href="#/speaker3" style={{ fontSize: "14px" }}>
                      Prof.Mohamed Quafafou
                    </a>
                  </div>
                  <div className="speaker_title">
                    <a href="#/speaker3" style={{ color: "white" }}>
                      Aix-Marseille University, France
                    </a>
                  </div> */}
                  TBC
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
