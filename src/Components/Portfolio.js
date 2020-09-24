import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <a href={projects.url} title={projects.title}>
                    <h5>
                      {projects.title} <i className="fa fa-link"></i>
                    </h5>
                  </a>
                  <p>{projects.category}</p>
                  <div>
                    <a href={projects.codeurl}>
                      <h6 style={{ color: "white", fontSize: "8pt" }}>
                        <i className="fa fa-code"></i> CODE
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
