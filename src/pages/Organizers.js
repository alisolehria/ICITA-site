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
                      <img src={require("../assets/blank.png")} alt="" />
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
                      <img src={require("../assets/blank.png")} alt="" />
                      <p className="organiser_intro">
                        Dr. Ryad Soobhany
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>International Chair</h4>
                      <img src={require("../assets/blank.png")} alt="" />
                      <p className="organiser_intro">
                        Dr. Sajid Anwar
                        <br /> Associate Professor, Institute of Management
                        Sciences, Peshawar
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>Posters Chair</h4>
                      <img src={require("../assets/blank.png")} alt="" />
                      <p className="organiser_intro">
                        Talal Shaikh
                        <br /> Associate Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <h4>International Advisor</h4>
                      <img src={require("../assets/david-sm.jpg")} alt="" />
                      <p className="organiser_intro">
                        Dr. David Tien
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
