import React from "react";
import { Link } from "react-router-dom";

class CallForWorkshop extends React.Component {
  componentDidMount() {
    document.title = "Call For Papers";
  }
  render() {
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title_container text-center">
                  <div className="contact_title">
                    <h1> Call for Workshop Proposals</h1>
                  </div>
                </div>
                <div className="intro_left_content text_left">
                  <p align="left">
                    The academics, professionals, researchers, and industrial
                    community is invited to submit proposals for the
                    organization of Workshops/Special Sessions at ICITA 2021 -
                    15th International Conference on Information Technology and
                    Applications, to be held at Dubai, UAE, 13-14th Nov 2021.
                    ICITA is a prestigious global forum for researchers and
                    practitioners to present and discuss the most recent
                    innovations, trends, results, experiences, and concerns in
                    the several perspectives of Information Systems and
                    Technologies.
                  </p>
                  <h4>Workshop/Special Session Format</h4>
                  <p align="left">
                    Workshops/Special Sessions should focus on a specific
                    scientific subject on the scope of ICITA'21 but not directly
                    included on the main conference areas. Each workshop/Special
                    Session will be coordinated by an organizing committee
                    composed of, at least, two researchers in the field,
                    preferably from different institutions and different
                    countries. The organizers should create an international
                    program committee for the Workshop/Special Session, with
                    recognized researchers within the specific Workshop/Special
                    Session scientific area. The selection of Workshops/Special
                    Sessions will be performed by ICITA'21 Workshop/Special
                    Session Chairs. Workshops/Special Session papers will be
                    published in the conference main proceedings.
                  </p>
                  <h4>Workshop/Special Session organization</h4>

                  <div align="left">
                    <div>
                      <b>
                        {" "}
                        The organizing committee of each Workshop/Special
                        Session will be responsible for:
                      </b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>
                        Producing and distributing the Workshop/Special Session
                        Call for Papers (CFP)  
                      </li>
                      <li>
                        Coordinating the review and selection process for the
                        papers submitted to the Workshop/Special Session.
                      </li>
                      <li>
                        Delivering the final versions of the papers accepted for
                        the Workshop/Special Session in accordance with the
                        guidelines and deadlines defined by ICITA'21 organizers;
                      </li>
                      <li>
                        Coordinating and chairing the Workshop/Special sessions
                        at the conference
                      </li>
                    </ul>
                    <p align="justify">
                      <b>
                        {" "}
                        ICITA'21 organizers reserve the right to cancel any
                        Workshop/Special Session if deadlines are missed or if
                        the number of registered attendees is too low to support
                        the costs associated with the Workshop.
                      </b>
                    </p>
                  </div>

                  <div align="left">
                    <div>
                      <h4>Proposal Content</h4>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>Workshop/Special Session title  </li>
                      <li>
                        Brief description of the specific scientific scope of
                        the Workshop/Special Session
                      </li>
                      <li>List of topics of interest (max 15 topics);</li>
                      <li>
                        Name, postal address, phone and email of all the members
                        of the Workshop Organizing Committee
                      </li>
                      <li>
                        Preliminary proposal for the Workshop/Special Session
                        should include Program Committee (Names and
                        affiliations)
                      </li>
                    </ul>
                    <p align="justify">
                      <b>
                        <Link to="/importantdates">Important Dates</Link>
                      </b>
                    </p>

                    <p>
                      Authors are kindly invited to submit their formatted full
                      papers including results, tables, figures, and references.
                      Please, read authors guidelines carefully.
                    </p>
                    <div class="button button_2 intro_button">
                      <Link to="/submissions">
                        <span>
                          Submissions{" "}
                          <img src={require("../assets/arrow.png")} alt="" />
                        </span>
                      </Link>
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

export default CallForWorkshop;
