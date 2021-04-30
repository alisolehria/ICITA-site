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
                        face-to-face). The open ceremony will be held at Heriot
                        Watt University, Dubai Knowledge Park, Dubai, UAE, and
                        broadcast live for all remote participants.
                      </p>
                      <p align="justify">
                        Links for the online event and program schedule will be
                        shared with all participants.
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

export default Venue;
