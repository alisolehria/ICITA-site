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
                      <h4>Honorary Chair</h4>
                      <img
                        src={require("../assets/img-comm/Gill.jpg")}
                        alt=""
                        width="240"
                        height="280"
                      />
                      <p className="organiser_intro mt-2">
                        <b>Steve Gill</b>
                        <br /> Associate Professor, Head of School of
                        Mathematical and Computer Sciences,
                        <br /> Heriot-Watt University, Edinburgh|<b>Dubai</b>
                        |Malaysia
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Honorary Chair</h4>
                      <img
                        src={require("../assets/img-comm/alvaro.jpg")}
                        alt="Prof. Alvaro Rocha"
                        width="260"
                        height="280"
                      />
                      <p className="organiser_intro mt-2">
                        <b>Professor. Álvaro Rocha</b>
                        <br /> Professor, University of Lisbon, Portugal
                        <br /> President of AISTI (Iberian Association for
                        Information Systems and Technologies) <br />
                        Chair of IEEE SMC Portugal Section Society Chapter
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/abrar.jpg")}
                        alt=""
                        width="260"
                        height="350"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Abrar Ullah</b>
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-6">
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/img-comm/Ryad.jpg")}
                        alt=""
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Ryad Soobhany</b>
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/img-comm/Imran.jpg")}
                        alt="Imran Razzak"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Imran Razzak</b>
                        <br /> Senior Lecturer,School of Information Technology,
                        Deakin Univesity, Victoria, Australia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>Posters Chair</h4>
                      <img
                        src={require("../assets/img-comm/talal.png")}
                        alt="Talal Shaikh"
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Talal Shaikh</b>
                        <br /> Associate Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>International Chair</h4>
                      <img
                        src={require("../assets/img-comm/sajid.png")}
                        alt=""
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Sajid Anwar</b>
                        <br /> Associate Professor, Institute of Management
                        Sciences, Peshawar
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>International Advisor</h4>
                      <img
                        src={require("../assets/img-comm/david.png")}
                        width="230"
                        height="240"
                        alt="David Tien"
                      />
                      <br />
                      <p className="organiser_intro  mt-2">
                        <b> Dr. David Tien</b>
                        <br /> Vice Chairman, IEEE Computer Chapter, NSW,
                        Australia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/Ibrahim.jpg")}
                        alt="Ibrahim Nafees"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Professor. Ibrahim A. Hameed</b>
                        <br /> Professor, Norwegian University of Science, and
                        Technology (NTNU) <br /> Chair of the IEEE Computational
                        Intelligence Society (CIS), Norway
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Dr. Abdul Qayyum"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. Abdul Qayyum</b>
                        <br /> Lecturer, University of Burgundy, France
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/fernando.jpg")}
                        alt="Dr. Fernando Moreira"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Professor. Fernando Moreira</b>
                        <br /> Professor Catedrático, Diretor do Departamento de
                        Ciência e Tecnologia, Universidade Portucalense: Porto,
                        Portugal
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/Rauf.jpg")}
                        alt="Abdul Rauf"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Abdul Rauf</b>
                        <br /> RISE Research Institute of Sweden
                      </p>
                    </div>
                  </div>

                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Publicity Chair</h4>
                      <img
                        src={require("../assets/img-comm/maria2.png")}
                        alt="Prof. Maria Sausa"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Professor. Maria José Sousa</b>
                        <br /> Professor, University Institute of Lisbon,
                        Portugal
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Publicity Chair</h4>
                      <img
                        src={require("../assets/img-comm/SNoor.png")}
                        alt="Salma Noor"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Salma Noor</b>
                        <br /> Assistant Professor, Shaheed Benazir Bhutto Women
                        University, Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/gupta.jpeg")}
                        alt="Prof. Maria Sausa"
                        width="230"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. B B Gupta</b>
                        <br />
                        Assistant Professor, National Institute of Technology
                        kurukshetra, India
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/tanveer.jpg")}
                        alt="Prof. Maria Sausa"
                        width="230"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. M Tanveer</b>
                        <br />
                        Associate Professor Indian Institute of Technology
                        Indore, India
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
