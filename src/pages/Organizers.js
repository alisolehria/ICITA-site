import React from "react";
import PageCarousel from "../components/PageCarousel";

class Organizers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "Organizers";
    fetch(window.$strapiLink)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return <div>Organisers</div>;
  }
}

export default Organizers;
