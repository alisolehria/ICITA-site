import React from "react";
import { Link } from "react-router-dom";

class CallForPapers extends React.Component {
  componentDidMount() {
    document.title = "Call For Papers";
  }
  render() {
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="col text-center">
                  <div className="section_title_container text-center">
                    <div className="contact_title">
                      <h1> Call for Papers</h1>
                    </div>
                  </div>
                  <div className="intro_left_content text_left">
                    <p align="left">
                      The purpose of ICITA is to provide a platform for
                      academics and professionals in computer technology to{" "}
                      <b>
                        publish, present, meet, exchange ideas, and establish
                        professional networks.
                      </b>{" "}
                      It is a forum for specific disciplinary research, as well
                      as on multi-disciplinary studies.{" "}
                    </p>
                    <p align="left">
                      Topics for publication and presentation can include, but
                      are not limited to the following research and development
                      areas/fields:
                    </p>

                    {/* <div align="left">
                    <div>
                      <b>Cloud Computing</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li> Public / Hybrid / Private cloud </li>
                      <li>Cloud architecture</li>
                      <li>Cloud platforms</li>
                      <li>Cloud infrastructure</li>
                      <li>Cloud applications</li>
                      <li>Cloud clients</li>
                      <li>
                        Social, ethical and privacy issues surrounding cloud
                        computing
                      </li>
                    </ul>
                  </div>
                  <div align="left">
                    <div>
                      <b>Intelligent Computing</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li> Agent-based modeling</li>
                      <li>Computer vision</li>
                      <li>Signal and Image/Video Processing</li>
                      <li>Biomedical Engineering</li>
                      <li>Robotics</li>
                      <li>IOT </li>
                    </ul>
                  </div>
                  <div align="left">
                    <div>
                      <b>Artificial Intelligence</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>Machine Learning </li>
                      <li>Deep Learning </li>
                      <li>Data Mining</li>
                      <li>Natural Language Processing</li>
                      <li>Computational Intelligence </li>
                      <li>Evolutionary Computation </li>
                    </ul>
                  </div>
                  <div align="left">
                    <div>
                      <b>Data Science</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>Knowledge Discovery and Data Mining </li>
                      <li>Big Data </li>
                      <li>Big Data Infrastructure</li>
                      <li>Data Visualisation & Analytics</li>
                      <li>Data warehousing </li>
                      <li>Data fusion</li>
                    </ul>
                  </div>

                  <div align="left">
                    <div>
                      <b>Graphics and Games Programming</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>
                        Destructible Environments in GT (Games Technology){" "}
                      </li>
                      <li>Ray Tracing and PBR (Physically Based Rendering) </li>
                      <li>ESG (Educational Serious Games) </li>
                      <li>Computational Geometry </li>
                    </ul>
                  </div>

                  <div align="left">
                    <div>
                      <b>Ontologies</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>Ontology engineering </li>
                      <li>
                        Ontology driven development of information and
                        knowledge-based systems{" "}
                      </li>
                      <li>
                        Ontology driven information and knowledge-based systems{" "}
                      </li>
                      <li>
                        Ontologies for different domains and applications{" "}
                      </li>
                    </ul>
                  </div>
                  <div align="left">
                    <div>
                      <b>Software Engineering</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>Software Engineering Practice </li>
                      <li>Emerging ideas in Software Engineering</li>
                      <li>Software Engineering and Security</li>
                      <li>Software Architecture</li>
                    </ul>
                  </div>
                  <div align="left">
                    <div>
                      <b>Online Learning</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>Digital Media Design</li>
                      <li>Online Assessment</li>
                      <li>Open Learning</li>
                      <li>Synchronous and Asynchronous Learning</li>
                      <li>Learner Engagement</li>
                    </ul>
                  </div>
                  <div align="left">
                    <div>
                      <b>General topics</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>IT in Health Care</li>
                      <li>
                        Remote Sensing, GIS, Instrumentation and Biomedical
                        Engineering
                      </li>
                      <li>Multimedia</li>
                      <li>IT and computing education</li>
                      <li>
                        Engineering Applications of IT - CAD/CAM, CAE, CIM, CNC
                      </li>
                      <li>Computer Networking</li>
                      <li>Web Content Generation, Usage and Management</li>
                      <li>IT and computing workplace issues and ethics</li>
                      <li>Telecommunication and Mobile Communications</li>
                      <li>High Performance Computing</li>
                      <li>Telecommunication and Information Management</li>
                      <li>Human Computer Interaction</li>
                      <li>Electronic Design Automation</li>
                      <li>Signal and Information Processing</li>
                      <li>Information and Communication Systems</li>
                      <li>
                        Fuzzy Logic, Reasoning and Computational Intelligence
                      </li>
                      <li>Mobile Data Communications&nbsp;</li>
                    </ul>
                  </div> */}
                    <div align="left">
                      <div>
                        <b>Conference Tracks</b>
                      </div>
                      <ul style={{ listStyleType: "circle" }} align="left">
                        <li>Cloud computing  </li>
                        <li>Business Process Engineering</li>
                        <li>Machine learning</li>
                        <li>Evolutionary Computing</li>
                        <li>Big Data Analytics</li>
                        <li>Internet of Things and Cyber-Physical Systems</li>
                        <li>Information and Knowledge Management</li>
                        <li>Computer Vision and Image Processing</li>
                        <li>Computer Graphics and Games Programming </li>
                        <li>Mobile Computing</li>
                        <li>Ontology Engineering</li>
                        <li>Software and Systems Modelling</li>
                        <li>Human Computer Interaction</li>
                        <li>Online Learning / E- Learning</li>
                        <li>Computer Networks</li>
                        <li>Web Engineering&nbsp;</li>
                      </ul>
                      <br />
                      <p>
                        Authors are kindly invited to submit their formatted
                        full papers including results, tables, figures, and
                        references. Please, read authors guidelines carefully.
                      </p>

                      <h4> Types of Submissions and Decisions </h4>
                      <p>
                        The following types of papers can be submitted:
                        <ul style={{ listStyleType: "circle" }} align="left">
                          <li>
                            Finished or consolidated R&D works, to be included
                            in one of the Conference themes. These papers are
                            assigned a 10-page limit.
                          </li>
                          <li>
                            Ongoing works with relevant preliminary results,
                            open to discussion. These papers are assigned a
                            7-page limit.
                          </li>
                          {/* <li>
                          Poster paper: Initial work with relevant ideas, open
                          to discussion. These papers are assigned to a 4-page
                          limit.
                        </li> */}
                        </ul>
                      </p>
                      <p align="left">
                        Submitted papers must comply with the format of Lecture
                        Notes in Network Systems Series (see Instructions for
                        Authors at{" "}
                        <a
                          href="https://www.springer.com/de/authors-editors/book-authors-editors/resources-guidelines/book-manuscript-guidelines/manuscript-preparation/5636"
                          target="_blank"
                        >
                          Springer Website
                        </a>
                        ), be written in English, must not have been published
                        before, not be under review for any other conference or
                        publication and not include any information leading to
                        the authors’ identification. Therefore, the authors’
                        names, affiliations and bibliographic references should
                        not be included in the version for evaluation by the
                        Program Committee. This information should only be
                        included in the camera-ready version, saved in Word or
                        Latex format and also in PDF format. These files must be
                        accompanied by the Consent to Publish form filled out,
                        in a ZIP file, and uploaded at the conference management
                        system.
                      </p>
                      <p>
                        All papers will be subjected to a “double-blind review”
                        by at least three members of the Program Committee.
                      </p>
                      <p>
                        Based on Program Committee evaluation, a paper can be
                        rejected or accepted by the Conference Chairs. In the
                        later case, it can be accepted as the type originally
                        submitted or as another type. Thus, full papers can be
                        accepted as short papers or poster papers only.
                        Similarly, short papers can be accepted as poster papers
                        only.
                      </p>
                      <p>
                        Poster papers and Company papers are not published in
                        the Conference Proceedings, being only presented and
                        discussed. The authors of accepted poster papers should
                        build and print a poster to be exhibited during the
                        Conference. This poster must follow an A1 or A2 vertical
                        format. The Conference includes Work Sessions where
                        these posters are presented and orally discussed, with a
                        7 minute limit per poster.
                      </p>
                      <p>
                        The authors of accepted Full papers will have 15 minutes
                        to present their work in a Conference Work Session;
                        approximately 5 minutes of discussion will follow each
                        presentation. The authors of accepted Short papers and
                        Company papers will have 11 minutes to present their
                        work in a Conference Work Session; approximately 4
                        minutes of discussion will follow each presentation.
                      </p>
                      <h4> Publication and Indexing </h4>
                      <p>
                        To ensure that a full paper or short paper is published,
                        poster paper or company paper is published, at least one
                        of the authors must be fully registered by the 2nd of
                        January 2021, and the paper must comply with the
                        suggested layout and page-limit. Additionally, all
                        recommended changes must be addressed by the authors
                        before they submit the camera-ready version.
                      </p>
                      <p>
                        No more than one paper per registration will be
                        published. An extra fee must be paid for publication of
                        additional papers, with a maximum of one additional
                        paper per registration. One registration permits only
                        the participation of one author in the conference.
                      </p>
                      <p>
                        Full and Short papers will be published in Proceedings
                        by Springer, in Lecture Notes in Network System series.
                        Poster and company papers will not be published, just
                        presented in the conference.
                      </p>
                      <p>
                        Published Full and Short papers will be submitted for
                        indexation by <b>ISI</b>, <b>SCOPUS</b>, and{" "}
                        <b>Google Scholar</b>, among others, and will be
                        available in the <b>SpringerLink Digital Library.</b>
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
              <div className="col-lg-3 sidebar_col">
                <div className="sidebar">
                  <br></br>
                  <p>
                    {" "}
                    <img
                      src={require("../assets/springerlink.jpg")}
                      width="230"
                      height="auto"
                    />{" "}
                  </p>
                  <div className="categories sidebar_list">
                    <div className="sidebar_title">Proceedings</div>
                    <ul>
                      <li>
                        <a
                          href="https://www.springer.com/series/15179"
                          target="_blank"
                        >
                          Lecture Notes in Network Systems Series
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="categories sidebar_list">
                    <img
                      src={require("../assets/scopus.png")}
                      width="230"
                      height="auto"
                    />
                  </div>
                  <br></br>
                  <div className="categories sidebar_list">
                    <img
                      src={require("../assets/isi.jpg")}
                      width="230"
                      height="auto"
                    />
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

export default CallForPapers;
