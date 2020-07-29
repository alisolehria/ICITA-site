import React from "react";

class Organizers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "Organisers";
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title_container text-center">
                  <div className="section_title">
                    <h1>Organisers</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/abrar.jpg")}
                        alt=""
                        width="260"
                        height="350"
                      />
                      <p className="organiser_intro">
                        Dr. Abrar Ullah
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-6">
                      <h4>Deputy Chair</h4>
                      <img
                        src={require("../assets/Ryad.jpg")}
                        alt=""
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro">
                        <b>Dr. Ryad Soobhany</b>
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>International Chair</h4>
                      <img src={require("../assets/blank.png")} alt="" />
                      <p className="organiser_intro">
                        <b>Dr. Sajid Anwar</b>
                        <br /> Associate Professor, Institute of Management
                        Sciences, Peshawar
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>Posters Chair</h4>
                      <img
                        src={require("../assets/talal.png")}
                        alt=""
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro">
                        <b>Talal Shaikh</b>
                        <br /> Associate Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <h4>International Advisor</h4>
                      <img src={require("../assets/david-sm.jpg")} alt="" />
                      <br />
                      <p className="organiser_intro">
                        <b> Dr. David Tien</b>
                        <br /> Vice Chairman, IEEE Computer Chapter, NSW,
                        Australia
                      </p>
                    </div>
                  </div>
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
