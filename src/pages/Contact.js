import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "ICITA 2021 | Contact";
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
                    <h1>Contact</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-md-6">
                      <h4>Find us</h4>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.7001844485567!2d-9.155380284307638!3d38.747641729593965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331baef35e33%3A0xabc0029f016e9f43!2sAudax%20%2F%20Centro%20de%20Empreendedorismo%20e%20Inova%C3%A7%C3%A3o%20do%20ISCTE-IUL!5e0!3m2!1sen!2sae!4v1641393317110!5m2!1sen!2sae"
                        width="400"
                        height="350"
                        frameBorder="0"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                      ></iframe>
                    </div>
                    <div className=" col-md-6">
                      <div className="contact_title">
                        <h4>Get in touch</h4>
                      </div>
                      <div className="contact_text">
                        <p>For questions or enquiries, contact</p>
                      </div>
                      <div className="contact_list">
                        <ul>
                          <li>Contact Conference chair,</li>
                          <li>chair@icita.world</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   <div>
      //     <div className="intro">
      //       <div className="container">
      //         <div className="row">
      //           <div className="contact container_wrapper">
      //             <div className="container">
      //               <div className="row row-eq-height">
      //                 <div className="col-xl-6 col-md-6 order-xl-1 order-2">
      //                   <div className="contact_map_container">
      //                     <div className="map">
      //                       <div id="google_map" className="google_map">
      //                         <div className="map_container">
      //                           <div id="map">
      //                             <iframe
      //                               src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57791.976628439246!2d55.169580894911334!3d25.135740237743143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sconference%20center%20near%20Block%2017%20Knowledge%20Park%20-%20Dubai!5e0!3m2!1sen!2sae!4v1595971420826!5m2!1sen!2sae"
      //                               width="400"
      //                               height="350"
      //                               frameBorder="0"
      //                               style={{ border: "0" }}
      //                               allowFullScreen=""
      //                               aria-hidden="false"
      //                               tabIndex="0"
      //                             ></iframe>
      //                           </div>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>

      //                 <div className="col-xl-6  col-md-6  order-xl-2 order-1">
      //                   <div className="contact_content">
      //                     <div className="contact_title">Get in touch</div>
      //                     <div className="contact_text">
      //                       <p>For questions or enquiries, contact</p>
      //                     </div>
      //                     <div className="contact_list">
      //                       <ul>
      //                         <li>Dubai Knowledge Park,</li>
      //                         <li>Dubai, UAE</li>
      //                         <li>chair@icita.world</li>
      //                       </ul>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default Contact;
