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
      <div className="schedule">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container text-center">
                <div className="section_subtitle"></div>
                <div className="section_title">
                  <h1>Important Dates</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row schedule_row">
            <div className="col-lg-6 schedule_col">
              <div className="schedule_container">
                <div className="schedule_title_bar schedule_title_bar_1 text-center">
                  Paper Submission <span>Dates</span>
                </div>
                <div className="schedule_list">
                  <ul>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image">
                        {/* <img src="images/schedule_1.jpg" alt="" /> */}
                      </div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Conference paper/ submission deadline
                        </div>
                        <div className="schedule_title">
                          <br></br>
                          <strike>
                            5<sup>th</sup> July 2022
                          </strike>{" "}
                          <br></br>20<sup>th</sup> July 2022
                        </div>
                        {/* <div className="schedule_info">
                          
                        </div> */}
                      </div>
                    </li>
                    {/* <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image">
                      </div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Poster/Paper Submission Date
                        </div>
                        <div className="schedule_title">20th June 2022</div>
                      </div>
                    </li> */}
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image">
                        {/* <img src="images/schedule_1.jpg" alt="" /> */}
                      </div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Conference paper notification
                        </div>
                        <div className="schedule_title">20th August 2022</div>
                      </div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image"></div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Camera Ready Submission (Strict)
                        </div>
                        <div className="schedule_title">22th August 2022</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 schedule_col">
              <div className="schedule_container">
                <div className="schedule_title_bar schedule_title_bar_2 text-center">
                  Workshop/Special Session <span>Dates</span>
                </div>
                <div className="schedule_list">
                  <ul>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image"></div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Workshop/Special Session Proposal
                        </div>
                        <div className="schedule_title">5th May, 2022</div>
                        {/* <div className="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image"></div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Notification of Workshop/Special Acceptance
                        </div>
                        <div className="schedule_title">5th June, 2022</div>
                        {/* <div className="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image"></div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Workshop Final Information and Program Committee:
                        </div>
                        <div className="schedule_title">15th June, 2022</div>
                        {/* <div className="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image"></div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Deadline for paper submission
                        </div>
                        <div className="schedule_title">5th July, 2022</div>
                        {/* <div className="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image"></div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Notification of Acceptance
                        </div>
                        <div className="schedule_title">25th July, 2022</div>
                        {/* <div className="schedule_info">
                         Footer
                        </div> */}
                      </div>
                    </li>
                    <li className="d-flex flex-row align-items-center justify-content-start">
                      <div className="schedule_image"></div>
                      <div className="schedule_content">
                        <div className="schedule_time">
                          Camera ready paper and registration (Strict)
                        </div>
                        <div className="schedule_title">30th July, 2022</div>
                        {/* <div className="schedule_info">
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
