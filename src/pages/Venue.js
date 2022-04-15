import React from "react";

class Venue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "ICITA 2021 | Venue - 15th International Conference on Information Technology and Applications (ICITA)";
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
                    <h1>Venue</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <p align="justify">
                        {" "}
                        The event will be held in a hybrid mode (online and
                        face-to-face). The face-to-face event will be held at{" "}
                        <br></br>
                        <h3>
                          ISCTE - Instituto Universitário de Lisboa,
                          Audax,Lisbon, Portugal
                        </h3>{" "}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.7001844485567!2d-9.155380284307638!3d38.747641729593965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331baef35e33%3A0xabc0029f016e9f43!2sAudax%20%2F%20Centro%20de%20Empreendedorismo%20e%20Inova%C3%A7%C3%A3o%20do%20ISCTE-IUL!5e0!3m2!1sen!2sae!4v1641393317110!5m2!1sen!2sae"
                          width="600"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                        ></iframe>
                      </p>
                      {/* <p align="justify">
                        Links for the online event and program schedule will be
                        shared with all participants.
                      </p> */}
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

export default Venue;
