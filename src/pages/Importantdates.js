import React from "react";
import PageCarousel from "../components/PageCarousel";

class ImoprtantDates extends React.Component {
  componentDidMount() {
    document.title = "ICITA | Organisers";
  }
  render() {
    // return (
    //   <div>

    //     <div className="intro">
    //       <div className="container">

    //         <div className="row">
    //           <div className="col text-center">
    //             <div className="section_title_container text-center">
    //               <div className="section_title">
    //                 <h1>Important Dates</h1>
    //               </div>
    //             </div>
    //             <div className="intro_text text-center">
    //               <div align="left">
    //                 <div>
    //                   <b>Paper Submission</b>
    //                 </div>
    //                 <ul style={{ listStyleType: "circle" }} align="left">
    //                   <li>
    //                     Paper submission due date: <b>5th June 2021</b>{" "}
    //                   </li>
    //                   <li>
    //                     Poster/Abstract submission due date:
    //                     <b>20th June 2021</b>{" "}
    //                   </li>
    //                   <li>
    //                     Acceptance Notification date: <b>10th Aug, 2021</b>{" "}
    //                   </li>
    //                   <li>
    //                     Camera Ready Submission date:<b>1st Sept, 2021</b>{" "}
    //                   </li>
    //                   <li>Submission System (Coming soon) </li>
    //                 </ul>
    //               </div>
    //               <div align="left">
    //                 <div>
    //                   <b>Registration</b>
    //                 </div>
    //                 <ul style={{ listStyleType: "circle" }} align="left">
    //                   <li>Early Bird Registration date: 1st September 2021 </li>
    //                   <li>Conference date 13-14 November 2021 </li>
    //                   <li>Registration System (Coming soon)</li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // );
    return (
      <div class="schedule">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="section_title_container text-center">
                <div class="section_subtitle"></div>
                <div class="section_title">
                  <h1>Important Dates</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row schedule_row">
            <div class="col-lg-6 schedule_col">
              <div class="schedule_container">
                <div class="schedule_title_bar schedule_title_bar_1 text-center">
                  Paper Submission <span>Dates</span>
                </div>
                <div class="schedule_list">
                  <ul>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image">
                        {/* <img src="images/schedule_1.jpg" alt="" /> */}
                      </div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Paper submission due date
                        </div>
                        <div class="schedule_title">5th June 2021</div>
                        {/* <div class="schedule_info">
                          
                        </div> */}
                      </div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image">
                        {/* <img src="images/schedule_1.jpg" alt="" /> */}
                      </div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Poster/Abstract Submission Date
                        </div>
                        <div class="schedule_title">20th June 2021</div>
                        {/* <div class="schedule_info">
                          
                        </div> */}
                      </div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image">
                        {/* <img src="images/schedule_1.jpg" alt="" /> */}
                      </div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Acceptance Notification Date
                        </div>
                        <div class="schedule_title">10th June 2021</div>
                      </div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image"></div>
                      <div class="schedule_content">
                        <div class="schedule_time">Camera Ready Submission</div>
                        <div class="schedule_title">1st Sept, 2021</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-6 schedule_col">
              <div class="schedule_container">
                <div class="schedule_title_bar schedule_title_bar_2 text-center">
                  Workshop/Special Session <span>Dates</span>
                </div>
                <div class="schedule_list">
                  <ul>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image"></div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Workshop/Special Session Proposal
                        </div>
                        <div class="schedule_title">5th May, 2021</div>
                        {/* <div class="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image"></div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Notification of Workshop/Special Acceptance
                        </div>
                        <div class="schedule_title">5th June, 2021</div>
                        {/* <div class="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image"></div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Workshop Final Information and Program Committee:
                        </div>
                        <div class="schedule_title">15th June, 2021</div>
                        {/* <div class="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image"></div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Deadline for paper submission
                        </div>
                        <div class="schedule_title">5th July, 2021</div>
                        {/* <div class="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image"></div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Notification of Acceptance
                        </div>
                        <div class="schedule_title">5th August, 2021</div>
                        {/* <div class="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li class="d-flex flex-row align-items-center justify-content-start">
                      <div class="schedule_image"></div>
                      <div class="schedule_content">
                        <div class="schedule_time">
                          Camera ready paper and registration
                        </div>
                        <div class="schedule_title">2nd Sept, 2021</div>
                        {/* <div class="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImoprtantDates;
