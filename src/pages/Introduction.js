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
                  Over the past many years, ICITA has been proudly sponsored by:
                  IEEE NSW Section, IEEE Computer Society, the University of
                  Technology Sydney, Australia; Charles Sturt University,
                  Australia; Heilongjiang University, China, Jiao-tong
                  University, China, ACM SIG CHI Singapore and Society of
                  Industry Technology. For the ICITA 2021, we gladly welcome the
                  Heriot-Watt University, Edinburgh/Dubai/Malaysia to join
                  others to be the sponsors of this event.
                </p>
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
