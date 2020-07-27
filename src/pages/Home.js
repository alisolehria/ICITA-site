import React from "react";
import TopCarousel from "./TopCarousel";
import Introduction from "./Introduction";
import Timer from "../components/Timer";
const axios = require("axios");

class Home extends React.Component {
  /**
   * fetchData
   * Send a call to express API for standard search
   * @param {*} keywords
   */
  async fetchData() {
    axios
      .get("http://localhost:1337/pages/1")

      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          this.state.data(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    document.title = "ICITA";
    // this.fetchData();
    //console.log(process.env.NODE_ENV);
  }
  render() {
    return (
      <div>
        <TopCarousel />
        {/* <Timer /> */}
        <Introduction />
      </div>
    );
  }
}

export default Home;
