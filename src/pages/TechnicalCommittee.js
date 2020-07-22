import React from "react";
import Introduction from "./Introduction";
import PageCarousel from "../components/PageCarousel";
import Footer from "../components/Footer";

class TechnicalCommittee extends React.Component {
  componentDidMount() {
    document.title = "Technical Committee";
  }
  render() {
    return <div>Tech Committee</div>;
  }
}

export default TechnicalCommittee;
