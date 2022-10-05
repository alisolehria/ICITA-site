import React from "react";

class Organizers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "Organisers - 16th International Conference on Information Technology and Applications (ICITA)";
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
                        src={require("../assets/img-comm/David_tien1.jpg")}
                        alt=""
                        width="260"
                        height="280"
                      />
                      <p className="organiser_intro mt-2">
                        <b>Dr David Tien</b>
                        <br />
                        IEEE Computer Society Asia-Pacific Area Coordinator
                        <br />
                        Charles Sturt University Australia
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
                        <br />
                        Vice-Chair of IEEE SMC Portugal Section Society Chapter
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/abrar1.jpg")}
                        alt=""
                        width="260"
                        height="350"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr Abrar Ullah</b>
                        <br /> Associate Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/maria2.png")}
                        alt="Prof. Maria Sausa"
                        width="280"
                        height="350"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Maria José Sousa</b>
                        <br /> Pro-Rector for Distance Education, University
                        Institute of Lisbon, Portugal
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
                        <b>Dr Ryad Soobhany</b>
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
                        <b>Dr Imran Razzak</b>
                        <br /> Senior Lecturer,School of Information Technology,
                        Deakin Univesity, Victoria, Australia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/img-comm/pedro.jpg")}
                        alt="Dr Pedro Sebastião"
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr Pedro Sebastião</b>
                        <br /> Assistant Professor, University Institute of
                        Lisbon, Portugal
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
                        <b>Dr Sajid Anwar</b>
                        <br /> Associate Professor, Institute of Management
                        Sciences, Peshawar
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>International Advisor</h4>
                      <img
                        src={require("../assets/img-comm/chan.jpg")}
                        width="210"
                        height="240"
                        alt="David Tien"
                      />
                      <br />
                      <p className="organiser_intro  mt-2">
                        <b> Anthany Chan</b>
                        <br /> Charles Sturt University Australia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/teresa.jpg")}
                        alt="Dr Teresa Guarda"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Teresa Guarda</b>
                        <br />
                        Director of the CIST Research and Innovation Center,
                        Faculty of Systems and Telecommunications, UPSE, Ecuador{" "}
                        {/* <br />
                        Vice President of the International Society for the
                        Study of Information, Austria */}
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/gupta.jpeg")}
                        alt="Dr B B Gupta"
                        width="200"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr B B Gupta</b>
                        <br />
                        Director, International Center for AI and Cyber Security
                        Research and Innovation, Asia University, Taichung, 413,
                        Taiwan
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/fernando.jpg")}
                        alt="Dr Fernando Moreira"
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
                        src={require("../assets/img-comm/shah.jpeg")}
                        alt="Abdul Rauf"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Shah Nazir</b>
                        <br /> Assistant Professor, University of Swabi,
                        Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Poster Chair</h4>
                      <img
                        src={require("../assets/img-comm/isabel.jpg")}
                        alt="Dr Isabel Alexandre"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Isabel Alexandre</b>
                        <br /> Assistant Professor, University Institute of
                        Lisbon, Portugal
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Poster Chair</h4>
                      <img
                        src={require("../assets/img-comm/joana.jpg")}
                        alt="Joana Martinho da Costa"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Joana Martinho da Costa</b>
                        <br /> Invited Assistant Professor, University Institute
                        of Lisbon, Portugal
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/sergio.jpg")}
                        alt="Dr Sérgio Moro"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Sérgio Moro</b>
                        <br />
                        Associate Professor, University Institute of Lisbon,
                        Portugal
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/Babar.jpg")}
                        alt="Dr Babar Shah"
                        width="200"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Babar Shah</b>
                        <br /> Associate Professor, Zayed University, Abu Dhabi,
                        UAE
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
