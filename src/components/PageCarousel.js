import React from "react";
import carouselPic3 from "../assets/blog_page.jpg";

class PageCarousel extends React.Component {
  render() {
    return (
      <div>
        <img className="pageCarousel" src={carouselPic3} />
        <div className="home_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_title">
                    <h1>
                      {this.props.prefix && <span>{this.props.prefix}</span>}

                      <span style={{ color: "white" }}>{this.props.title}</span>
                    </h1>
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
export default PageCarousel;
