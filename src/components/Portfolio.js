import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My recent impact in the world</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <NavLink to={`${item.url}`}>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      
                        <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      
                  </div>
                </div>
                </NavLink>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}

