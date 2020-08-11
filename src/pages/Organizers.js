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
                    <div className="col-xl-6 col-md-6">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/abrar.jpg")}
                        alt=""
                        width="260"
                        height="350"
                      />
                      <p className="organiser_intro">
                        <b>Dr. Abrar Ullah</b>
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Honorary Chair</h4>
                      <img
                        src={require("../assets/Gill.jpg")}
                        alt=""
                        width="260"
                        height="350"
                      />
                      <p className="organiser_intro">
                        <b>Steve Gill</b>
                        <br /> Head of School of Mathamtical and Computer
                        Science, Heriot-Watt University, Edinburgh|<b>Dubai</b>
                        |Malaysia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-6">
                      <h4>General Co-chair</h4>
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
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/Imran.jpg")}
                        alt="Imran Razzak"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro">
                        <b>Dr. Imran Razzak</b>
                        <br /> Senior Lecturer,School of Info Technology, Deakin
                        Univesity, Victoria, Australia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>Posters Chair</h4>
                      <img
                        src={require("../assets/talal.png")}
                        alt="Talal Shaikh"
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
                    <div className="col-xl-6 col-md-6">
                      <h4>International Chair</h4>
                      <img src={require("../assets/sajid.png")} alt="" />{" "}
                      <p className="organiser_intro">
                        <b>Dr. Sajid Anwar</b>
                        <br /> Associate Professor, Institute of Management
                        Sciences, Peshawar
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>International Advisor</h4>
                      <img
                        src={require("../assets/david.png")}
                        width="230"
                        height="240"
                        alt="David Tien"
                      />
                      <br />
                      <p className="organiser_intro">
                        <b> Dr. David Tien</b>
                        <br /> Vice Chairman, IEEE Computer Chapter, NSW,
                        Australia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-4">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/Ibrahim.jpg")}
                        alt="Ibrahim Nafees"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro">
                        <b>Dr. Ibrahim A. Hameed</b>
                        <br /> Professor, Department of ICT and Natural
                        Sciences, Norwegian University of Science, and
                        Technology (NTNU), Norway
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/Qayyum.png")}
                        alt="Dr. Abdul Qayyum"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro">
                        <b>Dr. Abdul Qayyum</b>
                        <br /> Lecturer, University of Burgundy, France
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/Rauf.jpg")}
                        alt="Abdul Rauf"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro">
                        <b>Dr. Abdul Rauf</b>
                        <br /> RISE Research Institute of Sweden
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
