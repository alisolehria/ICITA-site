import React from "react";

class Speaker1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "Keynote Speakers - 15th International Conference on Information Technology and Applications (ICITA)";
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
                    <h1>Keynote Speaker</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <img
                        src={require("../assets/img-comm/David_tien.jpg")}
                        alt=""
                        width="260"
                        height="240"
                      />
                      <h4>Dr.David Tien</h4>

                      <div className="organiser_intro mt-2 col-md-12">
                        <div className="col-md-12">
                          <p align="center">
                            <i>
                              School of Computing, Mathematics and Engineering
                              Charles Sturt University, NSW Australia
                            </i>
                          </p>
                        </div>
                      </div>
                      <br></br>
                      <div className="intro_left_content text_left">
                        <p align="left">
                          Dr David Tien received his undergraduate, master's and
                          PhD degrees in Computer Science, Pure Mathematics and
                          Electrical Engineering from Chinese Academy of
                          Sciences, Ohio State University, USA, and the
                          University of Sydney, Australia, respectively. Dr
                          Tien’s research interests are in the areas of image
                          and signal processing, natural language processing,
                          artificial intelligent, telecommunication coding
                          theory and biomedical engineering. Since 1986 he has
                          published over 120 peer reviewed articles. Dr Tien is
                          currently teaching computer science at the Charles
                          Sturt University, Australia and serves as the Chairman
                          of Conference Coordination Committee, IEEE NSW.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/tanveer.png")}
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
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/Qayyum.jpg")}
                        alt="Dr. Abdul Qayyum"
                        width="230"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. Abdul Qayyum</b>
                        <br /> Lecturer, University of Burgundy, France
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speaker1;
