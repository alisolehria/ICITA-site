import React from "react";

class Introduction extends React.Component {
  render() {
    return (
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title_container text-center">
                <div className="section_title">
                  <h1>ICITA 2021</h1>
                </div>
              </div>
              <div className="intro_left_content text_left">
                <p align="left">
                  The 15th International Conference on Information Technology
                  and Applications (ICITA 2021) will be held in Dubai, UAE on 13
                  - 14 November 2021. The conference is an annual event and
                  recognized as one of the major series of conferences in
                  Information Technology (IT in short). ICITA continues to
                  retain its tradition of being a high quality conference. The
                  event will open an opportunity for academics and industry
                  professionals worldwide to exchange their knowledge of the
                  state-of-the-art research and development in information
                  technology and applications. It will help participants
                  establish new links and extend professional networks. This
                  conference addresses the importance that IT professionals
                  stretch across narrowly defined subject areas and constantly
                  acquire a global technical and social perspective. ICITA 2021
                  offers such an opportunity to facilitate cross-disciplinary
                  and social gatherings.{" "}
                </p>
                <p align="left">
                  Since 2002 ICITA has maintained a high conference standard,
                  and several thousand academics and Information Technology
                  professionals have used it as a presenting, publishing and
                  networking medium for their research findings. We are
                  confident that more will be achieved during the next ten
                  years! The conference will be held at Dubai, UAE. from the 13
                  through 15th of November, 2021. The aim of International
                  Conference on Information Technology and Applications is to
                  provide a platform for academics and engineers in computer
                  technology to meet, exchange ideas, and establish professional
                  networks. It is a forum which will focus on specific
                  disciplinary research as well as on multi-disciplinary
                  studies. The uniqueness of ICITA is that it enables scientists
                  in the world to communicate not only about technical issues,
                  but also any of the other areas which use technology.
                </p>
                <p align="left">
                  Over the past many years, ICITA has been proudly sponsored by:
                  IEEE NSW Section, IEEE Computer Society, the University of
                  Technology Sydney, Australia; Charles Sturt University,
                  Australia; Heilongjiang University, China, Jiao-tong
                  University, China, ACM SIG CHI Singapore and Society of
                  Industry Technology. For the ICITA 2021, we gladly welcome the
                  Heriot-Watt University, Edinburgh/Dubai/Malaysia to join
                  others to be the sponsors of this event.
                </p>
                <p align="left">
                  ull and short papers accepted and registered will be published
                  in Proceedings by Springer, will be submitted for indexation
                  by ISI, EI-Compendex, and SCOPUS , among others, and will be
                  available in the SpringerLink Digital Library.
                </p>
                <div className="row">
                  <div className="col-lg-4">
                    {" "}
                    <img
                      src={require("../assets/springerlink.jpg")}
                      width="230"
                      height="auto"
                    />{" "}
                  </div>
                  <div className="col-lg-4">
                    <img
                      src={require("../assets/isi.jpg")}
                      width="230"
                      height="auto"
                    />
                  </div>
                  <div className="col-lg-4">
                    <img
                      src={require("../assets/scopus.png")}
                      width="230"
                      height="auto"
                    />
                  </div>
                </div>
                <div className="alert warning">
                  The ICITA conference will be co-located with{" "}
                  <a href="http://www.acsconf.org" targe="_blank">
                    Applied Cybersecurity Conference (ACS)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Introduction;
