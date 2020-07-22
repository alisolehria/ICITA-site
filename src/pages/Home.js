import React from "react";
import TopCarousel from "./TopCarousel";
import Introduction from "./Introduction";
import Footer from "./Footer";
import Timer from "./Timer";
class Home extends React.Component {
  componentDidMount() {
    document.title = "ICITA";
  }
  render() {
    return (
      <div>
        <TopCarousel />
        <Timer />
        <Introduction />
        <Footer />
      </div>
    );
  }
}

export default Home;
