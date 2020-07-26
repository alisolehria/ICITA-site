import React from "react";
import PageCarousel from "../components/PageCarousel";

class PreviousListings extends React.Component {
  componentDidMount() {
    document.title = "Previous Conferences";
  }
  render() {
    return (
      <div>
        <div class="intro">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title_container text-center">
                  <div class="section_title">
                    <h1>Important Dates</h1>
                  </div>
                </div>
                <div class="intro_text text-center">
                  <div align="left">
                    <div>
                      <b>Paper Submission</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>
                        Paper submission due date: <b>5th June 2021</b>{" "}
                      </li>
                      <li>
                        Poster/Abstract submission due date:
                        <b>20th June 2021</b>{" "}
                      </li>
                      <li>
                        Acceptance Notification date: <b>10th Aug, 2021</b>{" "}
                      </li>
                      <li>
                        Camera Ready Submission date:<b>1st Sept, 2021</b>{" "}
                      </li>
                      <li>Submission System (Coming soon) </li>
                    </ul>
                  </div>
                  <div align="left">
                    <div>
                      <b>Registration</b>
                    </div>
                    <ul style={{ listStyleType: "circle" }} align="left">
                      <li>Early Bird Registration date: 1st September 2021 </li>
                      <li>Conference date 13-14 November 2021 </li>
                      <li>Registration System (Coming soon)</li>
                    </ul>
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

export default PreviousListings;
