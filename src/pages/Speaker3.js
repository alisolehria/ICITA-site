import React from "react";

class Speaker3 extends React.Component {
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
                        src={require("../assets/img-comm/quafafou.jpg")}
                        alt=""
                        width="230"
                        height="260"
                      />
                      <h4>Prof.Mohamed Quafafou</h4>

                      <div className="organiser_intro mt-2 col-md-12">
                        <div className="col-md-12">
                          <p align="center">
                            <i>
                              Professor of computer science, Aix-Marseille
                              University, France
                            </i>
                          </p>
                        </div>
                      </div>
                      <br></br>
                      <div className="intro_left_content text_left">
                        <p align="left">
                          The speaker is a Professor of computer science at
                          Aix-Marseille University. His main research interests
                          are in Data Mining theory and applications. Prior to
                          joining Aix-Marseille University in 2005, he served as
                          Professor at Avignon University from 2002 to 2004 and
                          as Assistant Professor at University of Nantes from
                          1995 to 2001. Mohamed Quafafou received his
                          Habilitation Ph.D. in 2000 on Rough set Theory and
                          Data mining and his Ph.D. in Computer Science from
                          INSA Lyon, in 1992. He received an M.Sc. in computer
                          science from Paul Sabatier University (Toulouse). For
                          about 25 years, he developed research on data mining,
                          rough sets, web information extraction, and other
                          topics. In partnership with France Telecom, he
                          developed the first French web mining system to
                          discover emergent web communities. He headed the Geobs
                          Data Analyzer project which aimed at developing a
                          theoretical foundation for spatial data mining
                          covering a large area of applications, such as
                          environment, marketing, social analysis, etc. He is
                          the head of the research group on “data mining at
                          scale” at LIS-CNRS. He supervised more than 20 Ph.D.
                          theses and more than 60 M.Sc. student research
                          projects. He has been expert for several French
                          National and International projects. Professor Mohamed
                          Quafafou is with Polytech Marseille, where he leads
                          teaching Information Systems and Data Science. He also
                          teaches M.Sc. courses at Aix-Marseille University and
                          University of Science and Technology of Hanoi. He is
                          the head of computer science department at Polytech
                          Marseille.
                        </p>
                      </div>
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

export default Speaker3;
