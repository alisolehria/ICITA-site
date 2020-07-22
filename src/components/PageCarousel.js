import React from "react";

class PageCarousel extends React.Component {
  render() {
    return (
      <div>
        <img class="pageCarousel" src={carouselPic3} />
        <div class="home_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content">
                  <div class="home_title">
                    <h1>
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
export default Page;
