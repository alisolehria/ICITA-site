import React from "react";
import Introduction from "./Introduction";
import PageCarousel from "../components/PageCarousel";
import Footer from "../components/Footer";

class TechnicalCommittee extends React.Component {
  componentDidMount() {
    document.title = "Technical Committee";
  }
  render() {
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title_container text-center">
                  <div className="section_title">
                    <h1>Technical committee</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <ul style={{ listStyleType: "circle" }} align="left">
                    <li>
                      Adnan, Awais, Institute of Management Sciences (Pakistan)
                    </li>
                    <li>
                      Ahmad ,Amro Al-Said, Philadelphia University (Jordan)
                    </li>
                    <li>
                      Ahmad Mughal,&nbsp;Imran, Institute of Management Sciences
                      (Pakistan)
                    </li>
                    <li>Ahmad, Ibrar, University of Peshawar (Pakistan)</li>
                    <li>Ahmad, Ishtiaq, University of South Australia</li>
                    <li>
                      Ahmad, Jamil, Islamia College University Peshawar
                      (Pakistan)
                    </li>
                    <li>
                      Ali Khan, Arif, Nanjing University of Aeronautics and
                      Astronautics (China)
                    </li>
                    <li>Ali Khan, Wajahat, &nbsp;University of Derby (UK)</li>
                    <li>
                      Ali Syed ,Toqeer, Islamic University of Medina (Saudi
                      Arabia)
                    </li>
                    <li>
                      Amin, Adnan, Institute of Management Sciences (Pakistan)
                    </li>
                    <li>
                      Ammar, Adel, Prince Sultan University (Saudi Arabia)
                    </li>
                    <li>Barker, Trevor, University of Hertfordshire (UK)</li>
                    <li>
                      Barolli, Leonard, Fukuoka Institute of Technology (Japan)
                    </li>
                    <li>
                      Beavan, Jay, Health Education and Improvement Wales (UK)
                    </li>
                    <li>Bilal, Mohsin, University of Warwick (UK)</li>
                    <li>Brassey, Jon, Oxford University, (UK)</li>
                    <li>Butcher, John, Aston University (UK)</li>
                    <li>Chbeir, Richard, Universite de Bourgogne, (France)</li>
                    <li>
                      Chen, Shaokang, The University of Queensland, (Australia)
                    </li>
                    <li>
                      Cheok, Adrian David, National University of Singapore,
                      (Singapore)
                    </li>
                    <li>Choi, Jaeho, Chonbuk National University, (Korea)</li>
                    <li>Dooley, Laurence S, Monash University, (Australia)</li>
                    <li>Durresi, Arjan, Louisiana State University, (USA)</li>
                    <li>Fernandez, George, RMIT, (Austrialia)</li>
                    <li>Finley, Marion R. Jr., Asahi University, (Japan)</li>
                    <li>Forughian, Tooraj, BBS Access Pte Ltd, (Singapore)</li>
                    <li>
                      Fu, Jiacai, Heilongjiang Institute of Science And
                      Technology , (China)
                    </li>
                    <li>Fujita, Satoshi, Hiroshima University, (Japan)</li>
                    <li>Fung, Lance, Murdoch University, (Australia)</li>
                    <li>
                      Gandelli, Alessandro, Politecnico di Milano, (Italy)
                    </li>
                    <li>
                      Gohar, Neelam, Shaheed Benazir Bhutto Women University
                      Peshawar (Pakistan)
                    </li>
                    <li>
                      Habib, Asad,&nbsp;Kohat university of science and
                      technology, Kohat (Pakistan)
                    </li>
                    <li>
                      Haleem, Zahid, Ghulam ishaq institute of Engineering
                      Sciences and Technology (Pakistan)
                    </li>
                    <li>Jabeen, Hajira, University of Cologne (Germany)</li>
                    <li>Jalil ,Zunera, Air University Islamabad (Pakistan)</li>
                    <li>
                      Jan, Zahoor, Islamia College University Peshawar
                      (Pakistan)
                    </li>
                    <li>
                      Khan, Ahmad, Comsats University Islamabad, Abbotabad
                      Campus (Pakistan)
                    </li>
                    <li>
                      Khan, Sifat Ullah, University of Malakand (Pakistan)
                    </li>
                    <li>Khattak, Asad,&nbsp;Zayed University (UAE )</li>
                    <li>
                      Khattak, Hassan&nbsp;Ali, Comsat University Islamabad
                      (Pakistan)
                    </li>
                    <li>Luke, Karl, Cardiff University, (UK) &nbsp;</li>
                    <li>Majid&nbsp;Bhatti, Baber, University of South (Aus)</li>
                    <li>
                      Mehmood Minhas, Nasir, &nbsp;Blekinge Institute of
                      Technology (Sweden)
                    </li>
                    <li>Mehmood, Irfan, University of Bradford (UK)</li>
                    <li>
                      Moreira, Fernando,&nbsp; Portucalense University, Portugal
                      &nbsp;
                    </li>
                    <li>Muhammad, Khan, Sejong University, South Korea</li>
                    <li>
                      Naseem, Rashid, Pak-Austria Fachhochschule Institute of
                      Applied Sciences and Technology (Pakistan)
                    </li>
                    <li>Nazir, Shah, University of Swabi (Pakistan)</li>
                    <li>
                      Noor, Salma, Shaheed Benazir Bhutto Women University
                      Peshawar (Pakistan)
                    </li>
                    <li>Obeidat, Qasem, University of Bahrain (Bahrain)</li>
                    <li>
                      Panichella, Sebastiano &nbsp; Zurich University of Applied
                      Science (Switzerland)
                    </li>
                    <li>
                      Paul, Enoiu, Eduard &nbsp;M&auml;lardalen University
                      (Sweden)
                    </li>
                    <li>Qayyum, Fawad, University of Malakand (Pakistan)</li>
                    <li>
                      Ramzan, Muhammad, Saudi Electronic University (Saudi
                      Arabia)
                    </li>
                    <li>
                      Rauf, Abdul, RISE-Research Institute of Sweden in Vasteras
                      (Sweden)
                    </li>
                    <li>Razzak, Imran, Deakin University (Australia)</li>
                    <li>Saman, Gule, Herriotwatt University (UK)</li>
                    <li>Shah, Babar, Zayed University (UAE)</li>
                    <li>
                      Usman, Muhammad, Blekinge Institute of Technology (Sweden)
                    </li>
                    <li>
                      Wiem, Mkaouer, Mohamed Rochester Institute of Technology,
                      New York (USA)
                    </li>
                    <li>
                      Williams, Jason, Cardiff Metropolitan University (UK)
                    </li>
                    <li>Xiao, Hannan, University of Hertfordshire (UK)</li>
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

export default TechnicalCommittee;
